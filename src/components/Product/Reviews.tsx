import { useCallback } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

// api
import apiService from "@src/api";

// state
import stateService from "@src/states";

// util
import { combineClassNames, dateOrTimeFormat } from "@src/libs";

// component
import Photo from "@src/components/common/Photo";
import Icon from "@src/components/common/Icon";
import Tool from "@src/components/common/Tool";

// type
import { LIMIT } from "@src/types";

const limit: LIMIT = 15;

type Props = {
  productIdx: number;
};

const Reviews = ({ productIdx }: Props) => {
  // 2022/09/07 - 현재 상품의 리뷰들 - by 1-blue
  const [reviews, setReviews] = useRecoilState(
    stateService.reviewService.reviewsState
  );
  // 2022/09/07 - 마지막 리뷰의 식별자 - by 1-blue
  const lastReviewIdx = useRecoilValue(
    stateService.reviewService.reviewsLastIdxState
  );

  // 2022/09/07 - 리뷰 추가 패치 - by 1-blue
  const onFetchReview = useCallback(async () => {
    try {
      const {
        data: { reviews },
      } = await apiService.reviewService.apiGetReviews({
        lastIdx: lastReviewIdx,
        limit,
        productIdx,
      });

      setReviews((prev) => [...prev, ...reviews]);
    } catch (error) {
      console.error(error);
    }
  }, [lastReviewIdx, productIdx, setReviews]);

  return (
    <ul>
      {reviews.map((review, i) => (
        <li key={review.idx}>
          <div className="flex space-x-2 mb-2">
            <Photo
              path={review.User.photo}
              className="w-16 h-16 sm:w-20 sm:h-20 cursor-pointer"
              alt="상품 대표 이미지"
              cover
              avatar
            />
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-bold">
                {review.User.name}
              </span>
              <div className="flex">
                {Array(5)
                  .fill(null)
                  .map((_, i) => (
                    <Icon
                      key={i + 1}
                      shape="star"
                      fill
                      className={combineClassNames(
                        "w-5 h-5 sm:w-6 sm:h-6",
                        review.score >= i + 1
                          ? "text-yellow-400"
                          : "text-gray-400"
                      )}
                    />
                  ))}
              </div>
              <time className="text-[8px] sm:text-xs text-gray-400">
                {dateOrTimeFormat(review.updatedAt, "YYYY-MM<-DD")}
              </time>
            </div>
          </div>

          <p className="text-sm sm:text-base whitespace-pre-wrap">
            {review.contents}
          </p>

          {reviews.length - 1 !== i && <hr className="my-4 border-2" />}
        </li>
      ))}

      {/* 리뷰 추가 패치 버튼 */}
      {reviews.length % 2 === 0 && (
        <Tool.Button
          type="button"
          text="리뷰 더 불러오기"
          primary
          onClick={onFetchReview}
          className="w-full mt-6"
        />
      )}
    </ul>
  );
};

export default Reviews;
