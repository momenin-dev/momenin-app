-- MomenIn: skema Supabase (jalankan di SQL Editor)
create table packages (
  id text primary key, name text not null, price_idr int not null default 0,
  wa_blast_quota int not null default 0, active_days int,           -- null = selamanya
  features text[] not null default '{}', "headerGradient" text, "borderColor" text
);
create table templates (
  id uuid primary key default gen_random_uuid(), slug text unique not null, name text not null,
  category text not null check (category in ('Pernikahan','Khitan','Birthday','Bukber','Natal')),
  price_idr int not null, tags text[] not null default '{}', theme jsonb not null,
  preview_url text, is_active boolean not null default true, created_at timestamptz default now()
);
create table orders (
  id uuid primary key default gen_random_uuid(), order_code text unique not null,
  template_id uuid references templates(id), package_id text references packages(id),
  customer_name text not null, customer_phone text not null, event_data jsonb not null default '{}',
  slug text unique not null, gross_amount int not null,
  status text not null default 'pending' check (status in ('pending','paid','failed','expired')),
  snap_token text, paid_at timestamptz, expires_at timestamptz, created_at timestamptz default now()
);
create table guests (
  id uuid primary key default gen_random_uuid(), order_id uuid references orders(id) on delete cascade,
  name text not null, phone text not null, wa_status text not null default 'pending' check (wa_status in ('pending','sent','failed')),
  qr_token uuid default gen_random_uuid(), checked_in_at timestamptz, rsvp text, wish text
);
alter table packages enable row level security; alter table templates enable row level security;
alter table orders enable row level security;   alter table guests enable row level security;
create policy "public read packages"  on packages  for select using (true);
create policy "public read templates" on templates for select using (is_active);
-- orders & guests: tanpa policy publik → hanya service role (API route). Tambahkan policy per-user saat Supabase Auth dipasang.
