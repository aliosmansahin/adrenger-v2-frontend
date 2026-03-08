import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";
import InputField from "./InputField";

interface InputProps {
  type: HTMLInputTypeAttribute;
  label: string;
  name: string;
  id: string;
  value?: string | undefined;
  onChange?(): ChangeEventHandler;
}

function InputWithLabel({
  type,
  label,
  name,
  id,
  value,
  onChange,
}: InputProps) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <InputField
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />
    </>
  );
}

export default InputWithLabel;
