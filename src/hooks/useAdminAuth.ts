import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useAdminAuth = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("admin_authenticated") === "true";
    setIsAdmin(isLoggedIn);
    setLoading(false);
    
    if (!isLoggedIn) {
      navigate("/auth");
    }
  }, [navigate]);

  const signOut = () => {
    localStorage.removeItem("admin_authenticated");
    navigate("/auth");
  };

  return { isAdmin, loading, signOut };
};
