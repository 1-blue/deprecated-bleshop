import { axiosInstance } from ".";

// type
import type {
  ApiCreateBasketBody,
  ApiCreateBasketResponse,
  ApiDeleteBasketBody,
  ApiDeleteBasketResponse,
  ApiUpdateBasketBody,
  ApiUpdateBasketResponse,
} from "@src/types";

/**
 * 2022/08/31 - 장바구니 상품 담기 요청 - by 1-blue
 * @param body 색상, 사이즈, 개수, 상품 식별자
 * @returns 결과 메시지
 */
const apiCreateBasket = (body: ApiCreateBasketBody) =>
  axiosInstance.post<ApiCreateBasketResponse>(`/basket`, body);

/**
 * 2022/08/31 - 장바구니 상품 제거 요청 - by 1-blue
 * @param productIdx 상품 식별자
 * @returns 결과 메시지
 */
const apiDeleteBasket = ({ productIdx }: ApiDeleteBasketBody) =>
  axiosInstance.delete<ApiDeleteBasketResponse>(
    `/basket?productIdx=${productIdx}`
  );

/**
 * 2022/09/01 - 장바구니 상품 수정 요청 - by 1-blue
 * @param body 상품 식별자, 개수, 스킵여부
 * @returns 결과 메시지
 */
const apiUpdateBasket = (body: ApiUpdateBasketBody) =>
  axiosInstance.put<ApiUpdateBasketResponse>(`/basket`, body);

/**
 * 2022/09/01 - 장바구니 관련 api 요청 객체 - by 1-blue
 */
const basketService = {
  apiCreateBasket,
  apiDeleteBasket,
  apiUpdateBasket,
};

export default basketService;
