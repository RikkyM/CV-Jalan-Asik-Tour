import { csrf } from "@/lib/csrf";
import { http } from "@/lib/http";
import type { LoginCredentials, User } from "@/types/auth.types";

export const login = async (payload: LoginCredentials) => {
  await csrf();
  const res = await http.post<User>("/api/v1/login", payload);
  return res;
};

export const logout = async () => {
  await http.post("/api/v1/logout");
};
