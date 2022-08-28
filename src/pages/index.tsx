import { useRecoilValue } from "recoil";

// state
import stateService from "@src/states";

// component
import HeadInfo from "@src/components/common/HeadInfo";
import Benner from "@src/components/Main/Benner";
import Products from "@src/components/Main/Products";
import SearchBar from "@src/components/Main/SearchBar";
import CategorySelector from "@src/components/Main/CategorySelector";
import FilterSelector from "@src/components/Main/FilterSelector";

// type
import type { GetServerSideProps, NextPage } from "next";

const Home: NextPage = () => {
  // 2022/08/22 - 상품들 - by 1-blue
  const products = useRecoilValue(stateService.productsService.productsState);

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
        <section className="p-2 xsm:p-3 md:p-4 space-y-2 bg-white rounded-md shadow-2xl">
          <div>
            <h2 className="pl-1 text-gray-800 font-bolder text-lg xs:text-xl md:text-2xl">
              상품 검색
            </h2>
            <SearchBar />
          </div>

          <div>
            <h2 className="pl-1 text-gray-800 font-bolder text-sm xs:text-base md:text-lg">
              카테고리
            </h2>
            <CategorySelector />
          </div>

          <div>
            <h2 className="pl-1 text-gray-800 font-bolder text-sm xs:text-base md:text-lg">
              필터
            </h2>
            <FilterSelector />
          </div>
        </section>

        {/* 광고 케루셀 */}
        <section className="p-2 xsm:p-3 md:p-4 space-y-1 bg-white rounded-md shadow-2xl w-full">
          <h2 className="pl-1 text-gray-800 font-bolder text-lg xs:text-xl md:text-2xl">
            광고
          </h2>
          <Benner />

          <div className="pb-10" />
        </section>

        {/* 상품 리스트 */}
        <section className="space-y-4 p-2 xsm:p-3 md:p-4 bg-white rounded-md shadow-2xl">
          <h2 className="pl-1 text-gray-800 font-bolder text-lg xs:text-xl md:text-2xl">
            상품들
          </h2>
          <Products />
        </section>
      </article>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};
