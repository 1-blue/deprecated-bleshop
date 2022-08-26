// component
import ErrorMessage from "./ErrorMessage";
import Label from "./Label";

// type
import type { UseFormRegisterReturn } from "react-hook-form";

type Props = {
  name: string;
  type: "text" | "password" | "number";
  register: UseFormRegisterReturn;
  placeholder?: string;
  errorMessage?: string;
  disabled?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
};

const Input = ({
  name,
  type,
  register,
  placeholder,
  errorMessage,
  disabled,
  onFocus,
  onBlur,
}: Props) => {
  return (
    <>
      <Label name={name} />

      <input
        type={type}
        id={name}
        placeholder={placeholder}
        {...register}
        className="min-w-[200px] max-w-[600px] w-full px-2 xs:px-4 py-2 font-semibold text-xs xs:text-base rounded-sm border-2 border-gray-200 focus:border-blue-400 focus:outline-none placeholder:text-[8px] xs:placeholder:text-xs"
        disabled={disabled}
        onFocus={onFocus}
        onBlur={onBlur}
      />

      <ErrorMessage errorMessage={errorMessage} />
    </>
  );
};

export default Input;
