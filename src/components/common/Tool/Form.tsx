// util
import { combineClassNames } from "@src/libs";

type Props = {
  onSubmit: () => void;
  className?: string;
  children: React.ReactNode;
};
const Form = ({ onSubmit, className, children }: Props) => {
  return (
    <form
      onSubmit={onSubmit}
      className={combineClassNames(
        "flex flex-col items-center",
        className ? className : ""
      )}
    >
      {children}
    </form>
  );
};

export default Form;
