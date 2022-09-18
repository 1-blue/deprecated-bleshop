import { axiosInstance } from ".";

// type
import type { ApiGetCategoryResponse } from "@src/types";

/**
 * 2022/08/18 - 모든 카테고리 요청 - by 1-blue
 * @returns 등록된 모든 카테고리
 */
const apiGetCategory = () =>
  axiosInstance.get<ApiGetCategoryResponse>(`/category`);

/**
 * 2022/08/18 - 카테고리 관련 api 요청 객체 - by 1-blue
 */
const categoryService = {
  apiGetCategory,
};

export default categoryService;
