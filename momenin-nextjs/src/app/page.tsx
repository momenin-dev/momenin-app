import HomeShell from "@/components/HomeShell";
import { getTemplates, getPackages } from "@/lib/supabase";

export const revalidate = 60; // ISR: katalog diambil dari Supabase, cache 60 dtk

export default async function Page() {
  const [templates, packages] = await Promise.all([getTemplates(), getPackages()]);
  return <HomeShell templates={templates} packages={packages} />;
}
