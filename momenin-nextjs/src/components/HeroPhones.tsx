export default function HeroPhones() {
  return (
<div className="relative lg:col-span-6 xl:col-span-6 flex justify-center lg:justify-end items-center">
          
          {/* Background Glow for Phones */}
          <div className="pointer-events-none absolute right-16 top-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-[#E5C9A6]/15 blur-[90px]"></div>

          <div className="relative flex items-center justify-center">

            {/* Phone 1 (Front - Cream Elegant "Budi & Siti") */}
            <div className="relative z-20 w-[240px] sm:w-[275px] rounded-[42px] p-[7px] bg-gradient-to-b from-[#525866] via-[#2D333F] to-[#1A1F29] shadow-[-18px_25px_40px_-10px_rgba(0,0,0,0.85)] ring-1 ring-white/20">
              {/* Inner Phone Bezel */}
              <div className="relative w-full aspect-[9/18.5] rounded-[36px] overflow-hidden bg-[#FAF6EE] text-[#4A3B2C] flex flex-col justify-between border border-[#D5C2A5]/50">
                
                {/* Dynamic Island */}
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-30 h-4 w-18 bg-black rounded-full flex items-center justify-end pr-1.5">
                  <div className="h-2 w-2 rounded-full bg-[#151D2A]/80 border border-white/10"></div>
                </div>

                {/* Phone 1 Screen Top Ornaments */}
                <div className="pt-9 px-4 text-center">
                  <div className="text-[9px] uppercase tracking-widest text-[#937C63] font-semibold">The Wedding of</div>
                  <div className="mt-1 flex items-center justify-center gap-1.5 opacity-60">
                    <span className="h-px w-6 bg-[#C4A47C]"></span>
                    <span className="text-[9px] text-[#C4A47C]">✦</span>
                    <span className="h-px w-6 bg-[#C4A47C]"></span>
                  </div>
                  
                  <div className="mt-4 font-['Playfair_Display',serif] text-2xl font-bold tracking-tight text-[#2B2117] leading-none">
                    Budi
                  </div>
                  <div className="my-0.5 font-['Playfair_Display',serif] italic text-base text-[#9E7A4A]">&amp;</div>
                  <div className="font-['Playfair_Display',serif] text-2xl font-bold tracking-tight text-[#2B2117] leading-none">
                    Siti
                  </div>

                  <p className="mt-3 text-[8.5px] leading-tight text-[#7C6B5A] px-2">
                    Bikin undangan pernikahan, wisuda, &amp; acara spesialmu se-estetik itu.
                  </p>
                </div>

                {/* Phone 1 Screen Center/Bottom Filigree Ornament */}
                <div className="px-4 pb-6 pt-2 flex flex-col items-center text-center">
                  <div className="grid grid-cols-2 gap-2 text-[8px] text-[#7C6B5A] w-full border-t border-[#E8DEC8] pt-2 mb-2">
                    <div>
                      <span className="font-semibold block text-[#4A3B2C]">Otomatis</span>
                      Hadirkan Ukuran
                    </div>
                    <div>
                      <span className="font-semibold block text-[#4A3B2C]">Terotomatis</span>
                      Gambar Resolusi Tinggi
                    </div>
                  </div>
                  
                  {/* Circular Monogram Floral Badge */}
                  <div className="relative w-28 h-20 flex items-center justify-center opacity-85">
                    <svg className="w-full h-full text-[#9E7A4A]" viewBox="0 0 100 70" fill="none" stroke="currentColor" strokeWidth="1.2">
                      <path d="M50 5 Q35 25 20 20 Q10 35 25 45 Q35 60 50 65 Q65 60 75 45 Q90 35 80 20 Q65 25 50 5 Z"/>
                      <circle cx="50" cy="35" r="14" strokeDasharray="2 2"/>
                      <path d="M42 35 C42 30 58 30 58 35 C58 42 44 40 56 46"/>
                    </svg>
                  </div>
                  <span className="text-[7.5px] tracking-wider text-[#A28C74] uppercase">Koleksi Undangan Digital Eksklusif</span>
                </div>

                {/* Screen Glass Reflection Glare */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent"></div>
              </div>
            </div>

            {/* Phone 2 (Back Right - Black Gold Gunungan) */}
            <div className="relative z-10 -ml-12 sm:-ml-14 mt-4 w-[225px] sm:w-[255px] rounded-[40px] p-[6px] bg-gradient-to-b from-[#3E434F] via-[#21252E] to-[#12161E] shadow-[-12px_20px_35px_-8px_rgba(0,0,0,0.9)] ring-1 ring-white/10">
              {/* Inner Phone Bezel */}
              <div className="relative w-full aspect-[9/18.5] rounded-[34px] overflow-hidden bg-[#0C1019] text-white flex flex-col items-center justify-center border border-white/5">
                
                {/* Dynamic Island */}
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-30 h-3.5 w-16 bg-black rounded-full"></div>

                {/* Glowing Aura behind Wayang */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-44 w-44 rounded-full bg-[#E5C9A6]/20 blur-[40px]"></div>
                </div>

                {/* Traditional Gunungan Wayang Artwork */}
                <div className="relative z-10 flex flex-col items-center px-4">
                  <div className="relative w-36 h-56 flex items-center justify-center drop-shadow-[0_0_15px_rgba(229,201,166,0.6)]">
                    <svg viewBox="0 0 100 140" className="w-full h-full text-[#E5C9A6]" fill="none" stroke="currentColor" strokeWidth="1.8">
                      {/* Gunungan Contour */}
                      <path d="M50 10 C38 35 15 65 18 100 C20 120 38 128 50 130 C62 128 80 120 82 100 C85 65 62 35 50 10 Z" fill="#201710" fillOpacity="0.75" stroke="#E5C9A6" strokeWidth="2"/>
                      {/* Gate / Portal House */}
                      <rect x="36" y="92" width="28" height="26" fill="#140D07" stroke="#E5C9A6" strokeWidth="1.5"/>
                      <line x1="50" y1="92" x2="50" y2="118" stroke="#E5C9A6" strokeWidth="1.5"/>
                      <path d="M32 92 L50 78 L68 92 Z" fill="#3D2916" stroke="#E5C9A6" strokeWidth="1.5"/>
                      {/* Filigree Motifs */}
                      <circle cx="50" cy="52" r="10" stroke="#E5C9A6" strokeWidth="1.5"/>
                      <path d="M42 52 Q50 38 58 52" stroke="#E5C9A6"/>
                      <path d="M26 80 Q50 68 74 80" stroke="#E5C9A6" strokeWidth="1.2"/>
                      <path d="M30 65 Q50 48 70 65" stroke="#E5C9A6" strokeWidth="1.2"/>
                    </svg>
                  </div>
                  <span className="mt-1 font-['Playfair_Display',serif] text-xs font-semibold tracking-wider text-[#E5C9A6] drop-shadow">ROYAL JAVANESE</span>
                </div>

                {/* Screen Glass Reflection Glare */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent"></div>
              </div>
            </div>

          </div>
        </div>
  );
}
