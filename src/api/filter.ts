import { axiosInstance } from ".";

// type
import type { ApiGetFiltersResponse } from "@src/types";

/**
 * 2022/08/24 - 모든 필터들 요청 - by 1-blue
 * @returns 등록된 모든 필터들
 */
const apiGetFilters = () => axiosInstance.get<ApiGetFiltersResponse>(`/filter`);

/**
 * 2022/08/24 - 필터 관련 api 요청 객체 - by 1-blue
 */
const filterService = {
  apiGetFilters,
};

export default filterService;
