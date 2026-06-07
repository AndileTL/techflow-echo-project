
ALTER TABLE public.contact_submissions
  ADD COLUMN IF NOT EXISTS customer_type text,
  ADD COLUMN IF NOT EXISTS customer_status text,
  ADD COLUMN IF NOT EXISTS source text NOT NULL DEFAULT 'contact_form',
  ADD COLUMN IF NOT EXISTS services text[] NOT NULL DEFAULT '{}'::text[];
