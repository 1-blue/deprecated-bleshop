// util
import { combineClassNames } from "@src/libs";

type Props = {
  children: React.ReactNode;
  className?: string;
  hasPadding?: boolean;
};

const Background = ({ children, className, hasPadding }: Props) => {
  return (
    <section
      className={combineClassNames(
        "min-w-[250px] bg-white rounded-md shadow-2xl",
        hasPadding ? "p-2 xsm:p-3 md:p-4" : "",
        className ? className : ""
      )}
    >
      {children}
    </section>
  );
};

export default Background;
