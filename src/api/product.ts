import { axiosInstance } from ".";

// type
import type {
  ApiCreateProductBody,
  ApiCreateProductResponse,
  ApiGetProductsBody,
  ApiGetProductsByKeywordBody,
  ApiGetProductsByKeywordResponse,
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
 * @param 요청 개수(limit)와 마지막 상품 식별자(lastIdx), 선택한 카테고리와 선택한 필터링
 * @returns
 */
const apiGetProducts = ({
  limit,
  lastIdx,
  selectedCategory,
  selectedFilters,
}: ApiGetProductsBody) => {
  let requestUrl = `/products?limit=${limit}&lastIdx=${lastIdx}`;
  requestUrl += selectedCategory ? `&selectedCategory=${selectedCategory}` : "";
  requestUrl += selectedFilters ? `&selectedFilters=${selectedFilters}` : "";

  return axiosInstance.get<ApiGetProductsResponse>(requestUrl);
};

/**
 * 2022/08/23 - 특정 키워드를 가진 상품들 요청 - by 1-blue
 * @param 요청 개수(limit)와 마지막 상품 식별자(lastIdx), 검색 키워드, 선택한 카테고리와 선택한 필터링
 * @returns
 */
const apiGetProductsByKeyword = ({
  limit,
  lastIdx,
  keyword,
  selectedCategory,
  selectedFilters,
}: ApiGetProductsByKeywordBody) => {
  let requestUrl = `/products?limit=${limit}&lastIdx=${lastIdx}&keyword=${keyword}`;
  requestUrl += selectedCategory ? `&selectedCategory=${selectedCategory}` : "";
  requestUrl += selectedFilters ? `&selectedFilters=${selectedFilters}` : "";

  return axiosInstance.get<ApiGetProductsByKeywordResponse>(requestUrl);
};

/**
 * 2022/08/19 - 상품 관련 api 요청 객체 - by 1-blue
 */
const productService = {
  apiCreateProduct,
  apiGetProducts,
  apiGetProductsByKeyword,
};

export default productService;
