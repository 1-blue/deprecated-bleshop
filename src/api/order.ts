import { axiosInstance } from ".";

// type
import type {
  // ApiGetOrderListBody,
  ApiGetOrderListResponse,
  ApiCreateOrderBody,
  ApiCreateOrderResponse,
} from "@src/types";

/**
 * 2022/09/04 - 로그인한 유저의 모든 결제 내용 요청 등록 - by 1-blue
 * @returns 유저의 모든 결제 내역들
 */
const apiGetOrderList = () =>
  axiosInstance.get<ApiGetOrderListResponse>(`/order`);

/**
 * 2022/09/04 - 결제 정보 등록 - by 1-blue
 * @param body 결제 정보들
 * @returns 결과 메시지
 */
const apiCreateOrder = (body: ApiCreateOrderBody) =>
  axiosInstance.post<ApiCreateOrderResponse>(`/order`, body);

/**
 * 2022/09/04 - 결제 정보 관련 api 요청 객체 - by 1-blue
 */
const orderService = {
  apiGetOrderList,
  apiCreateOrder,
};

export default orderService;
