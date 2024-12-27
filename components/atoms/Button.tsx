import { cn } from "@/lib/utils";
import React, { ButtonHTMLAttributes } from "react";

interface ButtonProp extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  className?: string;
}

const Button = ({ children, className, ...props }: ButtonProp) => {
  return (
    <button
      className={cn(
        "bg-primaryGreen px-[30px] py-[20px] rounded-[10px] font-bold my-4 text-white  ",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
