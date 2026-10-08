"use client";
import { useMemo, useState } from "react";
import type { Template, TemplateTag } from "@/lib/types";
import { categories, tags } from "@/lib/data";
import { orderHref } from "@/lib/pricing";
import TemplateCard from "./TemplateCard";

const on = "bg-[#761B28] text-white shadow-md shadow-[#761B28]/30 hover:bg-[#8A2030]";
const off = "border border-white/20 bg-transparent text-[#D1C7BA] hover:border-[#C4A47C] hover:text-white";

export default function CatalogSection({ templates, search = "" }: { templates: Template[]; search?: string }) {
  const [cat, setCat] = useState<string | null>(null);
  const [tag, setTag] = useState<TemplateTag | null>(null);
  const list = useMemo(() => templates.filter((t) =>
    (!cat || t.category === cat) && (!tag || t.tags.includes(tag)) && t.name.toLowerCase().includes(search.toLowerCase())
  ), [templates, cat, tag, search]);

  return (
    <section id="katalog" className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 pb-24">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="font-['Playfair_Display',serif] text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#F1DFC5]">Pilihan Tema &amp; Produk Unggulan</h2>
        <p className="mt-3 text-xs sm:text-sm text-[#BFB5A7] leading-relaxed">Eksplorasi koleksi tema undangan modern dan fitur interaktif, dikurasi khusus untuk momen spesialmu.</p>
      </div>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
        {categories.map((c) => (
          <button key={c} onClick={() => setCat(cat === c ? null : c)} className={`rounded-full px-5 py-2 text-xs sm:text-sm font-medium transition active:scale-95 ${cat === c ? on : off}`}>Undangan {c}</button>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
        {tags.map((t) => (
          <button key={t} onClick={() => setTag(tag === t ? null : t)} className={`rounded-full px-4 py-1.5 text-xs font-medium transition active:scale-95 ${tag === t ? on : off}`}>{t}</button>
        ))}
      </div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {list.map((t) => (
          <TemplateCard key={t.id} name={t.name} price={t.price_idr} category={t.category} theme={t.theme} previewHref={t.preview_url} orderHref={orderHref(t)} />
        ))}
        {!list.length && <p className="col-span-full text-center text-sm text-[#BFB5A7]">Belum ada desain untuk filter ini.</p>}
      </div>
    </section>
  );
}
