// component
import MenuAnchor from "@src/components/Layout/MenuAnchor";

const NavBar = () => {
  return (
    <ul className="flex justify-between border-t border-gray-400">
      <MenuAnchor shape="list" name="카테고리" url="category" />
      <MenuAnchor shape="search" name="검색" url="search" />
      <MenuAnchor shape="home" name="홈" url="" />
      <MenuAnchor shape="user" name="내 정보" url="information" />
      <MenuAnchor shape="cart" name="장바구니" url="cart" />
    </ul>
  );
};

export default NavBar;
