"use client";
import { useState } from "react";
import type { Template, Package } from "@/lib/types";
import Navbar from "./Navbar";
import Hero from "./Hero";
import CatalogSection from "./CatalogSection";
import FeaturesSection from "./FeaturesSection";
import PricingSection from "./PricingSection";
import Footer from "./Footer";

export default function HomeShell({ templates, packages }: { templates: Template[]; packages: Package[] }) {
  const [search, setSearch] = useState("");
  return (
    <div className="relative w-full overflow-hidden bg-[#080C14]">
      <Navbar search={search} onSearchChange={setSearch} />
      <Hero />
      <CatalogSection templates={templates} search={search} />
      <FeaturesSection />
      <PricingSection packages={packages} templateSlug={templates[0]?.slug} />
      <Footer />
    </div>
  );
}
