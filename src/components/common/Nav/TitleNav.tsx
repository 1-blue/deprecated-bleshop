import { useRouter } from "next/router";
import dynamic from "next/dynamic";

// component
const Icon = dynamic(() => import("@src/components/common/Icon"), {
  suspense: true,
});

type TitleNavProps = {
  title: string;
};

const TitleNav = ({ title }: TitleNavProps) => {
  const router = useRouter();

  return (
    <nav className="bg-white rounded-md shadow-2xl overflow-hidden w-full min-w-[250px]">
      <button
        type="button"
        onClick={() => router.back()}
        className="flex p-2 xs:p-3 sm:p-4 transition-colors hover:bg-blue-400 hover:text-white focus:outline-none focus:bg-blue-400 focus:text-white"
      >
        <Icon shape="arrowLeft" className="w-5 h-5 xs:w-6 xs:h-6" />
        <span className="font-bold text-sm xs:text-base">{title}</span>
      </button>
    </nav>
  );
};

export default TitleNav;
