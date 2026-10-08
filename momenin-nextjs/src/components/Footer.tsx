import { site } from "@/lib/site";

export default function Footer() {
  return (
<footer id="tentang" className="relative w-full overflow-hidden bg-[#080C14] text-[#D1C7BA]">

    {/* Top Horizontal Gold Dividing Border */}
    <div className="w-full h-px bg-[#A8844F]/50 shadow-[0_1px_3px_rgba(168,132,79,0.2)]"></div>

    {/* Background Subtle Radial Lighting */}
    <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-80 w-[700px] rounded-full bg-[#E5C9A6]/5 blur-[140px]"></div>

    {/* ==================== CORNER BATIK / WAYANG FILIGREE ORNAMENTS ==================== */}
    
    {/* Top-Left Corner Batik Flourish */}
    <svg className="pointer-events-none absolute top-0 left-0 w-64 sm:w-80 h-64 sm:h-80 text-[#C4A47C] opacity-25" viewBox="0 0 250 250" fill="none" stroke="currentColor">
      <path d="M0,0 Q60,20 90,70 Q110,110 80,150 Q50,180 10,180" strokeWidth="2"/>
      <path d="M0,40 Q50,55 70,95 Q85,130 55,155 Q35,170 0,165" strokeWidth="1.5"/>
      <path d="M20,0 Q35,60 75,80 Q120,95 145,65 Q165,40 160,0" strokeWidth="1.8"/>
      <circle cx="90" cy="70" r="14" strokeWidth="1.5" strokeDasharray="3 3"/>
      <circle cx="90" cy="70" r="6" fill="currentColor"/>
      <circle cx="45" cy="115" r="8" strokeWidth="1.2"/>
      <path d="M0,100 C40,110 60,150 40,190 C30,210 10,225 0,230" strokeWidth="1.5"/>
      <path d="M100,0 C110,40 150,60 190,40 C210,30 225,10 230,0" strokeWidth="1.5"/>
    </svg>

    {/* Bottom-Left Corner Batik Flourish */}
    <svg className="pointer-events-none absolute bottom-12 left-0 w-64 sm:w-80 h-64 sm:h-80 text-[#C4A47C] opacity-25" viewBox="0 0 250 250" fill="none" stroke="currentColor">
      <path d="M0,250 Q60,230 90,180 Q110,140 80,100 Q50,70 10,70" strokeWidth="2"/>
      <path d="M0,210 Q50,195 70,155 Q85,120 55,95 Q35,80 0,85" strokeWidth="1.5"/>
      <circle cx="90" cy="180" r="14" strokeWidth="1.5" strokeDasharray="3 3"/>
      <circle cx="90" cy="180" r="6" fill="currentColor"/>
      <path d="M0,150 C40,140 60,100 40,60 C30,40 10,25 0,20" strokeWidth="1.5"/>
    </svg>

    {/* Top-Right Corner Batik Flourish */}
    <svg className="pointer-events-none absolute top-0 right-0 w-64 sm:w-80 h-64 sm:h-80 text-[#C4A47C] opacity-25" viewBox="0 0 250 250" fill="none" stroke="currentColor">
      <path d="M250,0 Q190,20 160,70 Q140,110 170,150 Q200,180 240,180" strokeWidth="2"/>
      <path d="M250,40 Q200,55 180,95 Q165,130 195,155 Q215,170 250,165" strokeWidth="1.5"/>
      <circle cx="160" cy="70" r="14" strokeWidth="1.5" strokeDasharray="3 3"/>
      <circle cx="160" cy="70" r="6" fill="currentColor"/>
      <path d="M250,100 C210,110 190,150 210,190 C220,210 240,225 250,230" strokeWidth="1.5"/>
    </svg>

    {/* Bottom-Right Corner Batik Flourish */}
    <svg className="pointer-events-none absolute bottom-12 right-0 w-64 sm:w-80 h-64 sm:h-80 text-[#C4A47C] opacity-25" viewBox="0 0 250 250" fill="none" stroke="currentColor">
      <path d="M250,250 Q190,230 160,180 Q140,140 170,100 Q200,70 240,70" strokeWidth="2"/>
      <path d="M250,210 Q200,195 180,155 Q165,120 195,95 Q215,80 250,85" strokeWidth="1.5"/>
      <circle cx="160" cy="180" r="14" strokeWidth="1.5" strokeDasharray="3 3"/>
      <circle cx="160" cy="180" r="6" fill="currentColor"/>
    </svg>

    {/* ==================== MAIN FOOTER CONTENT ==================== */}
    <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 pt-16 pb-14">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14">

        {/* Column 1: Brand & Commitment (Span 5 cols) */}
        <div className="md:col-span-5 flex flex-col justify-start pr-0 lg:pr-8">
          {/* Stylized MomenIn Brand Wordmark */}
          <a href="#" className="inline-flex items-center gap-1.5 transition hover:opacity-90">
            <span className="font-['Playfair_Display',serif] text-4xl sm:text-[44px] font-bold tracking-tight text-[#E5C9A6] flex items-baseline">
              <span className="italic font-normal mr-0.5 text-[#F1DFC5] transform -scale-x-100 inline-block">M</span>omenI<span className="italic font-normal text-[#F1DFC5]">n</span>
            </span>
          </a>

          {/* Brand Narrative Paragraph */}
          <p className="mt-6 text-sm leading-relaxed text-[#BFB5A7] max-w-sm">
            {site.tagline}
          </p>
        </div>

        {/* Column 2: Tautan Cepat (Span 3 cols) */}
        <div className="md:col-span-3 flex flex-col justify-start">
          <h4 className="text-base sm:text-lg font-bold text-[#E5C9A6] tracking-tight">
            Tautan Cepat
          </h4>

          <ul className="mt-5 space-y-3 text-sm text-[#D1C7BA]">
            <li>
              <a href="#" className="transition hover:text-[#E5C9A6]">Home</a>
            </li>
            <li>
              <a href="#katalog" className="transition hover:text-[#E5C9A6]">Desain</a>
            </li>
            <li>
              <a href="#paket" className="transition hover:text-[#E5C9A6]">Paket</a>
            </li>
            <li>
              <a href="#" className="transition hover:text-[#E5C9A6]">Tentang</a>
            </li>
            <li>
              <a href="#" className="transition hover:text-[#E5C9A6]">Syarat &amp; Ketentuan</a>
            </li>
            <li>
              <a href="#" className="transition hover:text-[#E5C9A6]">Kebijakan Privasi</a>
            </li>
          </ul>
        </div>

        {/* Column 3: Hubungi Kami & Action Pills (Span 4 cols) */}
        <div className="md:col-span-4 flex flex-col justify-start">
          <h4 className="text-base sm:text-lg font-bold text-[#E5C9A6] tracking-tight">
            Hubungi Kami
          </h4>

          {/* Contact Details */}
          <div className="mt-5 space-y-1 text-sm text-[#D1C7BA]">
            <p>{site.address}</p>
            <p>{site.email}</p>
            <p>{site.phone}</p>
          </div>

          {/* Social Media Action Pills Stack */}
          <div className="mt-6 flex flex-col space-y-3 w-full max-w-xs">

            {/* Pill 1: WhatsApp (Gold / Bronze Gradient) */}
            <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer" className="group flex items-center rounded-full bg-gradient-to-r from-[#D6A763] to-[#B88942] p-1.5 pr-6 text-sm font-bold text-[#3B2210] shadow-md transition-all duration-300 hover:brightness-105 active:scale-98">
              {/* Left Circular Icon Container */}
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#3B2210]/10 text-[#3B2210] mr-3">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
              </div>
              <span className="tracking-wide text-sm font-semibold text-[#2D1A0C]">WhatsApp</span>
            </a>

            {/* Pill 2: Instagram (Burgundy Red with Fine Gold Border) */}
            <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="group flex items-center rounded-full bg-gradient-to-r from-[#731924] to-[#59121B] p-1.5 pr-6 text-sm font-semibold text-white shadow-md border border-[#C4A47C]/70 transition-all duration-300 hover:brightness-110 active:scale-98">
              {/* Left Circular Icon Container */}
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white mr-3">
                <svg className="h-4.5 w-4.5 text-[#E5C9A6]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="tracking-wide text-sm text-white font-medium">Instagram</span>
            </a>

            {/* Pill 3: Facebook (Burgundy Red with Gold Emblem Badge) */}
            <a href={site.facebookUrl} target="_blank" rel="noopener noreferrer" className="group flex items-center rounded-full bg-gradient-to-r from-[#731924] to-[#59121B] p-1.5 pr-6 text-sm font-semibold text-white shadow-md border border-[#C4A47C]/70 transition-all duration-300 hover:brightness-110 active:scale-98">
              {/* Left Gold Badge with Facebook 'f' */}
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#C4A47C] text-[#59121B] font-bold text-lg mr-3 shadow-sm">
                <span className="font-serif leading-none mt-0.5">f</span>
              </div>
              <span className="tracking-wide text-sm text-white font-medium">Facebook</span>
            </a>

          </div>
        </div>

      </div>
    </div>

    {/* Bottom Horizontal Gold Dividing Border */}
    <div className="w-full h-px bg-[#A8844F]/50 shadow-[0_1px_3px_rgba(168,132,79,0.2)]"></div>

    {/* ==================== COPYRIGHT BAR ==================== */}
    <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-5">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-[#9C9283]">
        
        {/* Left: Copyright Statement */}
        <p className="tracking-wide">
          &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>

        {/* Right: Regional Brand Mark (Nusantara Digital) */}
        <div className="flex items-center gap-2 text-[#9C9283]">
          {/* Hatched / Striped Sphere Globe Icon */}
          <svg className="h-4 w-4 text-[#A8844F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <circle cx="12" cy="12" r="9"/>
            <path d="M3.6 9h16.8"/>
            <path d="M3.6 15h16.8"/>
            <path d="M12 3a14 14 0 000 18"/>
            <path d="M12 3a14 14 0 010 18"/>
          </svg>
          <span className="font-medium text-[#B5A99A]">Nusantara Digital</span>
        </div>

      </div>
    </div>

  </footer>
  );
}
