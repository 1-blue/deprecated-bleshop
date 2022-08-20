import { axiosInstance } from ".";

// type
import type {
  ApiCreateProductBody,
  ApiCreateProductResponse,
} from "@src/types";

/**
 * 2022/08/20 - 상품 등록 - by 1-blue
 * @param body 상품에 대한 데이터들
 * @returns 생성된 상품의 식별자
 */
const apiCreateProduct = (body: ApiCreateProductBody) =>
  axiosInstance.post<ApiCreateProductResponse>(`/product`, body);

/**
 * 2022/08/19 - 상품 관련 api 요청 객체 - by 1-blue
 */
const productService = {
  apiCreateProduct,
};

export default productService;
