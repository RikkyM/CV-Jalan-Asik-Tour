import type { LoginCredentials } from "@/types/auth.types";
import React from "react";
import FormField from "./FormField";
import Button from "./Button";
import { LoaderCircle, LogIn } from "lucide-react";

type LoginProps = {
  formData: LoginCredentials;
  loading: boolean;
  error: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
};

const LoginForm = ({
  formData,
  loading,
  error,
  handleChange,
  handleSubmit,
}: LoginProps) => {
  return (
    <form onSubmit={handleSubmit} className="bg-white max-w-md space-y-5">
      {error && (
        <span className="text-red-500 text-center mx-auto w-full inline-block text-sm">
          {error}
        </span>
      )}
      <FormField
        label="Username"
        id="username"
        name="username"
        type="text"
        value={formData.username}
        onChange={handleChange}
        autoComplete="off"
        placeholder="Username"
        required
      />
      <FormField
        label="Password"
        id="password"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        autoComplete="off"
        placeholder="Password"
        required
      />
      <Button>
        {loading ? (
          <LoaderCircle className="animate-spin mx-auto max-w-5" />
        ) : (
          <div className="flex items-center gap-2 mx-auto w-max">
            <LogIn className="max-w-5" />
            <span>Sign In</span>
          </div>
        )}
      </Button>
    </form>
  );
};

export default LoginForm;
