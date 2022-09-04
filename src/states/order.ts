import { atom } from "recoil";

// type
import type { Order } from "@prisma/client";

/**
 * 2022/09/04 - 로그인한 유저의 주문 목록들 - by 1-blue
 */
export const orderListState = atom<
  (Order & {
    Product: {
      name: string;
      photo: string;
    };
  })[]
>({
  key: "orderListState",
  default: [],
});

/**
 * 2022/09/04 - 주문 목록 관련 states 객체 - by 1-blue
 */
const orderService = {
  orderListState,
};

export default orderService;
