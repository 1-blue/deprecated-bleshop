import Link from "next/link";
import { useRouter } from "next/router";

// util
import { combineClassNames } from "@src/libs";

const BasketNav = () => {
  const { asPath } = useRouter();

  return (
    <ul className="flex justify-between bg-white rounded-md shadow-2xl overflow-hidden w-full min-w-[250px] divide-x-4">
      <li className="flex-1 flex">
        <Link href="/basket">
          <a
            className={combineClassNames(
              "flex-1 text-center py-2 xs:py-3 font-bolder text-xs xs:text-base sm:text-lg hover:bg-blue-500 hover:text-white focus:outline-none focus:bg-blue-500 focus:text-white transition-colors",
              asPath.endsWith("/basket") ? "bg-blue-400 text-white" : ""
            )}
          >
            장바구니 상품들
          </a>
        </Link>
      </li>
      <li className="flex-1 flex">
        <Link href="/basket/wish">
          <a
            className={combineClassNames(
              "flex-1 text-center py-2 xs:py-3 font-bolder text-xs xs:text-base sm:text-lg hover:bg-blue-500 hover:text-white focus:outline-none focus:bg-blue-500 focus:text-white transition-colors",
              asPath.includes("/basket/wish") ? "bg-blue-400 text-white" : ""
            )}
          >
            찜한 상품들
          </a>
        </Link>
      </li>
    </ul>
  );
};

export default BasketNav;
