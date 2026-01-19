import { type ButtonHTMLAttributes, type ReactNode } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      className="bg-black hover:bg-gray-700 transition-all duration-500 cursor-pointer w-full mt-1.5 p-2.5 rounded-full text-sm font-semibold text-white outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
    >
      {children}
    </button>
  );
};

export default Button;
