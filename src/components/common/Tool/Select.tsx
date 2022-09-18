// component
import Label from "./Label";
import ErrorMessage from "./ErrorMessage";

// type
import type { UseFormRegisterReturn } from "react-hook-form";
import { combineClassNames } from "@src/libs";

type Props = {
  name: string;
  register: UseFormRegisterReturn;
  children: React.ReactNode;
  placeholder?: string;
  errorMessage?: string;
  className?: string;
};

const Select = ({
  name,
  register,
  children,
  placeholder,
  errorMessage,
  className,
}: Props) => {
  return (
    <>
      <Label name={name} />

      <select
        id={name}
        {...register}
        className={combineClassNames(
          "p-1 xs:p-1.5 sm:p-2 text-xs xs:text-sm sm:text-base border-2 cursor-pointer focus:outline-blue-400",
          className ? className : ""
        )}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {children}
      </select>

      <ErrorMessage errorMessage={errorMessage} />
    </>
  );
};

export default Select;
