import { axiosInstance } from ".";

// type
import type {
  ApiCreateProductBody,
  ApiCreateProductResponse,
  ApiGetProductsBody,
  ApiGetProductsResponse,
} from "@src/types";

/**
 * 2022/08/20 - 상품 등록 - by 1-blue
 * @param body 상품에 대한 데이터들
 * @returns 생성된 상품의 식별자
 */
const apiCreateProduct = (body: ApiCreateProductBody) =>
  axiosInstance.post<ApiCreateProductResponse>(`/product`, body);

/**
 * 2022/08/21 - 상품들 요청 - by 1-blue
 * @param 요청 개수(limit)와 마지막 상품 식별자(lastIdx)
 * @returns
 */
const apiGetProducts = ({ limit, lastIdx }: ApiGetProductsBody) =>
  axiosInstance.get<ApiGetProductsResponse>(
    `/products?limit=${limit}&lastIdx=${lastIdx}`
  );

/**
 * 2022/08/19 - 상품 관련 api 요청 객체 - by 1-blue
 */
const productService = {
  apiCreateProduct,
  apiGetProducts,
};

export default productService;
