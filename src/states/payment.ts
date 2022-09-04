import { atom } from "recoil";

// type
import type { RequestPayParams } from "@src/types";

/**
 * 2022/08/26 - 구매할 상품 정보 + 선택한 옵션 ( 수량, 색상, 사이즈 등 ) - by 1-blue
 */
export const productToPayment = atom<null | Omit<
  RequestPayParams,
  "pg" | "pay_method"
>>({
  key: "productToPayment",
  default: null,
});

/**
 * 2022/08/27 - 상품 구매 관련 states 객체 - by 1-blue
 */
const paymentService = {
  productToPayment,
};

export default paymentService;
