// util
import { combineClassNames } from "@src/libs";

// component
import Icon from "@src/components/common/Icon";

type Props = {
  showCondition: string;
};

const ToTopButton = ({ showCondition }: Props) => {
  return (
    <button
      type="button"
      className={combineClassNames(
        "rounded-full bg-white border border-gray-300 shadow-md p-2 flex flex-col items-center  hover:text-blue-600 hover:border-blue-600 focus:outline-none focus:text-blue-600 focus:border-blue-600 transition-all duration-500",
        showCondition
      )}
      onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
    >
      <Icon shape="doubleUp" className="w-5 h-5" />
      <span className="text-[8px]">맨위로</span>
    </button>
  );
};

export default ToTopButton;
