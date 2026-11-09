-- Extend the editorial CMS for every magazine section.
alter table public.posts add column if not exists price text;
alter table public.posts add column if not exists action_url text;
alter table public.posts add column if not exists author text;
alter table public.posts add column if not exists source_url text;

grant usage on schema public to anon, authenticated;
grant select on table public.posts to anon, authenticated;
grant insert, update, delete on table public.posts to authenticated;
grant select, insert, update, delete on table public.audio_tracks to authenticated;
grant select on table public.audio_tracks to anon;
