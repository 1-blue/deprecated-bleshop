// util
import { combineClassNames } from "@src/libs";

type Props = {
  name: string;
  className?: string | null;
};

const Label = ({ name, className }: Props) => {
  return (
    <label
      htmlFor={name}
      className={combineClassNames(
        "min-w-[200px] max-w-[600px] w-full font-bolder text-xs xs:text-sm md:text-base cursor-pointer",
        className ? className : ""
      )}
    >
      {name}
    </label>
  );
};

export default Label;
