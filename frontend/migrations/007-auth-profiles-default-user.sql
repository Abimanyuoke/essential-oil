create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = ''
as $$
begin
  insert into public.profiles (id, name, role, avatar_url)
  values (
    new.id, 
    new.raw_user_meta_data ->> 'name',
    -- LOGIC ROLE DISINI --
    case 
      when new.email = 'owner@perusahaan.com' then 'admin'
      when new.email like '%@kantor.com' then 'editor'
      else 'user'
    end,
    -----------------------
    new.raw_user_meta_data ->> 'avatar_url'
  );
  return new;
end;
$$;


-- Jika kamu ingin semua email dari domain buatanmu jadi admin, gunakan LIKE:

case 
  when new.email like '%@abicode.com' then 'admin'
  else 'user'
end