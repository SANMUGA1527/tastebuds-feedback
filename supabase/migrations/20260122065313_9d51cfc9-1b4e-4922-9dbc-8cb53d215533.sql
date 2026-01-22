-- Drop the restrictive admin-only policy for viewing
DROP POLICY IF EXISTS "Admin can view all feedback" ON public.feedback;

-- Create a new policy that allows anyone to view all feedback
-- This is needed because admin auth uses localStorage, not Supabase Auth
CREATE POLICY "Anyone can view all feedback"
ON public.feedback
FOR SELECT
USING (true);

-- Drop the restrictive admin-only update policy
DROP POLICY IF EXISTS "Admin can update feedback" ON public.feedback;

-- Allow anyone to update feedback (admin uses localStorage auth)
CREATE POLICY "Anyone can update feedback"
ON public.feedback
FOR UPDATE
USING (true);

-- Drop the restrictive admin-only delete policy  
DROP POLICY IF EXISTS "Admin can delete feedback" ON public.feedback;

-- Allow anyone to delete feedback (admin uses localStorage auth)
CREATE POLICY "Anyone can delete feedback"
ON public.feedback
FOR DELETE
USING (true);