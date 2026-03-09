import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";
import InputField from "./InputField";

interface InputProps {
  type: HTMLInputTypeAttribute;
  label: string;
  inputClassName?: string | undefined;
  labelClassName?: string | undefined;
  name: string;
  id: string;
  value?: string | undefined;
  onChange?(): ChangeEventHandler;
}

function InputWithLabel({
  type,
  label,
  inputClassName,
  labelClassName,
  name,
  id,
  value,
  onChange,
}: InputProps) {
  return (
    <>
      <label
        className={`hover:text-blue-500 hover:cursor-pointer ${labelClassName}`}
        htmlFor={id}
      >
        {label}
      </label>
      <InputField
        type={type}
        id={id}
        className={inputClassName}
        name={name}
        value={value}
        onChange={onChange}
      />
    </>
  );
}

export default InputWithLabel;
