create table if not exists profiles (
  id uuid primary key,
  created_at timestamptz default now(),
  display_name text,
  mode text check (mode in ('full','fast')) default 'full',
  streak int default 0,
  device_id text not null unique
);

create table if not exists chapters (
  id int primary key,
  title text not null,
  eta_minutes int not null,
  order_index int not null
);

create table if not exists sections (
  id text primary key,
  chapter_id int references chapters(id),
  title text not null,
  order_index int not null
);

create table if not exists cards (
  id text primary key,
  section_id text references sections(id),
  front_md text not null,
  back_md text not null,
  hint_md text,
  order_index int not null
);

create table if not exists questions (
  id text primary key,
  chapter_id int references chapters(id),
  stem_md text not null,
  options jsonb not null,
  explanation_md text not null,
  tags text[]
);

create table if not exists sessions (
  id uuid primary key,
  profile_id uuid references profiles(id),
  chapter_id int references chapters(id),
  started_at timestamptz not null,
  ended_at timestamptz,
  mode text check (mode in ('full','fast')) not null,
  duration_minutes int
);

create table if not exists attempts (
  id uuid primary key,
  session_id uuid references sessions(id),
  question_id text references questions(id),
  selected_option_id text not null,
  is_correct boolean not null,
  attempt_index int not null,
  answered_at timestamptz not null
);

create table if not exists progress (
  profile_id uuid references profiles(id),
  chapter_id int references chapters(id),
  learned_count int default 0,
  correct_count int default 0,
  wrong_count int default 0,
  mastery_pct float default 0,
  last_active_at timestamptz default now(),
  primary key (profile_id, chapter_id)
);

create table if not exists reviews (
  id uuid primary key,
  profile_id uuid references profiles(id),
  from_chapter_id int references chapters(id),
  to_chapter_id int references chapters(id),
  scheduled_at timestamptz not null,
  duration_goal int default 15
);

-- TODO: RLS policies
-- Enable RLS
alter table profiles enable row level security;
alter table progress enable row level security;
alter table sessions enable row level security;
alter table attempts enable row level security;
alter table reviews enable row level security;

-- Profiles policy: owner by id OR matching device_id via anon key
create policy if not exists profiles_select on profiles
  for select using (auth.uid() = id or device_id = current_setting('request.headers', true)::json->>'x-device-id');
create policy if not exists profiles_insert on profiles
  for insert with check (auth.uid() = id or device_id = current_setting('request.headers', true)::json->>'x-device-id');
create policy if not exists profiles_update on profiles
  for update using (auth.uid() = id or device_id = current_setting('request.headers', true)::json->>'x-device-id');

-- Progress policies: own rows by profile_id
create policy if not exists progress_select on progress
  for select using (auth.uid() = profile_id or exists(
    select 1 from profiles p where p.id = progress.profile_id and p.device_id = current_setting('request.headers', true)::json->>'x-device-id'
  ));
create policy if not exists progress_upsert on progress
  for insert with check (auth.uid() = profile_id or exists(
    select 1 from profiles p where p.id = progress.profile_id and p.device_id = current_setting('request.headers', true)::json->>'x-device-id'
  ));
create policy if not exists progress_update on progress
  for update using (auth.uid() = profile_id or exists(
    select 1 from profiles p where p.id = progress.profile_id and p.device_id = current_setting('request.headers', true)::json->>'x-device-id'
  ));

-- Sessions/Attempts/Reviews: restrict to own profile
create policy if not exists sessions_rw on sessions for all using (
  auth.uid() = profile_id or exists(
    select 1 from profiles p where p.id = sessions.profile_id and p.device_id = current_setting('request.headers', true)::json->>'x-device-id'
  )
);
create policy if not exists attempts_rw on attempts for all using (
  exists(select 1 from sessions s where s.id = attempts.session_id and (
    auth.uid() = s.profile_id or exists(select 1 from profiles p where p.id = s.profile_id and p.device_id = current_setting('request.headers', true)::json->>'x-device-id')
  ))
);
create policy if not exists reviews_rw on reviews for all using (
  auth.uid() = profile_id or exists(
    select 1 from profiles p where p.id = reviews.profile_id and p.device_id = current_setting('request.headers', true)::json->>'x-device-id'
  )
);


