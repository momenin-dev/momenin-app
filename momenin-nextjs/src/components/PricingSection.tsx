import type { Package } from "@/lib/types";
import { orderHref } from "@/lib/pricing";
import PackageCard from "./PackageCard";

export default function PricingSection({ packages, templateSlug = "serene-bloom" }: { packages: Package[]; templateSlug?: string }) {
  return (
    <section id="paket" className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-28">
      <h2 className="mx-auto max-w-3xl text-center font-['Playfair_Display',serif] text-2xl sm:text-3xl lg:text-[38px] font-bold leading-snug tracking-tight text-[#F1DFC5]">
        Hemat Tanpa Mengorbankan Eksklusivitas &amp; Pilihan Paket Terjangkau!
      </h2>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {packages.map((p) => (
          <PackageCard key={p.id} name={p.name} price={p.price_idr} features={p.features} headerGradient={p.headerGradient} borderColor={p.borderColor} orderHref={orderHref({ slug: templateSlug }, p.id)} />
        ))}
      </div>
    </section>
  );
}
