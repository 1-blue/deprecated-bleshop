import { atom, selector } from "recoil";

// api
import apiService from "@src/api";

// type
import type { Product } from "@prisma/client";
import type { DetailProduct } from "@src/types";

/**
 * 2022/08/26 - 현재 상품의 식별자 - by 1-blue
 * 특정 상품 페이지에 들어갔을 경우 식별자를 입력받고
 * 해당 식별자를 이용해서 "상품 상세 정보", "상품과 연관된 상품들", "상품 리뷰들"을 얻음
 */
const productIdxState = atom<number>({
  key: "productIdxState",
  default: -1,
});

/**
 * 2022/08/25 - 현재 상품의 상세 데이터 - by 1-blue
 */
const productState = selector<DetailProduct | null>({
  key: "productState",
  get: async ({ get }) => {
    const productIdx = get(productIdxState);
    if (productIdx === -1) return null;

    const {
      data: { product },
    } = await apiService.productService.apiGetProduct({ productIdx });

    return product;
  },
});

/**
 * 2022/08/26 - 현재 상품과 연관된 상품들 - by 1-blue
 */
const relatedProductsState = selector<Product[]>({
  key: "relatedProductsState",
  get: async ({ get }) => {
    const product = get(productState);
    if (!product) return [];

    const {
      data: { products },
    } = await apiService.productService.apiGetRelatedProducts({
      productIdx: product.idx,
      keywords: product.keywords.map(({ keywordIdx }) => keywordIdx),
    });

    return products;
  },
});

/**
 * 2022/08/26 - 현재 랜더링할 상품 관련 states 객체 - by 1-blue
 */
const productService = {
  productIdxState,
  productState,
  relatedProductsState,
};

export default productService;
