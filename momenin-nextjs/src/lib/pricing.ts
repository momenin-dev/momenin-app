import type { Template, Package } from "./types";
/**
 * ASUMSI: total = harga template + harga paket (Free = 0).
 * Roadmap belum menjelaskan relasi harga template (Rp149.000) vs paket (49K–249K).
 * Ubah HANYA di sini bila modelnya berbeda; API order memakai fungsi ini (harga tidak pernah dipercaya dari client).
 */
export const orderTotal = (t: Template, p: Package) => t.price_idr + p.price_idr;

/** Link pesan default; dipakai sebagai prop `orderHref` pada TemplateCard. */
export const orderHref = (t: Pick<Template, "slug">, pkg?: string) =>
  `/pesan/${t.slug}${pkg ? `?paket=${pkg}` : ""}`;
