/** Kirim 1 pesan WA via Fonnte. `delay` (detik) mengurangi risiko ban saat blast. */
export async function sendWA(target: string, message: string, delay = "5-12") {
  const res = await fetch("https://api.fonnte.com/send", {
    method: "POST",
    headers: { Authorization: process.env.FONNTE_TOKEN! },
    body: new URLSearchParams({ target, message, delay, countryCode: "62" }),
  });
  const json = await res.json();
  return { ok: res.ok && json.status === true, raw: json };
}
export const personalize = (tpl: string, v: { nama: string; link: string }) =>
  tpl.replaceAll("{nama}", v.nama).replaceAll("{link}", v.link);
