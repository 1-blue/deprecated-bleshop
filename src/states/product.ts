import { atom, selector } from "recoil";

// type
import type { Product } from "@prisma/client";

/**
 * 2022/08/27 - 현재 상품과 연관된 상품들 - by 1-blue
 */
export const relatedProductsState = atom<Product[]>({
  key: "relatedProductsState",
  default: [],
});

/**
 * 2022/08/27 - 현재 상품과 연관된 상품들의 마지막 상품의 식별자 - by 1-blue
 */
export const relatedProductsLastIdxState = selector<number>({
  key: "relatedProductsLastIdxState",
  get: ({ get }) => {
    const products = get(relatedProductsState);

    if (products.length === 0) return -1;

    return products[products.length - 1].idx;
  },
  set: ({ set }) => {
    set(relatedProductsState, []);
  },
});

/**
 * 2022/08/27 - 현재 랜더링할 상품 관련 states 객체 - by 1-blue
 */
const productService = {
  relatedProductsState,
  relatedProductsLastIdxState,
};

export default productService;
