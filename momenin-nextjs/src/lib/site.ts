// Satu sumber konfigurasi brand & kontak (isi dari .env / ganti placeholder).
const wa = process.env.NEXT_PUBLIC_WA_NUMBER ?? "6281234567890";
export const site = {
  name: "MomenIn",
  tagline: "MomenIn berkomitmen melestarikan tradisi dalam kemudahan digital, membantu Anda mengabadikan setiap momen berharga dengan elegan, cepat, dan tanpa drama.",
  address: "Semarang, Jawa Tengah",          // TODO: placeholder dari slice footer
  email: "email@momenin.com",
  phone: "+62 812-3456-7890",
  whatsappUrl: `https://wa.me/${wa}`,
  instagramUrl: "https://instagram.com/momenin",
  facebookUrl: "https://facebook.com/momenin",
};
export const idr = (n: number) => (n === 0 ? "IDR 0 / Gratis" : "IDR " + n.toLocaleString("id-ID"));
export const rp = (n: number) => "Rp " + n.toLocaleString("id-ID");
