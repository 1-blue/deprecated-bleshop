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
          "p-2 border-2 cursor-pointer focus:outline-blue-400",
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
