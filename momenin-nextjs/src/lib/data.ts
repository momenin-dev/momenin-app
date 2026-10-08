// Seed/fallback. Sumber utama: tabel Supabase `templates` & `packages` (lihat supabase/schema.sql).
import type { Template, Package } from "./types";

export const seedTemplates: Template[] = [
  { id: "t1", slug: "serene-bloom", name: "Serene Bloom", category: "Pernikahan", price_idr: 149000, tags: ["Popular", "Modern"], preview_url: null, is_active: true,
    theme: { stageBg: "#EFE8DE", accent: "#D5C2A5", swatches: ["#FFFFFF", "#BD8F72"] } },
  { id: "t2", slug: "secret-garden", name: "Secret Garden", category: "Pernikahan", price_idr: 149000, tags: ["New", "Artistic"], preview_url: null, is_active: true,
    theme: { stageBg: "#DEE7E1", accent: "#A7C1AE", swatches: ["#FCFDFB", "#759880"] } },
  { id: "t3", slug: "midnight-serenade", name: "Midnight Serenade", category: "Pernikahan", price_idr: 149000, tags: ["Modern"], preview_url: null, is_active: true,
    theme: { stageBg: "#182338", stageBgDark: true, accent: "#38BDF8", swatches: ["#FFFFFF", "#2563EB"] } },
  { id: "t4", slug: "royal-javanese", name: "Jawa - Royal Javanese", category: "Pernikahan", price_idr: 149000, tags: ["Adat", "Legacy", "Popular"], preview_url: null, is_active: true,
    theme: { stageBg: "#ECE3D4", accent: "#C4A47C", swatches: ["#FFFFFF", "#523A25"] } },
];

const chk = (s: string[]) => s;
export const seedPackages: Package[] = [
  { id: "free", name: "Free Package", price_idr: 0, wa_blast_quota: 0, active_days: 2, headerGradient: "from-[#FCEBE8] to-[#F8DED9]", borderColor: "border-[#F0D0C8]",
    features: chk(["Masa Aktif 2 Hari", "Basic Music", "Share & Buku Tamu Unlimited", "Countdown Acara"]) },
  { id: "silver", name: "Silver Package", price_idr: 49000, wa_blast_quota: 50, active_days: 10, headerGradient: "from-[#EBECEE] to-[#DFE1E5]", borderColor: "border-[#D2D5DC]",
    features: ["Masa Aktif 10 Hari", "50 WA Blast", "2 Jenis Acara", "Bebas Musik"] },
  { id: "gold", name: "Gold Package", price_idr: 79000, wa_blast_quota: 100, active_days: 30, headerGradient: "from-[#FAF0D9] to-[#F5E2BB]", borderColor: "border-[#EBD4A5]",
    features: ["Masa Aktif 1 Bulan", "100 WA Blast", "Amplop Digital", "Bebas Musik"] },
  { id: "unlimited", name: "Unlimited Package", price_idr: 249000, wa_blast_quota: 800, active_days: null, headerGradient: "from-[#FCEAE6] to-[#F6DDD7]", borderColor: "border-[#ECCEC6]",
    features: ["Masa Aktif Selamanya", "800 WA Blast", "Custom Font", "Bebas Musik", "Google Maps Lokasi", "Voice Comment"] },
];

export const categories = ["Pernikahan", "Khitan", "Birthday", "Bukber", "Natal"] as const;
export const tags = ["Popular", "New", "Adat", "Artistic", "Modern", "Legacy"] as const;

export const features = [
  { title: "Wedding Planner", icon: "pin", desc: "Bantuan merencanakan konsep acara agar hari bahagiamu berjalan lancar sesuai keinginan." },
  { title: "WA Blast", icon: "chat", desc: "Kirim undangan otomatis ke ratusan tamu sekaligus lewat WhatsApp. Praktis, hemat, dan menjangkau semua tamu." },
  { title: "Cepat & Mudah", icon: "bolt", desc: "Cukup dalam hitungan menit, website undangan digitalmu sudah siap dan aktif." },
  { title: "QR Scanner Tamu", icon: "qr", desc: "Check-in tamu di lokasi acara jadi lebih cepat dan rapi lewat pemindaian QR Code." },
] as const;
