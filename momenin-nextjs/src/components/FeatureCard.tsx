import type { ReactNode } from "react";
const icons: Record<string, ReactNode> = {
  pin: <><circle cx="12" cy="10" r="3" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 2a8 8 0 00-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 00-8-8z" /></>,
  chat: <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />,
  bolt: <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />,
  qr: <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><path strokeLinecap="round" strokeLinejoin="round" d="M14 14h3v3h-3zM18 18h3v3h-3zM14 18h.01M18 14h.01" /></>,
};
export default function FeatureCard({ title, desc, icon }: { title: string; desc: string; icon: keyof typeof icons }) {
  return (
    <div className="group relative flex flex-col items-center text-center p-8 sm:p-9 rounded-3xl bg-gradient-to-b from-[#182133] to-[#0E1524] border border-white/10 shadow-xl transition-all duration-300 hover:border-[#C4A47C]/40 hover:-translate-y-1">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#761B28] text-white shadow-lg shadow-[#761B28]/40 mb-5">
        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">{icons[icon]}</svg>
      </div>
      <h3 className="text-lg font-bold text-white tracking-tight">{title}</h3>
      <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-[#A9B4C4] max-w-xs">{desc}</p>
    </div>
  );
}
