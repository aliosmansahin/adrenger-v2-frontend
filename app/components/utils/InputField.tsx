"use client";

import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

interface InputProps {
  type: HTMLInputTypeAttribute;
  name: string;
  id: string;
  value?: string | undefined;
  onChange?(): ChangeEventHandler;
}

function InputField({ type, name, id, value, onChange }: InputProps) {
  return (
    <input type={type} id={id} name={name} value={value} onChange={onChange} />
  );
}

export default InputField;
