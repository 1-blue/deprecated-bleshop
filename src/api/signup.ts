import { axiosInstance } from ".";

// type
import type { ApiSignUpBody, ApiSignUpResponse } from "@src/types";

export const apiSignUp = (body: ApiSignUpBody) =>
  axiosInstance.post<ApiSignUpResponse>(`/signup`, body);
