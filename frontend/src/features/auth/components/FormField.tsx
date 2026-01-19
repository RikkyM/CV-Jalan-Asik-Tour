import { useState, type InputHTMLAttributes } from "react";
import { Label } from "./Label";
import Input from "./Input";
import { Eye, EyeOff } from "lucide-react";

type FormFieldProps = InputHTMLAttributes<HTMLInputElement> & { label: string };

const FormField = ({
  id,
  name,
  label,
  type,
  required = false,
  ...rest
}: FormFieldProps) => {
  const isPassword = id === "password";
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="space-y-1.5">
      <Label htmlFor={id}>{label}</Label>
      <div
        className={`${
          isPassword &&
          "flex items-center border border-gray-300 rounded pr-2 focus-within:ring-2 focus-within:ring-blue-300 transition-all duration-500"
        }`}
      >
        <Input
          id={id}
          name={name}
          required={required}
          type={isPassword ? (showPassword ? "text" : "password") : type}
          {...rest}
          className={`${
            isPassword ? "border-none " : "focus:ring-2 focus:ring-blue-300"
          }`}
        />
        {isPassword && (
          <button
            type="button"
            className="cursor-pointer text-gray-500 outline-none"
            onClick={handleTogglePassword}
            tabIndex={-1}
          >
            {showPassword ? (
              <Eye className="max-w-5" />
            ) : (
              <EyeOff className="max-w-5" />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default FormField;
