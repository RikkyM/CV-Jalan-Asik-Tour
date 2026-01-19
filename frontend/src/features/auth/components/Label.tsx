import type { LabelHTMLAttributes, ReactNode } from "react";

export type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
  children: ReactNode;
};

export const Label = ({ children, ...rest }: LabelProps) => {
  return (
    // <label className="block font-medium" {...rest}>
    //   {children}
    // </label>
    <label className="block font-medium" {...rest}>
      {children}
    </label>
  );
};
