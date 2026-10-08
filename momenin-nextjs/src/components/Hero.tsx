import HeroPhones from "./HeroPhones";

type Props = { headline?: [string, string]; subtitle?: string; ctaLabel?: string; ctaHref?: string };

export default function Hero({
  headline = ["Ada Momen?", "MomenIn Aja."],
  subtitle = "Bikin undangan pernikahan, wisuda, & acara spesialmu se-estetik itu. Otomatis, cepat, dan tanpa drama.",
  ctaLabel = "Pelajari Lebih Lanjut",
  ctaHref = "#katalog",
}: Props) {
  return (
    <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-16 lg:pt-16 lg:pb-24">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-6 z-10 text-left">
          <h1 className="font-['Playfair_Display',serif] text-4xl sm:text-5xl lg:text-[62px] font-bold leading-[1.12] tracking-tight text-[#F1DFC5]">
            {headline[0]}<br /><span className="text-[#EAD2B4]">{headline[1]}</span>
          </h1>
          <p className="mt-5 max-w-lg text-sm sm:text-base leading-relaxed text-[#BFB5A7]">{subtitle}</p>
          <div className="mt-8">
            <a href={ctaHref} className="inline-flex items-center gap-2 rounded-xl border border-[#9E7A4A] bg-[#0E1524]/60 px-6 py-3 text-sm font-semibold text-[#EAD2B4] shadow-lg shadow-black/30 backdrop-blur transition hover:border-[#D5B07E] hover:bg-[#151F33] active:scale-95">{ctaLabel}</a>
          </div>
        </div>
        <HeroPhones />
      </div>
    </section>
  );
}
