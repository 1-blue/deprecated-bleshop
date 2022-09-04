import { useEffect } from "react";
import { useRecoilState } from "recoil";

// api
import apiService, { axiosInstance } from "@src/api";

// state
import stateService from "@src/states";

// util
import { numberWithComma } from "@src/libs";

// component
import HeadInfo from "@src/components/common/HeadInfo";
import Nav from "@src/components/common/Nav";
import Support from "@src/components/common/Support";
import BasketProducts from "@src/components/Products/BasketProducts";

// type
import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  NextPage,
} from "next";
import type { Basket, Product } from "@prisma/client";

type Props = {
  baskets: (Basket & {
    product: Product;
  })[];
};

const Basket: NextPage<Props> = ({ baskets }) => {
  // 2022/09/03 - 내 장바구니 상품들 수정 함수 - by 1-blue
  const [basketProducts, setBasketProducts] = useRecoilState(
    stateService.basketService.basketProductsState
  );

  // 2022/09/03 - 내 장바구니 상품들 초기화 - by 1-blue
  useEffect(() => setBasketProducts(baskets), [setBasketProducts, baskets]);

  return (
    <>
      <HeadInfo
        title="BleShop - 장바구니"
        description="BleShop의 장바구니 페이지"
      />

      <article className="pt-4 space-y-4">
        <Nav.TitleNav title="장바구니" />

        <Nav.BasketNav />

        <Support.Background hasPadding>
          <BasketProducts />
        </Support.Background>

        {basketProducts.length !== 0 && (
          <Support.Background className="space-y-2" hasPadding>
            <Support.Title text="결제 금액" />

            <ul>
              {basketProducts
                .filter((basket) => !basket.skip)
                .map((basket) => (
                  <li key={basket.productIdx} className="flex items-center">
                    <span className="text-xs xs:text-sm sm:text-base font-bold text-gray-500">
                      {basket.product.name}
                    </span>
                    <div className="flex-1" />
                    <span className="font-bold text-xs xs:text-sm sm:text-base">
                      {numberWithComma(basket.quantity * basket.product.price)}
                    </span>
                    <span className="text-[8px] xs:text-xs sm:text-sm">원</span>
                  </li>
                ))}

              <hr className="h-0.5 bg-gray-300 my-2" />

              <li className="flex items-center">
                <span className="text-sm xs:text-base sm:text-lg font-bold text-gray-600">
                  총 결제 금액
                </span>
                <div className="flex-1" />
                <span className="font-bold text-sm xs:text-base sm:text-lg">
                  {numberWithComma(
                    basketProducts
                      .map((basket) =>
                        basket.skip ? 0 : basket.quantity * basket.product.price
                      )
                      .reduce((prev, curr) => prev + curr)
                  )}
                </span>
                <span className="font-bold text-xs xs:text-sm sm:text-base">
                  원
                </span>
              </li>
            </ul>
          </Support.Background>
        )}
      </article>
    </>
  );
};

export default Basket;

export const getServerSideProps: GetServerSideProps<Props> = async (
  context: GetServerSidePropsContext
) => {
  /**
   * SSR 요청일 경우에는 서버에서 페이지를 완성한 후에 반환하는 방식임
   * 하지만 서버에서는 클라이언트(브라우저)에 대한 정보를 알 수 없으니 "cookie"(세션 쿠키)를 이용해서 유저를 식별함
   * 컴포넌트에 내부에서 하는 요청들은 "axios"의 "withCredentials" 옵션을 통해서 자동으로 쿠키를 넣어서 전달하지만
   * "getServerSideProps()"에서 전달하는 요청은 서버에서 서버로 보내는 요청이므로 쿠키의 존재를 몰라서 첨부하지 않고 요청을 보냄
   *
   * 따라서 직접적으로 쿠키를 넣어주는 행동을 하지 않으면 요청에 쿠키가 들어가지 않아서 서버가 어떤 유저인지 식별할 수 없기에 직접적으로 쿠키를 넣어주는 구문임
   */
  let { cookie } = context.req.headers;
  cookie = cookie ? cookie : "";
  axiosInstance.defaults.headers.Cookie = cookie;

  let baskets: (Basket & {
    product: Product;
  })[] = [];

  try {
    const { data } = await apiService.productService.apiGetBasketProducts();
    baskets = data.baskets;
  } catch (error) {
    console.error("getServerSideProps basket/wish >> ", error);
  } finally {
    /**
     * "axios"에 등록한 특정 유저의 쿠키 제거
     * ( 브라우저에서의 요청이 아니라 서버에서의 요청이므로 다른 유저도 같은 서버를 사용하기에 쿠키가 공유되는 문제가 생김 )
     */
    axiosInstance.defaults.headers.Cookie = "";
  }

  return {
    props: {
      baskets,
    },
  };
};
