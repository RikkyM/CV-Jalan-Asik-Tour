import { AuthContext } from "@/contexts/AuthContext";
import { http } from "@/lib/http";
import {
  login as loginApi,
  logout as logoutApi,
} from "@/features/auth/lib/api";
import type { LoginCredentials, User } from "@/types/auth.types";
import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    try {
      const response = await http.get("/api/v1/user");
      setUser(response.data);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const login = useCallback(
    async (payload: LoginCredentials) => {
      await loginApi(payload);
      await refresh();
    },
    [refresh]
  );

  const logout = useCallback(async () => {
    await logoutApi();
    setUser(null);
  }, []);

  const value = useMemo(
    () => ({ user, loading, login, logout, refresh }),
    [user, loading, login, logout, refresh]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
