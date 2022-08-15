import { axiosInstance } from ".";

// type
import type {
  ApiEditUserBody,
  ApiEditUserPhotoBody,
  ApiEditUserPhotoResponse,
  ApiEditUserResponse,
} from "@src/types";

export const apiEditUser = (body: ApiEditUserBody) =>
  axiosInstance.put<ApiEditUserResponse>(`/user`, body);

export const apiEditUserPhoto = (body: ApiEditUserPhotoBody) =>
  axiosInstance.put<ApiEditUserPhotoResponse>(`/user`, body);
