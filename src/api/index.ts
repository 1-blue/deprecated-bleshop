import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "/api",
  withCredentials: true,
  timeout: 10000,
});

// const myRequestInterceptor = axiosInstance.interceptors.request.use(
//   config => {
//     return config;
//   },
//   error => {
//     console.log("오류 요청을 보내기전 호출됨");
//     return Promise.reject(error);
//   },
// );

export {
  apiUploadPhoto,
  apiUpdateUserPhoto,
  apiRemoveUserPhoto,
  apiUploadPhotos,
} from "./photo";
export { apiSignUp } from "./signup";
export { apiLogIn } from "./login";
export { apiEditUser, apiEditUserPhoto } from "./user";
export {
  apiCreateAddress,
  apiGetAddress,
  apiRemoveAddress,
  apiUpdateAddress,
} from "./address";
