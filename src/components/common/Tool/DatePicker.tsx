import React from "react";
import ReactDatePicker, { registerLocale } from "react-datepicker";
import { Controller } from "react-hook-form";
import ko from "date-fns/locale/ko";

// component
import Label from "./Label";
import ErrorMessage from "./ErrorMessage";

// css
import "react-datepicker/dist/react-datepicker.css";

// type
import type { Control, FieldValues, Path } from "react-hook-form";

registerLocale("ko", ko);

type Props<T extends FieldValues> = {
  name: string;
  control: Control<T, any>;
  errorMessage?: string;
};

function DatePicker<T extends FieldValues>({
  name,
  control,
  errorMessage,
}: Props<T>) {
  return (
    <>
      <Label name={name} />

      <div className="min-w-[200px] max-w-[600px] w-full">
        <Controller
          control={control}
          name={"information.period" as Path<T>}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <>
              <ReactDatePicker
                id={name}
                dateFormat="yyyy년 MM월 dd일"
                onChange={(date) => onChange(date)}
                selected={value}
                minDate={new Date()}
                locale="ko"
                placeholderText="판매 종료 날짜를 선택해주세요."
                className="w-full px-2 xs:px-4 py-2 font-semibold text-xs xs:text-base rounded-sm border-2 border-gray-200 focus:border-blue-400 focus:outline-none placeholder:text-[8px] xs:placeholder:text-xs"
              />
            </>
          )}
        />
      </div>

      <ErrorMessage errorMessage={errorMessage} />
    </>
  );
}

export default DatePicker;
