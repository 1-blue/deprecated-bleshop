import { useCallback, useState } from "react";
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
import Support from "@src/components/common/Support";
import Modal from "@src/components/common/Modal";
import Carousel from "@src/components/common/Carousel";

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
      } = await apiService.productService.apiGetReviews({
        lastIdx: lastReviewIdx,
        limit,
        productIdx,
      });

      setReviews((prev) => [...prev, ...reviews]);
    } catch (error) {
      console.error(error);
    }
  }, [lastReviewIdx, productIdx, setReviews]);

  // 2022/09/08 - 리뷰의 이미지들 자세히 보기 모달 - by 1-blue
  const [showModal, setShowModal] = useState(false);
  // 2022/09/08 - 모달에서 보여줄 이미지들 - by 1-blue
  const [targetPhotos, setTargetPhotos] = useState<string[]>([]);
  // 2022/09/08 - 모달에서 보여줄 이미지들중에 보여지는 이미지 번호 - by 1-blue
  const [currentDot, setCurrentDot] = useState(0);

  if (reviews.length === 0)
    return <Support.Error text="** 등록된 리뷰가 없습니다. **" />;

  return (
    <ul>
      {reviews.map((review, i) => (
        <li key={review.idx}>
          <div className="flex space-x-2 mb-2">
            <Photo
              path={review.User.photo}
              className="w-16 h-16 sm:w-20 sm:h-20 cursor-pointer"
              alt="유저 이미지"
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

          {/* 리뷰 이미지들 */}
          {review.photos.length >= 1 && (
            <ul
              className="flex space-x-1 mb-2 cursor-pointer focus:outline-blue-400 focus:outline-offset-2"
              onClick={() => {
                setTargetPhotos(review.photos.map((photo) => photo.path));
                setShowModal(true);
              }}
              tabIndex={0}
            >
              {review.photos.map((photo) => (
                <li key={photo.path}>
                  <Photo
                    path={photo.path}
                    className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16"
                    alt="상품 대표 이미지"
                    cover
                  />
                </li>
              ))}
            </ul>
          )}

          <p className="text-sm sm:text-base whitespace-pre-wrap">
            {review.contents}
          </p>

          {reviews.length - 1 !== i && <hr className="my-4 border-2" />}
        </li>
      ))}

      {/* 리뷰 이미지들 자세히 보기 모달 */}
      {showModal && (
        <Modal onCloseModal={() => setShowModal(false)}>
          <Carousel
            currentDot={currentDot}
            setCurrentDot={setCurrentDot}
            className="overflow-hidden"
          >
            {targetPhotos.map((photo) => (
              <Photo
                key={photo}
                path={photo}
                className="w-full h-[30vh] xs:h-[40vh] sm:h-[60vh] md:h-[80vh]"
                alt="리뷰 이미지"
                contain
              />
            ))}
          </Carousel>
        </Modal>
      )}

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
