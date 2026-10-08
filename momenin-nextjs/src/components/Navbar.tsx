"use client";

import { site } from "@/lib/site";

type Props = {
  search?: string;
  onSearchChange?: (v: string) => void;
  contactHref?: string;
  orderLookupHref?: string;
};

export default function Navbar({ search, onSearchChange, contactHref = site.whatsappUrl, orderLookupHref = "/cek-pesanan" }: Props) {
  return (
<header className="relative z-50 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-5 pb-4">
      <div className="flex items-center justify-between gap-4">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 text-[#F1DFC5] transition hover:opacity-90">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#8A2030] to-[#4A121B] p-1.5 shadow-md shadow-black/40 border border-[#C4A47C]/40">
            {/* Gunungan Icon */}
            <svg className="h-full w-full text-[#F1DFC5]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L4 14h3v6h10v-6h3L12 2zm0 3.8L16.2 12H7.8L12 5.8zM10 18v-3h4v3h-4z"/>
            </svg>
          </div>
          <span className="font-['Playfair_Display',serif] text-2xl font-bold tracking-tight text-[#F1DFC5]">MomenIn<span className="text-[#C4A47C]">.</span></span>
        </a>

        {/* Desktop Menu Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#D1C7BA]">
          <a href="#" className="text-[#F1DFC5] transition hover:text-white">Home</a>
          <a href="#katalog" className="transition hover:text-[#F1DFC5]">Desain</a>
          <a href="#paket" className="transition hover:text-[#F1DFC5]">Paket</a>
          <a href="#tentang" className="transition hover:text-[#F1DFC5]">Tentang</a>
        </nav>

        {/* Search & Action Buttons */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Search Input */}
          <div className="relative hidden lg:block w-44 xl:w-48">
            <input value={search ?? ""} onChange={(e) => onSearchChange?.(e.target.value)} 
              type="text" 
              placeholder="Cari Desain..." 
              className="w-full rounded-full bg-[#161D2B]/85 py-1.5 pl-4 pr-9 text-xs text-[#E1D7CA] placeholder-[#7F8B9E] border border-white/10 focus:border-[#C4A47C] focus:outline-none focus:ring-1 focus:ring-[#C4A47C]"
            />
            <svg className="absolute right-3 top-2 h-3.5 w-3.5 text-[#8D9AA8]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>

          {/* CTA 1: Hubungi Kami */}
          <a href={contactHref} className="rounded-full bg-[#761B28] px-4 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:bg-[#8B2232] active:scale-95">
            Hubungi Kami
          </a>

          {/* CTA 2: Cek Pesanan */}
          <a href={orderLookupHref} className="rounded-full border border-white/20 bg-transparent px-3.5 py-1.5 text-xs font-medium text-[#E1D7CA] transition hover:border-[#C4A47C] hover:text-white active:scale-95">
            Cek Pesanan
          </a>

          {/* User Profile Icon */}
          <button type="button" aria-label="Profil Pengguna" className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-[#161D2B] text-[#D1C7BA] transition hover:border-[#C4A47C] hover:text-white">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
