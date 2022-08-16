import { useRouter } from "next/router";

// component
import Icon from "@src/components/common/Icon";

type TitleNavProps = {
  title: string;
};

const TitleNav = ({ title }: TitleNavProps) => {
  const router = useRouter();

  return (
    <nav className="bg-white rounded-md shadow-2xl overflow-hidden w-full min-w-[300px]">
      <button
        type="button"
        onClick={() => router.back()}
        className="flex p-4 transition-colors hover:bg-blue-400 hover:text-white focus:outline-none focus:bg-blue-400 focus:text-white"
      >
        <Icon shape="arrowLeft" className="w-5 h-5 xs:w-6 xs:h-6" />
        <span className="font-bold text-sm xs:text-base">{title}</span>
      </button>
    </nav>
  );
};

type NavType = {
  TitleNav: typeof TitleNav;
};

const Nav: NavType = { TitleNav };

export default Nav;
