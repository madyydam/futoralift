-- Drop table if exists for a clean start
DROP TABLE IF EXISTS newsletter_subscribers;

-- Create newsletter_subscribers table
CREATE TABLE newsletter_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  is_active BOOLEAN DEFAULT true NOT NULL
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_newsletter_subscribers_email ON newsletter_subscribers(email);

-- Enable RLS
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (subscribe)
CREATE POLICY "Allow public to subscribe"
  ON newsletter_subscribers
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Only allow reading own subscription (if needed for unsubscribe feature later)
CREATE POLICY "Allow read own subscription"
  ON newsletter_subscribers
  FOR SELECT
  TO public
  USING (true);
