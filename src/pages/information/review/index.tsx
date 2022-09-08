import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";

// api
import apiService from "@src/api";

// util
import { combineClassNames, dateOrTimeFormat } from "@src/libs";

// component
import HeadInfo from "@src/components/common/HeadInfo";
import Support from "@src/components/common/Support";
import Nav from "@src/components/common/Nav";
import Photo from "@src/components/common/Photo";
import Icon from "@src/components/common/Icon";
import Modal from "@src/components/common/Modal";
import Carousel from "@src/components/common/Carousel";

// type
import { ApiGetReviewsOfUserResponse } from "@src/types";

const Review = () => {
  const [reviews, setReviews] = useState<
    ApiGetReviewsOfUserResponse["reviews"]
  >([]);

  // 2022/09/08 - 유저의 모든 리뷰들 초기화 - by 1-blue
  useEffect(() => {
    (async () => {
      const {
        data: { reviews },
      } = await apiService.userService.apiGetReviews();

      setReviews(reviews);
    })();
  }, [setReviews]);

  // 2022/09/08 - 리뷰 제거 - by 1-blue
  const onDeleteReview = useCallback(
    (reviewIdx: number) => () => {
      if (
        !confirm(
          "리뷰를 제거하면 다시 작성하실 수 없습니다.\n그래도 진행하시겠습니까?"
        )
      ) {
        return;
      }

      apiService.reviewService
        .apiDeleteReview({ reviewIdx })
        .then(({ data: { message } }) => {
          // 브라우저에서 리뷰 제거하기
          setReviews((prev) =>
            prev.filter((review) => review.idx !== reviewIdx)
          );

          toast.success(message);
        })
        .catch((error) => {
          console.error(error);

          toast.error("알 수 없는 이유로 리뷰를 제거하는데 실패했습니다.");
        });
    },
    []
  );

  // 2022/09/08 - 리뷰의 이미지들 자세히 보기 모달 - by 1-blue
  const [showModal, setShowModal] = useState(false);
  // 2022/09/08 - 모달에서 보여줄 이미지들 - by 1-blue
  const [targetPhotos, setTargetPhotos] = useState<string[]>([]);
  // 2022/09/08 - 모달에서 보여줄 이미지들중에 보여지는 이미지 번호 - by 1-blue
  const [currentDot, setCurrentDot] = useState(0);

  return (
    <>
      <HeadInfo
        title="BleShop - 리뷰 관리"
        description="BleShop의 리뷰 관리 페이지입니다."
      />

      <article className="pt-4 space-y-4">
        <Nav.TitleNav title="돌아가기" />

        <Support.Background hasPadding className="space-y-2">
          <Support.SubTitle text={`작성한 리뷰들 ( ${reviews.length}개 )`} />

          {reviews.length === 0 && (
            <Support.Error text="** 작성한 리뷰가 없습니다. **" />
          )}

          <ul className="space-y-4">
            {reviews.map((review, i) => (
              <li key={review.idx}>
                <div className="flex justify-between">
                  {/* 상품 정보 */}
                  <Link href={`/product/${review.Product.idx}`}>
                    <a className="flex items-center space-x-2 mb-2 outline-blue-400 outline-offset-2">
                      <Photo
                        path={review.Product.photo}
                        className="w-14 h-14 xs:w-18 xs:h-18 sm:w-20 sm:h-20"
                        alt="상품 대표 이미지"
                        cover
                      />
                      <span className="sm:text-lg font-bolder">
                        {review.Product.name}
                      </span>
                    </a>
                  </Link>

                  {/* 리뷰 제거 버튼 */}
                  <button
                    type="button"
                    className="self-start py-1 px-1.5 text-[8px] sm:text-xs border border-blue-400 rounded-md text-blue-400 bg-white hover:bg-blue-400 hover:text-white focus:outline-none focus:bg-blue-400 focus:text-white transition-colors"
                    onClick={onDeleteReview(review.idx)}
                  >
                    리뷰 제거
                  </button>
                </div>

                <div className="flex items-center space-x-1 mb-2">
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

                {/* 리뷰 텍스트 */}
                <p className="text-sm sm:text-base whitespace-pre-wrap bg-gray-200 p-4">
                  {review.contents}
                </p>

                {reviews.length - 1 !== i && <hr className="my-4 border-2" />}
              </li>
            ))}
          </ul>

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
        </Support.Background>
      </article>
    </>
  );
};

export default Review;
