import Link from "next/link";
import type { EventCategory, TemplateTheme } from "@/lib/types";
import { rp } from "@/lib/site";

export type TemplateCardProps = {
  name: string;               // Nama Template
  price: number;              // Harga (IDR)
  category: EventCategory | string; // Kategori
  orderHref: string;          // Link Pesan
  previewHref?: string | null;
  theme: TemplateTheme;
};

export default function TemplateCard({ name, price, category, orderHref, previewHref, theme }: TemplateCardProps) {
  const dark = theme.stageBgDark;
  const mini = { background: dark ? "#111827" : "#F8F5EE" };
  return (
    <div className="group flex flex-col rounded-2xl bg-white overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="relative h-56 w-full p-3 flex items-center justify-center overflow-hidden" style={{ background: theme.stageBg }}>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/10" />
        <div className="relative z-10 flex items-center justify-center -space-x-4">
          <div className="w-16 h-32 rounded-xl border border-black/10 shadow-md p-1 -rotate-3 overflow-hidden" style={mini}>
            <div className="h-full w-full rounded-lg" style={{ background: `linear-gradient(to bottom, ${theme.stageBg}, ${theme.accent}66)` }} />
          </div>
          <div className="z-20 w-24 h-44 rounded-2xl border-2 shadow-lg p-1.5 flex flex-col items-center justify-between text-center"
               style={{ borderColor: theme.accent, background: dark ? "#0F172A" : "#FBF9F4", color: dark ? "#F8FAFC" : "#4A3B2C" }}>
            <div className="w-6 h-1.5 bg-black/20 rounded-full" />
            <div className="font-['Playfair_Display',serif] text-[10px] font-bold leading-tight px-1">{name}</div>
            <div className="h-14 w-full rounded flex items-end justify-center pb-1" style={{ background: `linear-gradient(to top, ${theme.accent}55, transparent)` }}>
              <div className="h-2 w-10 bg-[#761B28] rounded-full" />
            </div>
          </div>
          <div className="w-16 h-32 rounded-xl border border-black/10 shadow-md p-1 rotate-3 overflow-hidden" style={mini}>
            <div className="h-full w-full rounded-lg" style={{ background: `linear-gradient(to bottom, ${theme.stageBg}, ${theme.accent}99)` }} />
          </div>
        </div>
        <div className="absolute bottom-2.5 left-3 z-30 flex items-center gap-1.5 bg-black/25 backdrop-blur-sm px-2 py-1 rounded-full">
          {theme.swatches.map((c) => <span key={c} className="h-3 w-3 rounded-full border border-white/60" style={{ background: c }} />)}
        </div>
      </div>
      <div className="flex flex-col flex-1 justify-between p-4 bg-white text-left">
        <div>
          <h3 className="font-bold text-base text-[#111827]">{name}</h3>
          <p className="text-xs text-[#6B7280]">{category}</p>
          <p className="mt-2 text-sm font-bold text-[#111827]">{rp(price)}</p>
        </div>
        <div className="mt-4 flex items-center gap-2 pt-1">
          <Link href={previewHref ?? "#"} target={previewHref ? "_blank" : undefined} aria-disabled={!previewHref}
            className="flex-1 rounded-full border border-gray-300 py-1.5 text-center text-xs font-semibold text-gray-700 transition hover:bg-gray-50 active:scale-95">Preview</Link>
          <Link href={orderHref} className="flex-1 rounded-full bg-[#761B28] py-1.5 text-center text-xs font-semibold text-white transition hover:bg-[#8A2030] active:scale-95">+ Pesan</Link>
        </div>
      </div>
    </div>
  );
}
