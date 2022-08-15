// type
import type { UseFormRegisterReturn } from "react-hook-form";

type Props = {
  name: string;
  type: "text" | "password";
  register: UseFormRegisterReturn;
  placeholder?: string;
  errorMessage?: string;
  disabled?: boolean;
};

const Input = ({
  name,
  type,
  register,
  placeholder,
  errorMessage,
  disabled,
}: Props) => {
  return (
    <>
      <label
        htmlFor={name}
        className="min-w-[300px] max-w-[600px] w-full font-bold cursor-pointer"
      >
        {name}
      </label>
      <input
        type={type}
        id={name}
        placeholder={placeholder}
        {...register}
        className="min-w-[300px] max-w-[600px] w-full px-4 py-2 font-semibold text-base rounded-sm border-2 border-gray-200 focus:border-blue-400 focus:outline-none placeholder:text-sm"
        disabled={disabled}
      />
      <span className="text-red-600 mb-4 mt-1 font-semibold text-sm">
        {errorMessage}
      </span>
    </>
  );
};

export default Input;
