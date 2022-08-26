// component
import Label from "./Label";
import ErrorMessage from "./ErrorMessage";

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
      <Label name={name} />

      <select
        id={name}
        {...register}
        className="min-w-[200px] max-w-[600px] w-full p-2 border-2 cursor-pointer focus:outline-blue-400"
      >
        {placeholder && <option value="">{placeholder}</option>}
        {children}
      </select>

      <ErrorMessage errorMessage={errorMessage} />
    </>
  );
};

export default Select;
