import { useRecoilValue } from "recoil";

// state
import { productsState } from "@src/states";

// component
import HeadInfo from "@src/components/common/HeadInfo";
import Benner from "@src/components/Main/Benner";
import Products from "@src/components/Main/Products";
import SearchBar from "@src/components/Main/SearchBar";

// type
import type { NextPage } from "next";

const Home: NextPage = () => {
  const products = useRecoilValue(productsState);

  return (
    <>
      <HeadInfo
        title="BleShop - 메인"
        description={
          "BleShop의 메인 페이지입니다.\n검색창, 광고 배너, 최근 업로드한 상품들을 볼 수 있습니다."
        }
        photo={products?.[0]?.photo}
      />

      <article className="pt-4 space-y-4">
        {/* 검색창과 카테고리 */}
        <SearchBar />

        {/* 광고 케루셀 */}
        <Benner />

        {/* 상품 리스트 */}
        <Products />

        {/*  */}
      </article>
    </>
  );
};

export default Home;
