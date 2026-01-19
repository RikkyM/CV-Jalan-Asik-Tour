import { type InputHTMLAttributes } from "react";

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = ({ className, ...rest }: InputProps) => {
  return (
    <input
      {...rest}
      className={`${className} focus:outline-none   transition-all duration-500 border border-gray-300 w-full rounded px-3 py-2 text-sm`}
    />
  );
};

export default Input;
