import { useCallback, useRef } from "react";

// type
import type { UseFormRegisterReturn } from "react-hook-form";

type Props = {
  name: string;
  register: UseFormRegisterReturn;
  placeholder?: string;
  errorMessage?: string;
  disabled?: boolean;
};

const Textarea = ({
  name,
  register,
  placeholder,
  errorMessage,
  disabled,
}: Props) => {
  // 2022/08/18 - register에서 ref 떼내기 - by 1-blue
  const textRef = useRef<HTMLTextAreaElement | null>(null);
  const { ref, ...restRegister } = register;

  // 2022/08/18 - textarea 리사이징 - by 1-blue
  const handleResizeHeight = useCallback(() => {
    if (!textRef.current) return;

    textRef.current.style.height = "auto";
    textRef.current.style.height = textRef.current?.scrollHeight + "px";
  }, []);

  return (
    <>
      <label
        htmlFor={name}
        className="min-w-[200px] max-w-[600px] w-full font-bolder text-xs xs:text-sm md:text-base cursor-pointer"
      >
        {name}
      </label>
      <textarea
        id={name}
        rows={10}
        placeholder={placeholder}
        {...restRegister}
        className="min-w-[200px] max-w-[600px] w-full px-2 xs:px-4 py-2 font-semibold text-xs xs:text-base rounded-sm border-2 border-gray-200 focus:border-blue-400 focus:outline-none placeholder:text-[8px] xs:placeholder:text-xs resize-none"
        disabled={disabled}
        ref={(e) => {
          ref(e);
          textRef.current = e;
        }}
        onInput={handleResizeHeight}
      />
      <span className="self-start text-red-600 mb-4 mt-1 font-semibold text-[8px] xs:text-xs">
        {errorMessage && "※" + " " + errorMessage}
      </span>
    </>
  );
};

export default Textarea;
