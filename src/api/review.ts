import { axiosInstance } from ".";

// type
import type {
  ApiCreateReviewBody,
  ApiCreateReviewResponse,
  ApiDeleteReviewBody,
  ApiDeleteReviewResponse,
  ApiGetReviewsBody,
  ApiGetReviewsResponse,
} from "@src/types";

/**
 * 2022/09/07 - 특정 상품의 리뷰들 요청 - by 1-blue
 * @param body 리뷰의 마지막 식별자, 요청 개수, 요청 상품 식별자
 * @returns 결과 메시지
 */
const apiGetReviews = ({ lastIdx, limit, productIdx }: ApiGetReviewsBody) =>
  axiosInstance.get<ApiGetReviewsResponse>(
    `/review?lastIdx=${lastIdx}&limit=${limit}&productIdx=${productIdx}`
  );

/**
 * 2022/09/07 - 리뷰 생성 요청 - by 1-blue
 * @param body 내용, 점수, 상품 식별자, 이미지들
 * @returns 결과 메시지
 */
const apiCreateReview = (body: ApiCreateReviewBody) =>
  axiosInstance.post<ApiCreateReviewResponse>(`/review`, body);

/**
 * 2022/09/07 - 리뷰 제거 요청 - by 1-blue
 * @param productIdx 상품 식별자
 * @returns 결과 메시지
 */
const apiDeleteReview = ({ reviewIdx }: ApiDeleteReviewBody) =>
  axiosInstance.delete<ApiDeleteReviewResponse>(
    `/review?reviewIdx=${reviewIdx}`
  );

/**
 * 2022/09/07 - 리뷰 관련 api 요청 객체 - by 1-blue
 */
const reviewService = {
  apiGetReviews,
  apiCreateReview,
  apiDeleteReview,
};

export default reviewService;
