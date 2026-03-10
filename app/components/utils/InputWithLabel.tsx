import { ComponentPropsWithoutRef } from "react";
import InputField from "./InputField";

interface InputProps extends ComponentPropsWithoutRef<"input"> {
  labelClassName?: string | undefined;
  label: string;
}

function InputWithLabel({ id, label, labelClassName, ...props }: InputProps) {
  return (
    <>
      <label
        className={`hover:text-blue-500 hover:cursor-pointer ${labelClassName}`}
        htmlFor={id}
      >
        {label}
      </label>
      <InputField id={id} {...props} />
    </>
  );
}

export default InputWithLabel;
