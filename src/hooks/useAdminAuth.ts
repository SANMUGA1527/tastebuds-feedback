import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { User } from "@supabase/supabase-js";

export const useAdminAuth = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  const checkAdminRole = useCallback(async (userId: string): Promise<boolean> => {
    try {
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
    } catch {
      return false;
    }
  }, []);

  useEffect(() => {
    let isMounted = true;

    const initAuth = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        
        if (!isMounted) return;

        if (session?.user) {
          setUser(session.user);
          const hasAdminRole = await checkAdminRole(session.user.id);
          
          if (!isMounted) return;
          
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
      } catch (error) {
        if (isMounted) {
          setLoading(false);
          navigate("/auth");
        }
      }
    };

    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (!isMounted) return;

      if (event === "SIGNED_OUT") {
        setUser(null);
        setIsAdmin(false);
        setLoading(false);
        navigate("/auth");
        return;
      }

      if (event === "SIGNED_IN" && session?.user) {
        setUser(session.user);
        // Use setTimeout to defer and avoid deadlock
        setTimeout(async () => {
          if (!isMounted) return;
          const hasAdminRole = await checkAdminRole(session.user.id);
          if (!isMounted) return;
          setIsAdmin(hasAdminRole);
          setLoading(false);
          if (!hasAdminRole) {
            navigate("/auth");
          }
        }, 0);
      }
    });

    initAuth();

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, [navigate, checkAdminRole]);

  const signOut = useCallback(async () => {
    await supabase.auth.signOut();
  }, []);

  return { isAdmin, loading, signOut, user };
};
