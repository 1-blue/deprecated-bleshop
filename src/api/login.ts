import { axiosInstance } from ".";

// type
import type { ApiLogInBody, ApiLogInResponse } from "@src/types";

export const apiLogIn = (body: ApiLogInBody) =>
  axiosInstance.post<ApiLogInResponse>(`/login`, body);
