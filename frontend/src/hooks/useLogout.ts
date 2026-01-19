import { useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";
import { useState } from "react";

export const useLogout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogout = async () => {
    setLoading(true);
    try {
      await logout();
      navigate("/login", { replace: true });
    } catch {
      console.error("Logout failed.");
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    handleLogout,
  };
};
