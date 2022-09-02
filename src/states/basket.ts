import { atom } from "recoil";

// type
import type { Basket, Product } from "@prisma/client";

/**
 * 2022/08/31 - 로그인한 유저의 장바구니 상품들 - by 1-blue
 */
export const basketProductsState = atom<
  (Basket & {
    product: Product;
  })[]
>({
  key: "basketProductsState",
  default: [],
});

/**
 * 2022/09/01 - 장바구니 상품들의 관련 states 객체 - by 1-blue
 */
const basketService = {
  basketProductsState,
};

export default basketService;
