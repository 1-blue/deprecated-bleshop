// type
import type { UseFormRegisterReturn } from "react-hook-form";

type Props = {
  name: string;
  register: UseFormRegisterReturn;
  placeholder?: string;
  errorMessage?: string;
  disabled?: boolean;
};

const Checkbox = ({ name, register, errorMessage, disabled }: Props) => {
  return (
    <div className="mb-4 min-w-[200px] max-w-[600px] w-full flex items-center space-x-1 xs:space-x-2">
      <input
        id={name}
        {...register}
        type="checkBox"
        className="w-4 h-4 xs:w-5 xs:h-5 cursor-pointer focus:outline-blue-400"
        disabled={disabled}
      />
      <label htmlFor={name} className="text-xs xs:text-sm cursor-pointer">
        {name}
      </label>
      <span className="self-start text-red-600 mb-4 mt-1 font-semibold text-[8px] xs:text-xs">
        {errorMessage && "※" + " " + errorMessage}
      </span>
    </div>
  );
};

export default Checkbox;
