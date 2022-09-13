import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import dynamic from "next/dynamic";

// api
import apiService, { axiosInstance } from "@src/api";

// state
import stateService from "@src/states";

// component
import HeadInfo from "@src/components/common/HeadInfo";
const Background = dynamic(
  () => import("@src/components/common/Support/Background"),
  { suspense: true }
);
const TitleNav = dynamic(() => import("@src/components/common/Nav/TitleNav"), {
  suspense: true,
});
const BasketNav = dynamic(
  () => import("@src/components/common/Nav/BasketNav"),
  { suspense: true }
);
const WishProducts = dynamic(
  () => import("@src/components/Products/WishProducts"),
  { suspense: true }
);

// type
import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  NextPage,
} from "next";
import type { Product, Wish } from "@prisma/client";

type Props = {
  wishes: (Wish & {
    product: Product;
  })[];
};

const Wish: NextPage<Props> = ({ wishes }) => {
  // 2022/09/03 - 화면에 랜더링할 찜한 상품들 수정 함수 - by 1-blue
  const setWishProducts = useSetRecoilState(
    stateService.wishService.wishProductsState
  );

  useEffect(() => setWishProducts(wishes), [setWishProducts, wishes]);

  return (
    <>
      <HeadInfo
        title="BleShop - 찜한 상품"
        description="BleShop의 찜한 상품들을 보여주는 페이지"
      />

      <article className="pt-4 space-y-4">
        <TitleNav title="장바구니" />

        <BasketNav />

        <Background hasPadding>
          <WishProducts />
        </Background>
      </article>
    </>
  );
};

export default Wish;

export const getServerSideProps: GetServerSideProps<Props> = async (
  context: GetServerSidePropsContext
) => {
  let { cookie } = context.req.headers;
  cookie = cookie ? cookie : "";
  axiosInstance.defaults.headers.Cookie = cookie;

  let wishes: (Wish & {
    product: Product;
  })[] = [];

  try {
    const { data } = await apiService.productService.apiGetWishProducts();
    wishes = data.wishes;
  } catch (error) {
    console.error("getServerSideProps basket/wish >> ", error);
  } finally {
    axiosInstance.defaults.headers.Cookie = "";
  }

  return {
    props: {
      wishes,
    },
  };
};
