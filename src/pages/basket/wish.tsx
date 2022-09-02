// component
import Nav from "@src/components/common/Nav";
import WishProducts from "@src/components/Products/wishProducts";

// type
import type { NextPage } from "next";

const Wish: NextPage = () => {
  return (
    <article className="pt-4 space-y-4">
      <Nav.TitleNav title="장바구니" />

      <Nav.BasketNav />

      <section className="p-2 xsm:p-3 md:p-4 space-y-2 bg-gray-100 rounded-md shadow-2xl">
        <WishProducts />
      </section>
    </article>
  );
};

export default Wish;
