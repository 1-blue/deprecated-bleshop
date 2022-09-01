import { useRecoilValue } from "recoil";

// state
import stateService from "@src/states";

// util
import { numberWithComma } from "@src/libs";

// component
import Nav from "@src/components/common/Nav";
import BasketProducts from "@src/components/Products/basketProducts";

// type
import type { NextPage } from "next";

const Basket: NextPage = () => {
  // 2022/08/31 - 화면에 랜더링할 장바구니 상품들 - by 1-blue
  const basketProducts = useRecoilValue(
    stateService.basketService.basketProductsState
  );

  return (
    <article className="pt-4 space-y-4">
      <Nav.TitleNav title="장바구니" />

      <Nav.BasketNav />

      <section className="p-2 xsm:p-3 md:p-4 space-y-2 bg-gray-100 rounded-md shadow-2xl">
        <BasketProducts />
      </section>

      {basketProducts.length !== 0 && (
        <section className="p-2 xsm:p-3 md:p-4 space-y-2 bg-gray-100 rounded-md shadow-2xl">
          <h2 className="pl-1 text-gray-800 font-bolder text-lg xs:text-xl md:text-2xl">
            결제 금액
          </h2>

          <ul>
            {basketProducts
              .filter((basket) => !basket.skip)
              .map((basket) => (
                <li key={basket.productIdx} className="flex items-center">
                  <span className="text-sm md:text-base font-bold text-gray-500">
                    {basket.product.name}
                  </span>
                  <div className="flex-1" />
                  <span className="font-bold md:text-lg">
                    {numberWithComma(basket.quantity * basket.product.price)}
                  </span>
                  <span className="text-sm md:text-base">원</span>
                </li>
              ))}

            <hr className="h-0.5 bg-gray-300 my-2" />

            <li className="flex items-center">
              <span className="text-base md:text-lg font-bold text-gray-600">
                총 결제 금액
              </span>
              <div className="flex-1" />
              <span className="font-bold md:text-lg">
                {numberWithComma(
                  basketProducts
                    .map((basket) =>
                      basket.skip ? 0 : basket.quantity * basket.product.price
                    )
                    .reduce((prev, curr) => prev + curr)
                )}
              </span>
              <span className="text-sm md:text-base">원</span>
            </li>
          </ul>
        </section>
      )}
    </article>
  );
};

export default Basket;
