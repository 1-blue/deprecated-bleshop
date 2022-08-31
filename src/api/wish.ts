import { axiosInstance } from ".";

// type
import type {
  ApiCreateWishBody,
  ApiCreateWishResponse,
  ApiDeleteWishBody,
  ApiDeleteWishResponse,
  ApiGetWishBody,
  ApiGetWishResponse,
} from "@src/types";

/**
 * 2022/08/26 - 특정 상품에 찜하기 눌렀는지 여부 요청 - by 1-blue
 * @param productIdx 특정 상품의 식별자
 * @returns 특정 상품에 찜하기 눌렀는지 여부
 */
const apiGetWish = ({ productIdx }: ApiGetWishBody) =>
  axiosInstance.get<ApiGetWishResponse>(`/wish?productIdx=${productIdx}`);

/**
 * 2022/08/30 - 특정 상품 찜하기 요청 - by 1-blue
 * @param productIdx 특정 상품의 식별자
 * @returns 결과 메시지
 */
const apiCreateWish = ({ productIdx }: ApiCreateWishBody) =>
  axiosInstance.post<ApiCreateWishResponse>(`/wish?productIdx=${productIdx}`);

/**
 * 2022/08/30 - 특정 상품 찜하기 취소 요청 - by 1-blue
 * @param productIdx 특정 상품의 식별자
 * @returns 결과 메시지
 */
const apiDeleteWish = ({ productIdx }: ApiDeleteWishBody) =>
  axiosInstance.delete<ApiDeleteWishResponse>(`/wish?productIdx=${productIdx}`);

/**
 * 2022/08/26 - 찜하기 관련 api 요청 객체 - by 1-blue
 */
const wishService = {
  apiGetWish,
  apiCreateWish,
  apiDeleteWish,
};

export default wishService;
