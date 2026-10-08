import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MomenIn - Undangan Digital Elegan Nusantara",
  description: "Ada Momen? MomenIn Aja. Otomatis, cepat, dan tanpa drama.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;0,800;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#080C14] text-white font-['Plus_Jakarta_Sans',sans-serif] antialiased selection:bg-[#761B28] selection:text-white">{children}</body>
    </html>
  );
}
