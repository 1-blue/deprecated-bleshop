import Link from "next/link";
import { useRouter } from "next/router";

// component
import Icon from "@src/components/common/Icon";
import { combineClassNames } from "@src/libs";

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

const CartNav = () => {
  const { asPath } = useRouter();

  return (
    <ul className="flex justify-between bg-white rounded-md shadow-2xl overflow-hidden w-full min-w-[300px] divide-x-4">
      <li className="flex-1 flex">
        <Link href="/cart/order">
          <a
            className={combineClassNames(
              "flex-1 text-center py-2 xs:py-3 font-bolder text-sm xs:text-base sm:text-lg hover:bg-blue-500 hover:text-white transition-colors",
              asPath.includes("/cart/order") ? "bg-blue-400 text-white" : ""
            )}
          >
            구매 목록
          </a>
        </Link>
      </li>
      <li className="flex-1 flex">
        <Link href="/cart">
          <a
            className={combineClassNames(
              "flex-1 text-center py-2 xs:py-3 font-bolder text-sm xs:text-base sm:text-lg hover:bg-blue-500 hover:text-white transition-colors",
              asPath.endsWith("/cart") ? "bg-blue-400 text-white" : ""
            )}
          >
            장바구니 상품들
          </a>
        </Link>
      </li>
      <li className="flex-1 flex">
        <Link href="/cart/wish">
          <a
            className={combineClassNames(
              "flex-1 text-center py-2 xs:py-3 font-bolder text-sm xs:text-base sm:text-lg hover:bg-blue-500 hover:text-white transition-colors",
              asPath.includes("/cart/wish") ? "bg-blue-400 text-white" : ""
            )}
          >
            찜한 상품들
          </a>
        </Link>
      </li>
    </ul>
  );
};

type NavType = {
  TitleNav: typeof TitleNav;
  CartNav: typeof CartNav;
};

const Nav: NavType = { TitleNav, CartNav };

export default Nav;
