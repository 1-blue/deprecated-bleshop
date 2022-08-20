// util
import { combineClassNames } from "@src/libs";

type Props = {
  errorMessage?: string;
  className?: string | null;
};

const ErrorMessage = ({ errorMessage, className }: Props) => {
  return (
    <span
      className={combineClassNames(
        "min-w-[200px] max-w-[600px] w-full text-red-600 mb-4 mt-1 font-semibold text-[8px] xs:text-xs",
        className ? className : ""
      )}
    >
      {errorMessage && "※" + " " + errorMessage}
    </span>
  );
};

export default ErrorMessage;
