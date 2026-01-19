import { useAuth } from "@/hooks/useAuth";
import type { LoginCredentials } from "@/types/auth.types";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../lib/api";

export const useLogin = () => {
  const { refresh } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState<LoginCredentials>({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await login(formData);
      await refresh();

      navigate("/dashboard");
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setError("Username atau password salah.");
      } else {
        setError("Terjadi kesalahan pada server.");
      }
      setFormData((prev) => ({ ...prev, password: "" }));
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    loading,
    error,
    handleChange,
    handleSubmit,
  } as const;
};
