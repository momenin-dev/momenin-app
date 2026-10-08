// Tahap 3→4: Midtrans HTTP Notification. Set URL ini di Dashboard Midtrans → Settings → Payment → Notification URL.
import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { verifySignature } from "@/lib/midtrans";

export async function POST(req: Request) {
  const n = await req.json();
  if (!verifySignature(n)) return NextResponse.json({ error: "bad signature" }, { status: 401 });

  const paid = n.transaction_status === "settlement" || (n.transaction_status === "capture" && n.fraud_status === "accept");
  const status = paid ? "paid" : n.transaction_status === "pending" ? "pending" : n.transaction_status === "expire" ? "expired" : "failed";

  const db = supabaseAdmin();
  const { data: order } = await db.from("orders").select("id,status,package_id").eq("order_code", n.order_id).single();
  if (!order) return NextResponse.json({ ok: true });       // idempoten
  if (order.status === "paid") return NextResponse.json({ ok: true });

  const patch: Record<string, unknown> = { status };
  if (paid) {
    const { data: pkg } = await db.from("packages").select("active_days").eq("id", order.package_id).single();
    patch.paid_at = new Date().toISOString();
    patch.expires_at = pkg?.active_days ? new Date(Date.now() + pkg.active_days * 864e5).toISOString() : null;
    // URL momenin.id/<slug> aktif: halaman undangan membaca orders WHERE slug=? AND status='paid'
  }
  await db.from("orders").update(patch).eq("id", order.id);
  return NextResponse.json({ ok: true });
}
