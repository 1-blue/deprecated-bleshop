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
        className="min-w-[200px] max-w-[600px] w-full font-bolder text-xs xs:text-sm md:text-base cursor-pointer"
      >
        {name}
      </label>
      <input
        type={type}
        id={name}
        placeholder={placeholder}
        {...register}
        className="min-w-[200px] max-w-[600px] w-full px-2 xs:px-4 py-2 font-semibold text-xs xs:text-base rounded-sm border-2 border-gray-200 focus:border-blue-400 focus:outline-none placeholder:text-[8px] xs:placeholder:text-xs"
        disabled={disabled}
      />
      <span className="self-start text-red-600 mb-4 mt-1 font-semibold text-[8px] xs:text-xs">
        {errorMessage && "※" + " " + errorMessage}
      </span>
    </>
  );
};

export default Input;
