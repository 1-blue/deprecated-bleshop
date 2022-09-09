import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_FRONT_URL + "/api",
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

import photoService from "./photo";
import authService from "./auth";
import userService from "./user";
import addressService from "./address";
import categoryService from "./category";
import productService from "./product";
import keywordService from "./keyword";
import filterService from "./filter";
import wishService from "./wish";
import basketService from "./basket";
import orderService from "./order";
import reviewService from "./review";

/**
 * 2022/08/17 - api요청 관련 메서드들을 가진 객체 - by 1-blue
 */
const apiService = {
  photoService,
  authService,
  userService,
  addressService,
  categoryService,
  productService,
  keywordService,
  filterService,
  wishService,
  basketService,
  orderService,
  reviewService,
};

export default apiService;
