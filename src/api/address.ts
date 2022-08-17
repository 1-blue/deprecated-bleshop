import { axiosInstance } from ".";

// type
import type {
  ApiCreateAddressBody,
  ApiCreateAddressResponse,
  // ApiGetAddressBody,
  ApiGetAddressResponse,
  // ApiGetAllAddressBody,
  ApiGetAllAddressResponse,
  ApiDeleteAddressBody,
  ApiDeleteAddressResponse,
  ApiUpdateAddressBody,
  ApiUpdateAddressResponse,
} from "@src/types";

/**
 * 2022/08/17 - 주소지 생성 요청 - by 1-blue
 * @param body 주소지를 생성하는데 필요한 데이터들 ( name, address, residence, phone, message, isDefault )
 * @returns 결과 메시지 ( message )
 */
const apiCreateAddress = (body: ApiCreateAddressBody) =>
  axiosInstance.post<ApiCreateAddressResponse>(`/address`, body);

/**
 * 2022/08/17 - 등록된 모든 주소지 요청 - by 1-blue
 * @returns 로그인한 유저의 등록된 모든 주소지 반환
 */
const apiGetAllAddress = () =>
  axiosInstance.get<ApiGetAllAddressResponse>(`/addresses`);

/**
 * 2022/08/17 - 기본 주소지 요청 - by 1-blue
 * @returns 결과 메시지와 기본 주소 or 최근 주소 or null 반환
 */
const apiGetAddress = () =>
  axiosInstance.get<ApiGetAddressResponse>(`/address`);

/**
 * 2022/08/17 - 특정 주소지 제거 - by 1-blue
 * @param body 제거할 주소의 식별자 ( idx )
 * @returns 결과 메시지 ( message )
 */
const apiDeleteAddress = (body: ApiDeleteAddressBody) =>
  axiosInstance.delete<ApiDeleteAddressResponse>(`/address?idx=${body.idx}`);

/**
 * 2022/08/17 - 특정 주소지 수정 - by 1-blue
 * @param body 수정할 주소의 식별자(idx)와 나머지 수정 데이터들 ( name, address, residence, phone, message, isDefault )
 * @returns 결과 메시지 ( message )
 */
const apiUpdateAddress = (body: ApiUpdateAddressBody) =>
  axiosInstance.put<ApiUpdateAddressResponse>(`/address`, body);

/**
 * 2022/08/17 - 주소 관련 api 요청 객체 - by 1-blue
 */
const addressService = {
  apiCreateAddress,
  apiGetAllAddress,
  apiGetAddress,
  apiDeleteAddress,
  apiUpdateAddress,
};

export default addressService;
