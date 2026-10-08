import crypto from "crypto";
const isProd = process.env.MIDTRANS_IS_PRODUCTION === "true";
const base = isProd ? "https://app.midtrans.com" : "https://app.sandbox.midtrans.com";
const auth = () => "Basic " + Buffer.from(process.env.MIDTRANS_SERVER_KEY + ":").toString("base64");

export async function createSnap(p: { orderId: string; amount: number; name: string; phone: string; itemName: string }) {
  const res = await fetch(`${base}/snap/v1/transactions`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json", Authorization: auth() },
    body: JSON.stringify({
      transaction_details: { order_id: p.orderId, gross_amount: p.amount },
      item_details: [{ id: p.orderId, price: p.amount, quantity: 1, name: p.itemName.slice(0, 50) }],
      customer_details: { first_name: p.name, phone: p.phone },
      enabled_payments: ["qris", "gopay", "shopeepay", "bank_transfer"],
    }),
  });
  if (!res.ok) throw new Error("Midtrans: " + (await res.text()));
  return (await res.json()) as { token: string; redirect_url: string };
}

/** signature_key = SHA512(order_id + status_code + gross_amount + ServerKey) */
export const verifySignature = (b: { order_id: string; status_code: string; gross_amount: string; signature_key: string }) =>
  crypto.createHash("sha512").update(b.order_id + b.status_code + b.gross_amount + process.env.MIDTRANS_SERVER_KEY).digest("hex") === b.signature_key;
