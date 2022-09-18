import BasketNav from "./BasketNav";
import TitleNav from "./TitleNav";

type NavType = {
  TitleNav: typeof TitleNav;
  BasketNav: typeof BasketNav;
};

const Nav: NavType = { TitleNav, BasketNav };

export default Nav;
