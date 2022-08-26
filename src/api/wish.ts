import { axiosInstance } from ".";

// type
import type { ApiGetWishBody, ApiGetWishResponse } from "@src/types";

/**
 * 2022/08/26 - 특정 상품에 찜하기 눌렀는지 여부 요청 - by 1-blue
 * @param productIdx 특정 상품의 식별자
 * @returns 특정 상품에 찜하기 눌렀는지 여부
 */
const apiGetWish = ({ productIdx }: ApiGetWishBody) =>
  axiosInstance.get<ApiGetWishResponse>(`/wish?productIdx=${productIdx}`);

/**
 * 2022/08/26 - 찜하기 관련 api 요청 객체 - by 1-blue
 */
const wishService = {
  apiGetWish,
};

export default wishService;
