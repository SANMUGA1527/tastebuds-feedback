-- Create feedback table
CREATE TABLE public.feedback (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  message TEXT NOT NULL,
  is_approved BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.feedback ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert feedback
CREATE POLICY "Anyone can submit feedback"
ON public.feedback
FOR INSERT
WITH CHECK (true);

-- Allow anyone to view approved feedback
CREATE POLICY "Anyone can view approved feedback"
ON public.feedback
FOR SELECT
USING (is_approved = true);

-- Admin can view all feedback (we'll handle this with a secret route)
CREATE POLICY "Admin can view all feedback"
ON public.feedback
FOR SELECT
USING (true);

-- Admin can update feedback (approve/reject)
CREATE POLICY "Admin can update feedback"
ON public.feedback
FOR UPDATE
USING (true);

-- Admin can delete feedback
CREATE POLICY "Admin can delete feedback"
ON public.feedback
FOR DELETE
USING (true);