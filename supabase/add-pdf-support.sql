-- Enable PDF attachments for magazine articles
alter table public.posts add column if not exists pdf_url text;

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('magazine-pdfs', 'magazine-pdfs', true, 31457280, array['application/pdf'])
on conflict (id) do update set
  public = true,
  file_size_limit = 31457280,
  allowed_mime_types = array['application/pdf'];

drop policy if exists "Public can view magazine PDFs" on storage.objects;
create policy "Public can view magazine PDFs" on storage.objects
for select using (bucket_id = 'magazine-pdfs');

drop policy if exists "Editors can upload magazine PDFs" on storage.objects;
create policy "Editors can upload magazine PDFs" on storage.objects
for insert to authenticated
with check (
  bucket_id = 'magazine-pdfs'
  and (auth.jwt() ->> 'email') = 'rastegar.mogadam.zahra111@gmail.com'
);

drop policy if exists "Editors can delete magazine PDFs" on storage.objects;
create policy "Editors can delete magazine PDFs" on storage.objects
for delete to authenticated
using (
  bucket_id = 'magazine-pdfs'
  and (auth.jwt() ->> 'email') = 'rastegar.mogadam.zahra111@gmail.com'
);
