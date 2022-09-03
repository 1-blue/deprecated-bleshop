import { atom } from "recoil";

// type
import type { Product, Wish } from "@prisma/client";

/**
 * 2022/08/30 - 로그인한 유저가 찜한 상품들 - by 1-blue
 */
export const wishProductsState = atom<
  (Wish & {
    product: Product;
  })[]
>({
  key: "wishProductsState",
  default: [],
});
/**
 * 2022/08/30 - 찜한 상품들 관련 states 객체 - by 1-blue
 */
const wishService = {
  wishProductsState,
};

export default wishService;
