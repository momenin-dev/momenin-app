export type EventCategory = "Pernikahan" | "Khitan" | "Birthday" | "Bukber" | "Natal";
export type TemplateTag = "Popular" | "New" | "Adat" | "Artistic" | "Modern" | "Legacy";

export type TemplateTheme = {
  stageBg: string;      // background panel mockup, mis. "#EFE8DE"
  stageBgDark?: boolean;
  accent: string;       // border/aksen phone utama
  swatches: string[];   // 2 warna swatch
};

/** Baris tabel `templates` di Supabase */
export type Template = {
  id: string;
  slug: string;
  name: string;            // Nama Template
  category: EventCategory; // Kategori
  price_idr: number;       // Harga
  tags: TemplateTag[];
  theme: TemplateTheme;
  preview_url: string | null;
  is_active: boolean;
};

/** Baris tabel `packages` */
export type Package = {
  id: "free" | "silver" | "gold" | "unlimited";
  name: string;
  price_idr: number;
  headerGradient: string;  // "from-[#FCEBE8] to-[#F8DED9]"
  borderColor: string;
  features: string[];
  wa_blast_quota: number;
  active_days: number | null; // null = selamanya
};

export type OrderStatus = "pending" | "paid" | "failed" | "expired";
