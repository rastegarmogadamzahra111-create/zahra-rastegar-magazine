-- Zahra Rastegar Magazine CMS
-- Before running: replace EDITOR_EMAIL_HERE with the exact email used for your Supabase editor account.
create table if not exists public.posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  category text not null default 'یادداشت',
  excerpt text not null default '',
  content text not null default '',
  cover_image text,
  status text not null default 'draft' check (status in ('draft','published')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.posts enable row level security;

drop policy if exists "Published posts are public" on public.posts;
create policy "Published posts are public" on public.posts
for select using (
  status = 'published' or (auth.jwt() ->> 'email') = 'EDITOR_EMAIL_HERE'
);

drop policy if exists "Signed-in editors can insert posts" on public.posts;
drop policy if exists "Editors can insert own posts" on public.posts;
create policy "Editors can insert own posts" on public.posts
for insert to authenticated
with check ((auth.jwt() ->> 'email') = 'EDITOR_EMAIL_HERE');

drop policy if exists "Signed-in editors can update posts" on public.posts;
drop policy if exists "Editors can update own posts" on public.posts;
create policy "Editors can update own posts" on public.posts
for update to authenticated
using ((auth.jwt() ->> 'email') = 'EDITOR_EMAIL_HERE')
with check ((auth.jwt() ->> 'email') = 'EDITOR_EMAIL_HERE');

drop policy if exists "Signed-in editors can delete posts" on public.posts;
drop policy if exists "Editors can delete own posts" on public.posts;
create policy "Editors can delete own posts" on public.posts
for delete to authenticated
using ((auth.jwt() ->> 'email') = 'EDITOR_EMAIL_HERE');

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('magazine-media', 'magazine-media', true, 10485760, array['image/jpeg','image/png','image/webp'])
on conflict (id) do nothing;

drop policy if exists "Public can view magazine media" on storage.objects;
create policy "Public can view magazine media" on storage.objects
for select using (bucket_id = 'magazine-media');

drop policy if exists "Editors can upload magazine media" on storage.objects;
create policy "Editors can upload magazine media" on storage.objects
for insert to authenticated
with check (bucket_id = 'magazine-media' and (auth.jwt() ->> 'email') = 'EDITOR_EMAIL_HERE');

drop policy if exists "Editors can update magazine media" on storage.objects;
create policy "Editors can update magazine media" on storage.objects
for update to authenticated
using (bucket_id = 'magazine-media' and (auth.jwt() ->> 'email') = 'EDITOR_EMAIL_HERE')
with check (bucket_id = 'magazine-media' and (auth.jwt() ->> 'email') = 'EDITOR_EMAIL_HERE');

drop policy if exists "Editors can delete magazine media" on storage.objects;
create policy "Editors can delete magazine media" on storage.objects
for delete to authenticated
using (bucket_id = 'magazine-media' and (auth.jwt() ->> 'email') = 'EDITOR_EMAIL_HERE');
