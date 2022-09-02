import { axiosInstance } from ".";

// type
import type {
  ApiCreateProductBody,
  ApiCreateProductResponse,
  // ApiGetBasketProductsBody,
  ApiGetBasketProductsResponse,
  ApiGetProductBody,
  ApiGetProductResponse,
  ApiGetProductsBody,
  ApiGetProductsByKeywordBody,
  ApiGetProductsByKeywordResponse,
  ApiGetProductsResponse,
  ApiGetRelatedProductsBody,
  ApiGetRelatedProductsResponse,
  ApiGetWishProductsBody,
  ApiGetWishProductsResponse,
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
 * 2022/08/25 - 특정 상품의 상세 정보 요청 - by 1-blue
 * @param productIdx 특정 상품의 식별자
 * @returns 특정 상품의 상세 정보 ( 연관 이미지들, 검색 키워드들 )
 */
const apiGetProduct = ({ productIdx }: ApiGetProductBody) =>
  axiosInstance.get<ApiGetProductResponse>(`/product?productIdx=${productIdx}`);

/**
 * 2022/08/26 - 특정 상품과 관련된 상품들 요청 - by 1-blue
 * @param 특정 상품의 식별자 ( productIdx ), 상품이 가진 키워드 ( keywords )
 * @returns 특정 상품과 연관된 상품들의 정보
 */
const apiGetRelatedProducts = ({
  lastIdx,
  limit,
  productIdx,
  keywords,
}: ApiGetRelatedProductsBody) =>
  axiosInstance.get<ApiGetRelatedProductsResponse>(
    `/products/related?lastIdx=${lastIdx}&limit=${limit}&productIdx=${productIdx}&keywords=${keywords}`
  );

/**
 * 2022/08/30 - 찜한 상품들 요청 - by 1-blue
 * @param 마지막 상품 식별자(lastIdx)와 요청 개수(limit)
 * @returns 로그인한 유저가 찜한 상품들
 */
const apiGetWishProducts = ({ lastIdx, limit }: ApiGetWishProductsBody) =>
  axiosInstance.get<ApiGetWishProductsResponse>(
    `/products/wish?lastIdx=${lastIdx}&limit=${limit}`
  );

/**
 * 2022/08/31 - 장바구니에 담긴 모든 상품들 요청 - by 1-blue
 * @returns 결과 메시지
 */
const apiGetBasketProducts = () =>
  axiosInstance.get<ApiGetBasketProductsResponse>(`/products/basket`);

/**
 * 2022/08/19 - 상품 관련 api 요청 객체 - by 1-blue
 */
const productService = {
  apiCreateProduct,
  apiGetProducts,
  apiGetProductsByKeyword,
  apiGetProduct,
  apiGetRelatedProducts,
  apiGetWishProducts,
  apiGetBasketProducts,
};

export default productService;
