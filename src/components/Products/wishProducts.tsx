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
import Support from "@src/components/common/Support";

// type
import type { Wish } from "@prisma/client";
import { AxiosError } from "axios";

const WishProducts = () => {
  // 2022/08/30 - 화면에 랜더링할 찜한 상품들 - by 1-blue
  const [wishProducts, setWishProducts] = useRecoilState(
    stateService.wishService.wishProductsState
  );

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
          prev.filter((wishProduct) => wishProduct.productIdx !== productIdx)
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

  // 2022/09/01 - 찜한 상품 장바구니로 옮기기 - by 1-blue
  const onMoveBasket = useCallback(
    ({ productIdx, color, size, quantity }: Wish) =>
      async () => {
        try {
          const {
            data: { message },
          } = await apiService.basketService.apiCreateBasket({
            productIdx,
            color,
            size,
            quantity,
          });

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
    []
  );

  return (
    <>
      {wishProducts.length === 0 ? (
        <Support.Error text="조건에 맞는 상품이 없습니다." />
      ) : (
        <ul className="space-y-2 sm:space-y-4">
          {wishProducts.map((wishProduct, i) => (
            <li
              key={wishProduct.productIdx}
              className="group relative flex flex-col shadow-lg rounded-md bg-gray-100 overflow-hidden hover:overflow-visible"
            >
              <Link href={`/product/${wishProduct.productIdx}`}>
                <a
                  className="p-2 space-x-4 flex h-full rounded-md bg-white border-4 border-transparent z-[2] group-hover:border-gray-400 focus:outline-blue-500"
                  onClick={(e) => {
                    const target = e.target as HTMLElement;

                    if (target.nodeName === "BUTTON") e.preventDefault();
                  }}
                >
                  <Photo
                    path={wishProduct.product.photo}
                    cover
                    className="flex-shrink-0 w-[120px] h-[120px] sm:w-[160px] sm:h-[160px]"
                  />
                  <div className="flex-1 flex flex-col space-y-1">
                    <h3 className="font-bolder sm:text-lg">
                      {wishProduct.product.name}
                    </h3>
                    <p className="flex-1 whitespace-pre-wrap overflow-hidden text-ellipsis text-xs">
                      {sliceLineOfString(
                        wishProduct.product.description,
                        width > 638 ? 4 : 2
                      ).slice(0, width > 638 ? 200 : 60)}
                    </p>
                    <div className="flex justify-between">
                      <span className="text-xs sm:text-sm font-bold">
                        {numberWithComma(wishProduct.product.price)}원
                      </span>
                      <time className="text-[8px] sm:text-xs text-gray-400">
                        {dateOrTimeFormat(
                          wishProduct.product.updatedAt,
                          "YYYY-MM-DD-hh-mm-ss"
                        )}
                      </time>
                    </div>

                    <div className="self-end space-x-2">
                      <Tool.Button
                        type="button"
                        text="삭제"
                        className="text-[8px] sm:text-xs px-1 sm:px-2 py-[2px] sm:py-1 border border-gray-400 text-gray-500 font-bold rounded-sm hover:bg-gray-400 hover:text-white focus:outline-none focus:bg-gray-400 focus:text-white transition-colors"
                        onClick={onDeleteWishProduct(wishProduct.productIdx)}
                      />
                      <Tool.Button
                        type="button"
                        text="장바구니 담기"
                        className="text-[8px] sm:text-xs px-1 sm:px-2 py-[2px] sm:py-1 border border-blue-500 text-blue-500 font-bold rounded-sm hover:bg-blue-500 hover:text-white focus:outline-none focus:bg-blue-500 focus:text-white  transition-colors"
                        onClick={onMoveBasket(wishProduct)}
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
