import { useSetRecoilState } from "recoil";
import { useEffect } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

// api
import apiService from "@src/api";

// state
import stateService from "@src/states";

// component
import HeadInfo from "@src/components/common/HeadInfo";
const Products = dynamic(() => import("@src/components/Main/Products"), {
  suspense: true,
});
const SearchBar = dynamic(() => import("@src/components/Main/SearchBar"), {
  suspense: true,
});
const CategorySelector = dynamic(
  () => import("@src/components/Main/CategorySelector"),
  {
    suspense: true,
  }
);
const FilterSelector = dynamic(
  () => import("@src/components/Main/FilterSelector"),
  {
    suspense: true,
  }
);
const Background = dynamic(
  () => import("@src/components/common/Support/Background"),
  {
    suspense: true,
  }
);
const Title = dynamic(() => import("@src/components/common/Support/Title"), {
  suspense: true,
});
const SubTitle = dynamic(
  () => import("@src/components/common/Support/SubTitle"),
  {
    suspense: true,
  }
);

// type
import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  NextPage,
} from "next";
import type { Category, Filter, Product } from "@prisma/client";
import type { LIMIT } from "@src/types";

const limit: LIMIT = 15;

type Props = {
  photo: string | null;
  categories: Category[];
  filters: Filter[];
  products: Product[];
};

const Search: NextPage<Props> = ({ photo, categories, filters, products }) => {
  const router = useRouter();

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
        title={`BleShop - 검색 ( ${router.query.searchWord || ""} )`}
        description={`BleShop의 검색 페이지입니다.\n검색창, 특정 키워드( ${
          router.query.searchWord || ""
        } )를 가진 상품들을 볼 수 있습니다.`}
        photo={photo}
      />

      <article className="pt-4 space-y-4">
        {/* 검색창과 카테고리 */}
        <Background className="space-y-2" hasPadding>
          <div>
            <Title text="상품 검색" />
            <SearchBar />
          </div>

          <div>
            <SubTitle text="카테고리" />
            <CategorySelector />
          </div>

          <div>
            <SubTitle text="필터" />
            <FilterSelector />
          </div>
        </Background>

        {/* 상품 리스트 */}
        <Background className="space-y-2" hasPadding>
          <Title
            text={`${
              router.query.searchWord
                ? '"' + router.query.searchWord + '"'
                : "모든 상품"
            } 검색 결과`}
          />

          <Products searchWord={router.query.searchWord as string} />
        </Background>
      </article>
    </>
  );
};

export default Search;

export const getServerSideProps: GetServerSideProps<Props> = async (
  context: GetServerSidePropsContext
) => {
  const { searchWord } = context.query;

  if (!(typeof searchWord === "string"))
    return {
      props: {
        photo: null,
        categories: [],
        filters: [],
        products: [],
      },
    };

  try {
    const categoriesPromise = apiService.categoryService.apiGetCategory();
    const filtersPromise = apiService.filterService.apiGetFilters();
    const productsPromise = apiService.productService.apiGetProductsByKeyword({
      limit,
      lastIdx: -1,
      selectedCategory: "",
      selectedFilters: [],
      keyword: encodeURI(searchWord),
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
    console.error("getServerSideProps search >> ", error);

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
