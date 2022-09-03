import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

// api
import apiService from "@src/api";

// state
import stateService from "@src/states";

// component
import HeadInfo from "@src/components/common/HeadInfo";
import Benner from "@src/components/Main/Benner";
import Products from "@src/components/Main/Products";
import SearchBar from "@src/components/Main/SearchBar";
import CategorySelector from "@src/components/Main/CategorySelector";
import FilterSelector from "@src/components/Main/FilterSelector";
import Support from "@src/components/common/Support";

// type
import type { GetServerSideProps, NextPage } from "next";
import type { Category, Filter, Product } from "@prisma/client";
import type { LIMIT } from "@src/types";

const limit: LIMIT = 15;

type Props = {
  photo: string | null;
  categories: Category[];
  filters: Filter[];
  products: Product[];
};

const Home: NextPage<Props> = ({ photo, categories, filters, products }) => {
  const setCategories = useSetRecoilState(
    stateService.categoryService.categoriesState
  );
  const setFilters = useSetRecoilState(stateService.filterService.filtersState);
  const setProducts = useSetRecoilState(
    stateService.productsService.productsState
  );

  // 2022/09/03 - getServerSideProps에서 받아온 카테고리들, 필터들, 상품들 recoil에 초기화 - by 1-blue
  useEffect(() => {
    setCategories(categories);
    setFilters(filters);
    setProducts(products);
  }, [setCategories, categories, setFilters, filters, setProducts, products]);

  return (
    <>
      <HeadInfo
        title="BleShop - 메인"
        description={
          "BleShop의 메인 페이지입니다.\n검색창, 광고 배너, 최근 업로드한 상품들을 볼 수 있습니다."
        }
        photo={photo}
      />

      <article className="pt-4 space-y-4">
        {/* 검색창과 카테고리 */}
        <Support.Background className="space-y-2" hasPadding>
          <div>
            <Support.Title text="상품 검색" />
            <SearchBar />
          </div>

          <div>
            <Support.SubTitle text="카테고리" />
            <CategorySelector />
          </div>

          <div>
            <Support.SubTitle text="필터" />
            <FilterSelector />
          </div>
        </Support.Background>

        {/* 광고 케루셀 */}
        <Support.Background className="space-y-2" hasPadding>
          <Support.Title text="광고" />
          <Benner />

          <div className="pb-10" />
        </Support.Background>

        {/* 상품 리스트 */}
        <Support.Background className="space-y-2" hasPadding>
          <Support.Title text="상품들" />
          <Products />
        </Support.Background>
      </article>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  try {
    const categoriesPromise = apiService.categoryService.apiGetCategory();
    const filtersPromise = apiService.filterService.apiGetFilters();
    const productsPromise = apiService.productService.apiGetProducts({
      limit,
      lastIdx: -1,
      selectedCategory: "",
      selectedFilters: [],
    });

    const [
      {
        data: { categories },
      },
      {
        data: { filters },
      },
      {
        data: { products },
      },
    ] = await Promise.all([categoriesPromise, filtersPromise, productsPromise]);

    return {
      props: {
        photo: products[0].photo,
        categories,
        filters,
        products,
      },
    };
  } catch (error) {
    console.error("getServerSideProps index >> ", error);

    return {
      props: {
        photo: null,
        categories: [],
        filters: [],
        products: [],
      },
    };
  }
};
