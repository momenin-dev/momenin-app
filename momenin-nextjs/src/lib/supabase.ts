import { createClient } from "@supabase/supabase-js";
import type { Template, Package } from "./types";
import { seedTemplates, seedPackages } from "./data";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
export const supabase = () => createClient(url, anon);
/** Hanya server (API route). Jangan pernah diimpor di komponen client. */
export const supabaseAdmin = () => createClient(url, process.env.SUPABASE_SERVICE_ROLE_KEY!, { auth: { persistSession: false } });

export async function getTemplates(): Promise<Template[]> {
  if (!url) return seedTemplates;
  const { data, error } = await supabase().from("templates").select("*").eq("is_active", true).order("created_at");
  return error || !data?.length ? seedTemplates : (data as Template[]);
}
export async function getPackages(): Promise<Package[]> {
  if (!url) return seedPackages;
  const { data, error } = await supabase().from("packages").select("*").order("price_idr");
  return error || !data?.length ? seedPackages : (data as Package[]);
}
