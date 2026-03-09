"use client";

import { MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  type?: "submit" | "reset" | "button" | undefined;
  className?: string | undefined;
  onClick: MouseEventHandler;
}

function Button({ children, className, type, onClick }: ButtonProps) {
  return (
    <button
      className={`bg-blue-500 hover:bg-blue-600 focus:bg-blue-800 hover:cursor-pointer rounded-3xl py-1 ${className}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
