import { features } from "@/lib/data";
import FeatureCard from "./FeatureCard";
export default function FeaturesSection() {
  return (
    <section id="fitur" className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-12 pb-16">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="font-['Playfair_Display',serif] text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#F1DFC5]">Mengapa Memilih MomenIn?</h2>
        <p className="mt-3 text-xs sm:text-sm text-[#BFB5A7] leading-relaxed">Karena setiap momen berharga layak dipersiapkan dengan sempurna. Kami hadirkan desain, fitur, dan otomasi terbaik untukmu.</p>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {features.map((f) => <FeatureCard key={f.title} {...f} />)}
      </div>
    </section>
  );
}
