// Tahap 2→3: simpan data form, hitung total di SERVER, buat transaksi Midtrans Snap.
import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { createSnap } from "@/lib/midtrans";
import { orderTotal } from "@/lib/pricing";

const SLUG = /^[a-z0-9]+(-[a-z0-9]+)*$/;

export async function POST(req: Request) {
  const b = await req.json();
  const { templateSlug, packageId, customerName, customerPhone, eventData, slug } = b;
  if (!SLUG.test(slug ?? "") || slug.length < 3 || slug.length > 40) return NextResponse.json({ error: "Slug tidak valid" }, { status: 400 });
  if (!customerName || !/^(\+?62|0)8\d{7,12}$/.test(customerPhone ?? "")) return NextResponse.json({ error: "Data pemesan tidak valid" }, { status: 400 });

  const db = supabaseAdmin();
  const [{ data: t }, { data: p }] = await Promise.all([
    db.from("templates").select("*").eq("slug", templateSlug).eq("is_active", true).single(),
    db.from("packages").select("*").eq("id", packageId).single(),
  ]);
  if (!t || !p) return NextResponse.json({ error: "Template/paket tidak ditemukan" }, { status: 404 });

  const total = orderTotal(t, p);
  const orderCode = `MIN-${Date.now()}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;

  const { data: order, error } = await db.from("orders").insert({
    order_code: orderCode, template_id: t.id, package_id: p.id, customer_name: customerName, customer_phone: customerPhone,
    event_data: eventData ?? {}, slug, gross_amount: total, status: total === 0 ? "paid" : "pending",
  }).select().single();
  if (error) return NextResponse.json({ error: error.code === "23505" ? "Link undangan sudah dipakai" : error.message }, { status: 409 });
  if (total === 0) return NextResponse.json({ orderCode, free: true, url: `/${slug}` });

  const snap = await createSnap({ orderId: orderCode, amount: total, name: customerName, phone: customerPhone, itemName: `${t.name} - ${p.name}` });
  await db.from("orders").update({ snap_token: snap.token }).eq("id", order.id);
  return NextResponse.json({ orderCode, token: snap.token, redirectUrl: snap.redirect_url }); // client: window.snap.pay(token)
}
