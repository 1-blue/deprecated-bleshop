import { axiosInstance } from ".";

// type
import type { ApiGetKeywordsBody, ApiGetKeywordsResponse } from "@src/types";

/**
 * 2022/08/23 - 추천 키워드들 요청 - by 1-blue
 * @param body 키워드에 포함될 단어
 * @returns 추천 키워드들
 */
const apiGetKeywords = ({ word }: ApiGetKeywordsBody) =>
  axiosInstance.get<ApiGetKeywordsResponse>(`/keywords?word=${word}`);

/**
 * 2022/08/23 - 키워드 관련 api 요청 객체 - by 1-blue
 */
const keywordService = {
  apiGetKeywords,
};

export default keywordService;
