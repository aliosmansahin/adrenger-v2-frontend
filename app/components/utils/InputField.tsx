"use client";

import { ComponentPropsWithoutRef } from "react";

interface InputProps extends ComponentPropsWithoutRef<"input"> {}

function InputField({ className, ...props }: InputProps) {
  return (
    <input
      className={`bg-white text-black rounded-3xl px-3 py-2 ${className}`}
      {...props}
    />
  );
}

export default InputField;
