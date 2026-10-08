# MomenIn — Design System

Tema: **Nusantara modern** (Gunungan wayang + batik filigree), dark-first, aksen emas & marun. Bahasa UI: Indonesia (`lang="id"`).
Stack: Tailwind CSS v4 (arbitrary values dipakai langsung di markup), Playfair Display + Plus Jakarta Sans.

## 1. Color Tokens
| Token | Hex | Pemakaian |
|---|---|---|
| `bg-base` | `#080C14` | Background halaman, footer |
| `surface-1` | `#161D2B` | Input search, tombol avatar |
| `surface-2` | `#0E1524` | Ujung gradient kartu fitur, tombol ghost hero |
| `surface-3` | `#182133` | Awal gradient kartu fitur |
| `maroon` | `#761B28` | CTA utama, pill aktif, ikon badge, selection |
| `maroon-hover` | `#8A2030` (nav: `#8B2232`) | Hover CTA |
| `maroon-deep` | `#8A2030 → #4A121B` | Gradient logo; footer pill `#731924 → #59121B` |
| `gold` | `#C4A47C` | Aksen utama: border, titik logo, ornamen SVG |
| `gold-light` | `#E5C9A6` | Heading footer, glow, ilustrasi Gunungan |
| `gold-dark` | `#9E7A4A` | Border tombol hero, ornamen mockup |
| `gold-line` | `#A8844F` (50%) | Garis pembatas footer |
| `gold-btn` | `#D6A763 → #B88942` | Pill WhatsApp (teks `#2D1A0C`) |
| `cream` | `#F1DFC5` | Heading & logo; `#EAD2B4` untuk teks emphasis |
| `cream-bg` | `#FAF6EE` | Layar mockup undangan |
| `text-body` | `#BFB5A7` | Paragraf di atas dark |
| `text-nav` | `#D1C7BA` / `#E1D7CA` | Link nav, teks sekunder |
| `text-muted` | `#9C9283` / `#A9B4C4` | Copyright / deskripsi kartu fitur |
| `card-light` | `#FFFFFF` | Kartu katalog & paket (kontras di atas dark) |
| `ink` | `#111827` / `#6B7280` | Judul / meta di kartu putih |

Header kartu paket (gradient atas→bawah): Free `#FCEBE8→#F8DED9`, Silver `#EBECEE→#DFE1E5`, Gold `#FAF0D9→#F5E2BB`, Unlimited `#FCEAE6→#F6DDD7`.
Glow ambient: `#E5C9A6/10`, `#9E7A4A/10`, `#761B28/15` dengan `blur-[120–160px]`.

## 2. Typography
- **Display/Heading**: `Playfair Display` 500–800 (+ italic 600). Fallback `serif`.
- **Body/UI**: `Plus Jakarta Sans` 300–700. Fallback `sans-serif`.
- Skala: Hero H1 `text-4xl → sm:5xl → lg:62px`, `leading-[1.12]`, bold, `tracking-tight` · H2 section `3xl → 4xl → 40–42px` · H3 kartu `text-base/lg bold` · body `text-sm/base`, `leading-relaxed` · caption `text-xs`.
- Wordmark: Playfair bold, "M" italic terbalik (`-scale-x-100`) di footer; header memakai `MomenIn` + titik emas.

## 3. Spacing, Layout, Radius, Shadow
- Container: `mx-auto max-w-7xl px-4 sm:px-6 lg:px-8` (fitur: `max-w-5xl`). Section padding vertikal `py-16–28`.
- Grid: katalog & paket `1 → sm:2 → lg:4` kolom, `gap-6`; fitur `1 → md:2`, `gap-5/6`; footer `12-col` (5/3/4).
- Radius: pill `rounded-full` (CTA, filter, input) · `rounded-xl` (tombol hero/paket) · `rounded-2xl` (kartu katalog) · `rounded-3xl` (kartu fitur & paket) · phone `rounded-[42px]`.
- Shadow: kartu `shadow-xl/2xl`; CTA `shadow-md shadow-[#761B28]/30`; phone `shadow-[-18px_25px_40px_-10px_rgba(0,0,0,0.85)]`.

## 4. Komponen & State
- **Tombol primer**: `rounded-full bg-[#761B28] text-white hover:bg-[#8A2030] active:scale-95`. **Ghost**: `border border-white/20 text-[#E1D7CA] hover:border-[#C4A47C]`.
- **Pill filter**: aktif = maroon solid; non-aktif = ghost. Baris 1 kategori acara, baris 2 tag (Popular, New, Adat, Artistic, Modern, Legacy).
- **Kartu katalog** (putih): stage mockup 3 mini-phone (`h-56`, tinted per tema) + swatch warna + nama / kategori / harga + `Preview` (outline) & `+ Pesan` (maroon). Hover `-translate-y-1`.
- **Kartu fitur**: gradient `#182133→#0E1524`, border `white/10`, hover border `#C4A47C/40`, badge ikon bulat maroon 56px.
- **Kartu paket**: header tinted per tier, checklist (bulatan maroon 16px + ikon centang putih), tombol `Pesan Sekarang`. Hover `-translate-y-1.5`.
- **Footer pill sosial**: WhatsApp = gradient emas; Instagram/Facebook = gradient marun + border `#C4A47C/70`.
- Transisi: `transition-all duration-300`; fokus input `ring-1 ring-[#C4A47C]`.

## 5. Ornamen & Motif
Gunungan wayang (nav logo, mockup, watermark `opacity-15`), filigree batik di 4 sudut footer (`opacity-25`, stroke 1.2–2 `#C4A47C`), garis emas tipis (`h-px`) sebagai pembatas, simbol `✦`. Dekorasi selalu `pointer-events-none`, di belakang konten (`z-10` untuk konten).

## 6. Aturan Pakai
1. Background halaman selalu `#080C14`; kartu produk putih agar mockup menonjol.
2. Satu CTA utama per area memakai maroon; emas dipakai untuk aksen/garis, bukan blok besar (kecuali pill WhatsApp).
3. Heading memakai Playfair + warna cream; teks isi memakai Plus Jakarta Sans.
4. Maksimum 1 ornamen besar per sudut; opacity ornamen ≤ 25%.
5. Selalu sediakan hover + `active:scale-95` pada elemen interaktif; ikon dekoratif tanpa teks perlu `aria-label` bila tombol.
6. Tipografi mockup undangan (layar krem) memakai ink `#2B2117`, aksen `#9E7A4A`.

## 7. Catatan Konsistensi (dari audit slice)
- Roadmap memakai palet `#D4AF37 / #7A1C28 / #0B0E14` + Cinzel/Inter; **landing page memakai nilai di atas**. Landing page menjadi sumber kebenaran.
- Roadmap menyebut 5 kategori (termasuk Bukber); UI katalog baru menampilkan 4 pill.
