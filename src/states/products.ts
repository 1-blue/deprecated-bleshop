import { atom, selector } from "recoil";

// type
import type { Product } from "@prisma/client";

/**
 * 2022/08/22 - 메인화면에서 불러올 상품들 - by 1-blue
 */
export const productsState = atom<Product[]>({
  key: "productsState",
  default: [],
});

/**
 * 2022/08/22 - 메인화면에서 불러올 상품들의 마지막 상품의 식별자 - by 1-blue
 */
export const productLastIdxState = selector<number>({
  key: "productLastIdxState",
  get: ({ get }) => {
    const products = get(productsState);

    if (products.length === 0) return -1;

    return products[products.length - 1].idx;
  },
  set: ({ set }) => {
    set(productsState, []);
  },
});

/**
 * 2022/08/27 - 상품들 관련 states 객체 - by 1-blue
 */
const productsService = {
  productsState,
  productLastIdxState,
};

export default productsService;
