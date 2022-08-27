import Link from "next/link";

// component
import Icon from "@src/components/common/Icon";

const ToCreateProductButton = () => {
  return (
    <Link href="/product/upload">
      <a className="rounded-full bg-white border border-gray-300 shadow-md p-2 flex flex-col items-center  hover:text-blue-600 hover:border-blue-600 focus:outline-none focus:text-blue-600 focus:border-blue-600 transition-all duration-500">
        <Icon shape="plus" className="w-5 h-5" />
        <span className="text-[8px]">상품등록</span>
      </a>
    </Link>
  );
};

export default ToCreateProductButton;
