import { axiosInstance } from ".";

// type
import type {
  ApiCreateAddressBody,
  ApiCreateAddressResponse,
  // ApiGetAddressBody,
  ApiGetAddressResponse,
  ApiRemoveAddressBody,
  ApiRemoveAddressResponse,
  ApiUpdateAddressBody,
  ApiUpdateAddressResponse,
} from "@src/types";

export const apiCreateAddress = (body: ApiCreateAddressBody) =>
  axiosInstance.post<ApiCreateAddressResponse>(`/address`, body);

export const apiGetAddress = () =>
  axiosInstance.get<ApiGetAddressResponse>(`/address`);

export const apiRemoveAddress = (body: ApiRemoveAddressBody) =>
  axiosInstance.delete<ApiRemoveAddressResponse>(`/address?idx=${body.idx}`);

export const apiUpdateAddress = (body: ApiUpdateAddressBody) =>
  axiosInstance.put<ApiUpdateAddressResponse>(`/address`, body);
