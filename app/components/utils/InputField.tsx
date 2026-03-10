"use client";

import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

interface InputProps {
  type: HTMLInputTypeAttribute;
  name: string;
  className: string | undefined;
  placeholder?: string | undefined;
  id: string;
  value?: string | undefined;
  onChange?(): ChangeEventHandler;
}

function InputField({
  type,
  name,
  className,
  id,
  placeholder,
  value,
  onChange,
}: InputProps) {
  return (
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      className={`bg-white text-black rounded-3xl px-3 py-2 ${className}`}
      value={value}
      onChange={onChange}
    />
  );
}

export default InputField;
