import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";

// state
import { productsState } from "@src/states";

// component
import HeadInfo from "@src/components/common/HeadInfo";
import Products from "@src/components/Main/Products";
import SearchBar from "@src/components/Main/SearchBar";
import CategorySelector from "@src/components/Main/CategorySelector";
import FilterSelector from "@src/components/Main/FilterSelector";

// type
import type { NextPage } from "next";

const Search: NextPage = () => {
  const router = useRouter();
  const products = useRecoilValue(productsState);

  return (
    <>
      <HeadInfo
        title={`BleShop - 검색 ( ${router.query.searchWord || ""} )`}
        description={`BleShop의 검색 페이지입니다.\n검색창, 특정 키워드( ${
          router.query.searchWord || ""
        } )를 가진 상품들을 볼 수 있습니다.`}
        photo={products?.[0]?.photo}
      />

      <article className="pt-4 space-y-4">
        {/* 검색창과 카테고리 */}
        <section className="p-2 xsm:p-3 md:p-4 space-y-1 bg-white rounded-md shadow-2xl">
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

        {/* 상품 리스트 */}
        <section className="space-y-4 p-2 xsm:p-3 md:p-4 bg-white rounded-md shadow-2xl">
          <h2 className="pl-1 text-gray-800 font-bolder text-lg xs:text-xl md:text-2xl">
            {`"${router.query.searchWord || ""}" 검색 결과`}
          </h2>

          <Products />
        </section>
      </article>
    </>
  );
};

export default Search;
