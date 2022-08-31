import { atom, selector } from "recoil";

// type
import type { Product } from "@prisma/client";

/**
 * 2022/08/30 - 로그인한 유저가 찜한 상품들 - by 1-blue
 */
export const wishProductsState = atom<Product[]>({
  key: "wishProductsState",
  default: [],
});

/**
 * 2022/08/30 - 로그인한 유저가 찜한 상품들의 마지막 상품의 식별자 - by 1-blue
 */
export const wishProductsLastIdxState = selector<number>({
  key: "wishProductsLastIdxState",
  get: ({ get }) => {
    const products = get(wishProductsState);

    if (products.length === 0) return -1;

    return products[products.length - 1].idx;
  },
  set: ({ set }) => {
    set(wishProductsState, []);
  },
});

/**
 * 2022/08/30 - 찜한 상품들 관련 states 객체 - by 1-blue
 */
const wishService = {
  wishProductsState,
  wishProductsLastIdxState,
};

export default wishService;
