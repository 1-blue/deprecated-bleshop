// component
import Nav from "@src/components/common/Nav";

// type
import type { NextPage } from "next";

const Cart: NextPage = () => {
  return (
    <article className="pt-4 space-y-4">
      <Nav.TitleNav title="장바구니" />

      <Nav.CartNav />
    </article>
  );
};

export default Cart;
