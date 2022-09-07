import { atom, selector } from "recoil";

// type
import type { ApiGetReviewsResponse, InformationAboutReview } from "@src/types";

/**
 * 2022/09/07 - 현재 상품의 리뷰들 - by 1-blue
 */
export const reviewsState = atom<ApiGetReviewsResponse["reviews"]>({
  key: "reviewsState",
  default: [],
});

/**
 * 2022/09/07 - 현재 상품의 리뷰들 마지막 상품의 식별자 - by 1-blue
 */
export const reviewsLastIdxState = selector<number>({
  key: "reviewsLastIdxState",
  get: ({ get }) => {
    const reviews = get(reviewsState);

    if (reviews.length === 0) return -1;

    return reviews[reviews.length - 1].idx;
  },
  set: ({ set }) => {
    set(reviewsState, []);
  },
});

/**
 * 2022/09/07 - 리뷰를 작성할 때 사용할 정보 - by 1-blue
 */
export const informationAboutReviewState = atom<null | InformationAboutReview>({
  key: "informationAboutReviewState",
  default: null,
});

/**
 * 2022/09/07 - 리뷰들의 states 객체 - by 1-blue
 */
const productService = {
  reviewsState,
  reviewsLastIdxState,
  informationAboutReviewState,
};

export default productService;
