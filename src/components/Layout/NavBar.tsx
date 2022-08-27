// util
import { combineClassNames } from "@src/libs";

// hook
import useScrollDirection from "@src/hooks/useScrollDirection";

// component
import MenuAnchor from "@src/components/Layout/MenuAnchor";

const NavBar = () => {
  const [hide, isBottom] = useScrollDirection(50);

  return (
    <ul
      className={combineClassNames(
        "fixed bottom-0 flex justify-between border-t border-gray-400 max-w-[1024px] w-full bg-gray-50 transition-transform duration-300 z-10",
        hide ? "translate-y-[57px]" : "translate-y-0",
        isBottom ? "translate-y-0" : ""
      )}
    >
      <MenuAnchor shape="list" name="카테고리" url="category" />
      <MenuAnchor shape="search" name="검색" url="search" />
      <MenuAnchor shape="home" name="홈" url="" />
      <MenuAnchor shape="user" name="내 정보" url="information" />
      <MenuAnchor shape="cart" name="장바구니" url="cart" />
    </ul>
  );
};

export default NavBar;
