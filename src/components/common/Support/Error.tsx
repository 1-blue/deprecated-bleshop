// util
import { combineClassNames } from "@src/libs";

type Props = {
  text: string;
  className?: string;
};

const Error = ({ text, className }: Props) => {
  return (
    <h6
      className={combineClassNames(
        "text-center font-bolder text-red-500",
        className ? className : ""
      )}
    >
      {text}
    </h6>
  );
};

export default Error;
