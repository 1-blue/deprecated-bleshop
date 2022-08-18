// type
import type { UseFormRegisterReturn } from "react-hook-form";

type Props = {
  name: string;
  register: UseFormRegisterReturn;
  children: React.ReactNode;
  placeholder?: string;
  errorMessage?: string;
};

const Select = ({
  name,
  register,
  children,
  placeholder,
  errorMessage,
}: Props) => {
  return (
    <>
      <label
        htmlFor={name}
        className="min-w-[200px] max-w-[600px] w-full font-bolder text-xs xs:text-sm md:text-base cursor-pointer"
      >
        카테고리
      </label>
      <select
        id={name}
        {...register}
        className="min-w-[200px] max-w-[600px] w-full p-2"
      >
        {placeholder && <option value="">{placeholder}</option>}
        {children}
      </select>
      <span className="self-start text-red-600 mb-4 mt-1 font-semibold text-[8px] xs:text-xs">
        {errorMessage && "※" + " " + errorMessage}
      </span>
    </>
  );
};

export default Select;
