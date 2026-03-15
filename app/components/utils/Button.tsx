import { ComponentPropsWithoutRef } from "react";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {}

function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={`bg-blue-500 hover:bg-blue-600 active:bg-blue-800 hover:cursor-pointer disabled:bg-gray-500 disabled:cursor-default rounded-3xl py-1 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
