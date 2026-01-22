import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { User } from "@supabase/supabase-js";

export const useAdminAuth = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAdminRole = async (userId: string) => {
      const { data: roleData, error } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", userId)
        .eq("role", "admin")
        .maybeSingle();

      if (error) {
        console.error("Error checking admin role:", error);
        return false;
      }

      return !!roleData;
    };

    // Set up auth state listener first
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
      
      if (event === "SIGNED_OUT") {
        setIsAdmin(false);
        setLoading(false);
        navigate("/auth");
        return;
      }

      if (session?.user) {
        // Defer the role check to avoid deadlock
        setTimeout(async () => {
          const hasAdminRole = await checkAdminRole(session.user.id);
          setIsAdmin(hasAdminRole);
          setLoading(false);
          
          if (!hasAdminRole) {
            navigate("/auth");
          }
        }, 0);
      } else {
        setIsAdmin(false);
        setLoading(false);
      }
    });

    // Then check for existing session
    const initAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (session?.user) {
        setUser(session.user);
        const hasAdminRole = await checkAdminRole(session.user.id);
        setIsAdmin(hasAdminRole);
        setLoading(false);
        
        if (!hasAdminRole) {
          navigate("/auth");
        }
      } else {
        setIsAdmin(false);
        setLoading(false);
        navigate("/auth");
      }
    };

    initAuth();

    return () => subscription.unsubscribe();
  }, [navigate]);

  const signOut = async () => {
    await supabase.auth.signOut();
    navigate("/auth");
  };

  return { isAdmin, loading, signOut, user };
};
