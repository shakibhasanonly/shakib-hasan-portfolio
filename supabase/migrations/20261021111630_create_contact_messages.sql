/*
# Create contact_messages table (single-tenant, no auth)

1. New Tables
- `contact_messages`
- `id` (uuid, primary key)
- `first_name` (text, not null)
- `last_name` (text, not null)
- `email` (text, not null)
- `subject` (text, not null)
- `message` (text, not null)
- `created_at` (timestamptz, default now())
2. Security
- Enable RLS on `contact_messages`.
- Allow anon + authenticated INSERT only (public visitors can submit the contact form).
- No SELECT/UPDATE/DELETE for anon or authenticated — only inserts, so visitors cannot read or alter other people's messages.
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact_messages" ON contact_messages;
CREATE POLICY "anon_insert_contact_messages"
ON contact_messages FOR INSERT
TO anon, authenticated
WITH CHECK (true);
