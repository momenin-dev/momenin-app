// Tahap 5: WA Blast via Fonnte. TODO(auth): verifikasi sesi Supabase & kepemilikan order sebelum produksi.
import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { sendWA, personalize } from "@/lib/fonnte";

export const maxDuration = 60; // blast besar → pindahkan ke queue worker (Supabase Edge Function / cron)

export async function POST(req: Request) {
  const { orderId, message } = await req.json(); // message memakai {nama} & {link}
  const db = supabaseAdmin();
  const { data: o } = await db.from("orders").select("id,slug,status,packages(wa_blast_quota)").eq("id", orderId).single();
  if (!o || o.status !== "paid") return NextResponse.json({ error: "Order belum dibayar" }, { status: 402 });

  const quota = (o as any).packages?.wa_blast_quota ?? 0;
  const { count: sent = 0 } = await db.from("guests").select("id", { count: "exact", head: true }).eq("order_id", o.id).eq("wa_status", "sent");
  const { data: guests } = await db.from("guests").select("*").eq("order_id", o.id).eq("wa_status", "pending").limit(Math.max(0, quota - (sent ?? 0)));

  let ok = 0;
  for (const g of guests ?? []) {
    const link = `${process.env.NEXT_PUBLIC_BASE_URL}/${o.slug}?to=${encodeURIComponent(g.name)}`;
    const r = await sendWA(g.phone, personalize(message, { nama: g.name, link }));
    await db.from("guests").update({ wa_status: r.ok ? "sent" : "failed" }).eq("id", g.id);
    if (r.ok) ok++;
  }
  return NextResponse.json({ sent: ok, attempted: guests?.length ?? 0, quota, remaining: quota - (sent ?? 0) - ok });
}
