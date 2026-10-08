import Link from "next/link";
import type { Package } from "@/lib/types";
import { idr } from "@/lib/site";

export type PackageCardProps = Pick<Package, "name" | "features" | "headerGradient" | "borderColor"> & { price: number; orderHref: string };

export default function PackageCard({ name, price, features, headerGradient, borderColor, orderHref }: PackageCardProps) {
  return (
    <div className="group flex flex-col justify-between rounded-3xl bg-white overflow-hidden shadow-2xl transition-all duration-300 hover:-translate-y-1.5">
      <div>
        <div className={`bg-gradient-to-b ${headerGradient} px-6 py-6 text-center border-b ${borderColor}`}>
          <h3 className="text-lg font-bold text-[#111827]">{name}</h3>
          <p className="mt-1 text-base font-bold text-[#761B28]">{idr(price)}</p>
        </div>
        <ul className="p-6 space-y-3.5 text-xs sm:text-sm text-[#1F2937]">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-2.5">
              <span className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-[#761B28] text-white">
                <svg className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              </span>
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-6 pt-0">
        <Link href={orderHref} className="block w-full rounded-xl bg-[#761B28] py-2.5 text-center text-xs sm:text-sm font-semibold text-white shadow-md shadow-[#761B28]/25 transition hover:bg-[#8A2030] active:scale-95">Pesan Sekarang</Link>
      </div>
    </div>
  );
}
