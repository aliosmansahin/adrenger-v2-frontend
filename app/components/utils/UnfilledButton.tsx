import { ComponentPropsWithoutRef } from "react";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {}

function UnfilledButton({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={`text-blue-400 hover:text-blue-500 hover:cursor-pointer active:text-blue-700 disabled:text-gray-400 disabled:cursor-default ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default UnfilledButton;
