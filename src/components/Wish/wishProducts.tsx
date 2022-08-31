import React, { useCallback, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import Link from "next/link";
import { toast } from "react-toastify";

// api
import apiService from "@src/api";

// util
import {
  dateOrTimeFormat,
  numberWithComma,
  sliceLineOfString,
} from "@src/libs";

// state
import stateService from "@src/states";

// component
import Photo from "@src/components/common/Photo";
import Tool from "@src/components/common/Tool";

// type
import type { LIMIT } from "@src/types";
import { AxiosError } from "axios";

const limit: LIMIT = 15;

const WishProducts = () => {
  // 2022/08/30 - 화면에 랜더링할 찜한 상품들 - by 1-blue
  const [wishProducts, setWishProducts] = useRecoilState(
    stateService.wishService.wishProductsState
  );
  // 2022/08/30 - 가장 최근에 요청한 상품의 마지막 식별자 ( 해당 식별자를 기준으로 다음 상품들의 데이터를 요청 ) - by 1-blue
  const [productLastIdx, setProductLastIdx] = useRecoilState(
    stateService.wishService.wishProductsLastIdxState
  );
  // 2022/08/30 - 마지막 상품의 ref - by 1-blue
  const [lastProductRef, setLastProductRef] = useState<HTMLLIElement | null>(
    null
  );

  // 2022/08/30 - 처음 한번 연관된 상품들의 데이터 요청 - by 1-blue
  useEffect(() => {
    (async () => {
      // 이전에 상품 데이터들을 받아왔을 경우를 대비해서 미리 초기화
      setProductLastIdx(-1);

      try {
        const {
          data: { products },
        } = await apiService.productService.apiGetWishProducts({
          limit,
          lastIdx: -1,
        });

        setWishProducts(products);
      } catch (error) {
        console.error(error);

        if (error instanceof AxiosError) {
          toast.error(error.response?.data.message);
        } else {
          toast.error("알 수 없는 에러가 발생했습니다.");
        }
      }
    })();
  }, [setWishProducts, setProductLastIdx]);

  // 2022/08/30 - observer로 인해 실행할 이벤트 함수 ( 제일 마지막 상품이 뷰포트에 들어오면 실행할 이벤트 함수 ) - by 1-blue
  const onScroll = useCallback(
    async ([{ isIntersecting }]: IntersectionObserverEntry[]) => {
      if (!lastProductRef) return;

      // 지정한 엘리먼트가 "threshold"만큼을 제외하고 뷰포트에 들어왔다면 실행
      if (isIntersecting) {
        try {
          const {
            data: { products },
          } = await apiService.productService.apiGetWishProducts({
            limit,
            lastIdx: productLastIdx,
          });

          setWishProducts((prev) => [...prev, ...products]);
        } catch (error) {
          console.error(error);

          if (error instanceof AxiosError) {
            toast.error(error.response?.data.message);
          } else {
            toast.error("알 수 없는 에러가 발생했습니다.");
          }
        }
      }
    },
    [lastProductRef, productLastIdx, setWishProducts]
  );

  // 2022/08/30 - observer 등록 ( 제일 마지막 상품이 뷰포트에 들어오면 실행할 이벤트 함수를 등록 ) - by 1-blue
  useEffect(() => {
    if (!lastProductRef) return;
    if (wishProducts.length % limit !== 0) return;

    let observer = new IntersectionObserver(onScroll, {
      threshold: 0.1,
      rootMargin: "20px",
    });
    observer.observe(lastProductRef);

    return () => observer?.disconnect();
  }, [lastProductRef, onScroll, wishProducts]);

  // 2022/08/30 - 현재 브라우저 가로 길이 구하기 - by 1-blue
  const [width, setWidth] = useState(0);
  const onResizeWidth = useCallback(() => setWidth(window.innerWidth), []);
  useEffect(() => {
    onResizeWidth();
    window.addEventListener("resize", onResizeWidth);

    return () => window.removeEventListener("resize", onResizeWidth);
  }, [onResizeWidth]);

  // 2022/08/30 - 찜한 상품에서 제거 - by 1-blue
  const onDeleteWishProduct = useCallback(
    (productIdx: number) => async () => {
      try {
        const {
          data: { message },
        } = await apiService.wishService.apiDeleteWish({ productIdx });

        setWishProducts((prev) =>
          prev.filter((product) => product.idx !== productIdx)
        );

        toast.success(message);
      } catch (error) {
        console.error(error);

        if (error instanceof AxiosError) {
          toast.error(error.response?.data.message);
        } else {
          toast.error("알 수 없는 오류입니다.");
        }
      }
    },
    [setWishProducts]
  );

  return (
    <>
      {wishProducts.length === 0 ? (
        <h3>조건에 맞는 상품이 없습니다.</h3>
      ) : (
        <ul className="space-y-2 sm:space-y-4">
          {wishProducts.map((wishProduct, i) => (
            <li
              key={wishProduct.idx}
              className="group relative flex flex-col shadow-lg rounded-md bg-gray-100 overflow-hidden hover:overflow-visible"
              ref={(e) =>
                wishProducts.length === i + 1 ? setLastProductRef(e) : null
              }
            >
              <Link href={`/product/${wishProduct.idx}`}>
                <a
                  className="p-2 space-x-4 flex h-full rounded-md bg-white border-4 border-transparent z-[2] group-hover:border-gray-400 focus:outline-blue-400 focus:outline-4"
                  onClick={(e) => {
                    const target = e.target as HTMLElement;

                    if (target.nodeName === "BUTTON") e.preventDefault();
                  }}
                >
                  <Photo
                    path={wishProduct.photo}
                    cover
                    className="flex-shrink-0 w-[120px] h-[120px] sm:w-[160px] sm:h-[160px]"
                  />
                  <div className="flex-1 flex flex-col space-y-1">
                    <h3 className="font-bolder sm:text-lg">
                      {wishProduct.name}
                    </h3>
                    <p className="flex-1 whitespace-pre-wrap overflow-hidden text-ellipsis text-xs">
                      {sliceLineOfString(
                        wishProduct.description,
                        width > 638 ? 4 : 2
                      ).slice(0, width > 638 ? 200 : 60)}
                    </p>
                    <div className="flex justify-between">
                      <span className="text-xs sm:text-sm font-bold">
                        {numberWithComma(wishProduct.price)}원
                      </span>
                      <time className="text-[8px] sm:text-xs text-gray-400">
                        {dateOrTimeFormat(
                          wishProduct.updatedAt,
                          "YYYY-MM-DD-hh-mm-ss"
                        )}
                      </time>
                    </div>

                    <div className="self-end space-x-2">
                      <Tool.Button
                        type="button"
                        text="삭제"
                        className="text-[8px] sm:text-xs px-1 sm:px-2 py-[2px] sm:py-1 border border-gray-400 text-gray-500 font-bold rounded-sm"
                        onClick={onDeleteWishProduct(wishProduct.idx)}
                      />
                      <Tool.Button
                        type="button"
                        text="장바구니 담기"
                        className="text-[8px] sm:text-xs px-1 sm:px-2 py-[2px] sm:py-1 border border-blue-500 text-blue-500 font-bold rounded-sm"
                      />
                    </div>
                  </div>
                </a>
              </Link>

              {/* ping 애니메이션을 위함 */}
              <div className="absolute top-0 left-0 w-full h-full rounded-md bg-gray-400 -z-10 group-hover:animate-my-ping group-hover:z-[1]" />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default React.memo(WishProducts);
