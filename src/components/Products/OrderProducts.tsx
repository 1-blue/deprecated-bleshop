import { useCallback, useState } from "react";
import Link from "next/link";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

// api
import apiService from "@src/api";

// state
import stateService from "@src/states";

// util
import { addSeparatorToPhone, dateFormat, numberWithComma } from "@src/libs";

// component
import Support from "@src/components/common/Support";
import Photo from "@src/components/common/Photo";
import Icon from "@src/components/common/Icon";
import Modal from "@src/components/common/Modal";

// type
import type { InformationAboutReview } from "@src/types";
import { AxiosError } from "axios";

const OrderProducts = () => {
  const router = useRouter();
  const orderList = useRecoilValue(stateService.orderService.orderListState);

  // 2022/09/05 - 결제 내역 삭제 모달 - by 1-blue
  const [isShowModal, setIsShowModal] = useState(false);

  // 2022/09/05 - 삭제할 결제 내역의 식별자 - by 1-blue
  const [targetOrderIdx, setTargetOrderIdx] = useState<number | null>(null);

  // 2022/09/05 - 결제 내역 옵션 버튼 클릭 ( 모달 띄우고, 식별자 기록 ) - by 1-blue
  const onClickOption = useCallback(
    (orderIdx: number) => () => {
      setIsShowModal(true);
      setTargetOrderIdx(orderIdx);
    },
    [setIsShowModal, setTargetOrderIdx]
  );

  // 2022/09/05 - 결제 내역 제거 - by 1-blue
  const onDeleteOrder = useCallback(async () => {
    if (typeof targetOrderIdx !== "number")
      return toast.warning("알 수 없는 요청입니다.");

    const toastId = toast.loading("주문을 삭제하는 중입니다.");
    try {
      const {
        data: { message },
      } = await apiService.orderService.apiDeleteOrder({
        orderIdx: targetOrderIdx,
      });

      toast.update(toastId, {
        render: message,
        type: "success",
        isLoading: false,
      });
    } catch (error) {
      console.error(error);

      if (error instanceof AxiosError) {
        toast.update(toastId, {
          render: error.response?.data.message,
          type: "error",
          isLoading: false,
          autoClose: 1500,
        });
      } else {
        toast.update(toastId, {
          render: "알 수 없는 에러가 발생했습니다.",
          type: "error",
          isLoading: false,
          autoClose: 1500,
        });
      }
    } finally {
      setIsShowModal(false);
    }
  }, [targetOrderIdx, setIsShowModal]);

  // 2022/09/07 - 리뷰를 작성할 상품의 정보 입력 함수 - by 1-blue
  const setTargetProduct = useSetRecoilState(
    stateService.reviewService.informationAboutReviewState
  );

  // 2022/09/07 - 리뷰 작성 클릭 - by 1-blue
  const onClickWriteReview = useCallback(
    (body: InformationAboutReview) => () => {
      // 리뷰를 작성할 상품의 정보 저장
      setTargetProduct(body);

      // 리뷰 페이지로 이동
      router.push("/review");
    },
    [setTargetProduct, router]
  );

  return (
    <>
      {orderList.length === 0 ? (
        <Support.Error text="** 주문 내역이 없습니다. **" />
      ) : (
        // 주문들
        <ul className="space-y-4">
          {orderList.map((order) => (
            <li key={order.idx}>
              <Support.Background hasPadding className="relative">
                <div className="px-3 text-sm sm:text-base font-bold">
                  <time>{dateFormat(order.updatedAt, "YYYY/MM/DD")}</time>
                  <span> - </span>
                  <time>{dateFormat(order.updatedAt, "hh시mm분")}</time>
                  <span> 주문</span>
                </div>

                <button
                  type="button"
                  className="absolute top-3 right-2"
                  onClick={onClickOption(order.idx)}
                >
                  <Icon shape="verticalDotDotDot" className="w-6 h-6" />
                </button>

                {/* 주문의 상품들 */}
                <ul>
                  {order.products.map((product) => (
                    <li key={"" + product.productIdx + product.orderIdx}>
                      <Link href={`/product/${product.productIdx}`}>
                        <a
                          className="p-2 space-x-4 flex h-full rounded-md bg-white border-4 border-transparent z-[2] group-hover:border-gray-400 focus:outline-blue-500"
                          onClick={(e) => {
                            const target = e.target as HTMLElement;

                            if (target.nodeName === "BUTTON") {
                              e.preventDefault();
                            }
                          }}
                        >
                          <Photo
                            path={product.product.photo}
                            cover
                            className="flex-shrink-0 w-[120px] h-[120px] sm:w-[160px] sm:h-[160px]"
                          />
                          <div className="flex-1 flex flex-col">
                            <div className="flex justify-between">
                              <span className="font-bolder sm:text-lg">
                                {product.product.name}
                              </span>

                              {product.isReview ? (
                                <button
                                  type="button"
                                  className="text-[8px] sm:text-xs hover:underline hover:underline-offset-2"
                                  onClick={() =>
                                    router.push("/information/review")
                                  }
                                >
                                  리뷰 관리로 이동
                                </button>
                              ) : (
                                <button
                                  type="button"
                                  className="py-1 px-1.5 text-[8px] sm:text-xs border border-blue-400 rounded-md text-blue-400 bg-white hover:bg-blue-400 hover:text-white focus:outline-none focus:bg-blue-400 focus:text-white transition-colors"
                                  onClick={onClickWriteReview({
                                    name: product.product.name,
                                    photo: product.product.photo,
                                    productIdx: product.productIdx,
                                    orderIdx: product.orderIdx,
                                  })}
                                >
                                  리뷰 작성
                                </button>
                              )}
                            </div>

                            <div className="flex-1" />

                            {/* 결제 정보 */}
                            <ul>
                              <li className="flex justify-between">
                                <span className="text-sm sm:text-base font-bold">
                                  상품 가격
                                </span>
                                <span className="text-sm sm:text-base">
                                  {numberWithComma(product.product.price)}원
                                </span>
                              </li>
                              <li className="flex justify-between">
                                <span className="text-sm sm:text-base font-bold">
                                  구매 개수
                                </span>
                                <span className="text-sm sm:text-base">
                                  {product.quantity}개
                                </span>
                              </li>

                              <hr className="my-1" />
                              <li className="flex justify-between font-bold">
                                <span className="text-sm sm:text-base">
                                  상품 결제금액
                                </span>
                                <span className="text-sm sm:text-base">
                                  {numberWithComma(
                                    product.product.price * product.quantity
                                  )}
                                  원
                                </span>
                              </li>
                            </ul>
                          </div>
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* 해당 주문의 공통 정보 */}
                <div className="p-2">
                  <hr className="border-gray-300 my-2 border-2" />
                  <li className="mb-1">
                    <span className="font-bolder sm:text-lg">결제 정보</span>
                  </li>
                  <div className="flex justify-between">
                    <span className="text-sm sm:text-base font-bold">
                      결제 방법
                    </span>
                    <span className="text-sm sm:text-base">
                      {order.provider}
                    </span>
                  </div>
                  <div className="flex justify-between font-bold">
                    <span className="text-sm sm:text-base font-bold">
                      총 결제금액
                    </span>
                    <span className="text-sm sm:text-base">
                      {numberWithComma(order.amount)}원
                    </span>
                  </div>
                </div>

                {/* 배송지 정보 */}
                <ul className="px-2">
                  <hr className="border-gray-300 my-2 border-2" />
                  <li className="mb-1">
                    <span className="font-bolder sm:text-lg">배송지 정보</span>
                  </li>
                  <li>
                    <span className="text-sm sm:text-base font-bold">
                      {order.name}
                    </span>
                  </li>
                  <li>
                    <span className="text-sm sm:text-base">
                      {order.address}
                    </span>
                  </li>
                  <li>
                    <span className="text-sm sm:text-base">
                      {order.residence}
                    </span>
                  </li>
                  <li>
                    <span className="text-sm sm:text-base">
                      {addSeparatorToPhone(order.phone)}
                    </span>
                  </li>
                  <hr className="my-1" />
                  <li>
                    <span className="text-sm sm:text-base">
                      배송 요청 사항: {order.message}
                    </span>
                  </li>
                </ul>
              </Support.Background>
            </li>
          ))}

          {isShowModal && (
            <Modal
              title="상품 주문 내역 관리"
              onCloseModal={() => setIsShowModal(false)}
              className="max-w-[500px] min-w-[250px]"
            >
              <Support.Background className="flex flex-col divide-y">
                <button
                  type="button"
                  className="py-2 text-xs xs:text-sm md:text-base hover:bg-gray-300 transition-colors"
                  onClick={onDeleteOrder}
                >
                  주문내역 삭제
                </button>
                <button
                  type="button"
                  className="py-2 text-xs xs:text-sm md:text-base hover:bg-gray-300 transition-colors"
                  onClick={() => setIsShowModal(false)}
                >
                  닫기
                </button>
              </Support.Background>
            </Modal>
          )}
        </ul>
      )}
    </>
  );
};

export default OrderProducts;
