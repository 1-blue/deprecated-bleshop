import React, { useCallback } from "react";
import { useRecoilState } from "recoil";
import Link from "next/link";
import { toast } from "react-toastify";

// api
import apiService from "@src/api";

// util
import {
  combineClassNames,
  dateOrTimeFormat,
  numberWithComma,
} from "@src/libs";

// state
import stateService from "@src/states";

// component
import Photo from "@src/components/common/Photo";
import Tool from "@src/components/common/Tool";
import Support from "@src/components/common/Support";

// type
import { AxiosError } from "axios";

const BasketProducts = () => {
  // 2022/09/01 - 장바구니 상품들 - by 1-blue
  const [basketProducts, setBasketProducts] = useRecoilState(
    stateService.basketService.basketProductsState
  );

  // 2022/09/01 - 장바구니 상품에서 제거 - by 1-blue
  const onDeleteBasketProduct = useCallback(
    (productIdx: number) => async () => {
      try {
        const {
          data: { message },
        } = await apiService.basketService.apiDeleteBasket({ productIdx });

        setBasketProducts((prev) =>
          prev.filter((product) => product.productIdx !== productIdx)
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
    [setBasketProducts]
  );

  // 2022/09/01 - "수량 +/-"" 버튼 클릭 - by 1-blue
  const onUpdateQuantity = useCallback(
    (productIdx: number, quantity: number) => async () => {
      if (quantity <= 0)
        return toast.warn("0개 이하의 제품은 주문할 수 없습니다.");

      try {
        await apiService.basketService.apiUpdateBasket({
          productIdx,
          quantity,
        });

        setBasketProducts((prev) =>
          prev.map((product) => {
            if (product.productIdx !== productIdx) return product;

            return { ...product, quantity };
          })
        );
      } catch (error) {
        console.error(error);

        if (error instanceof AxiosError) {
          toast.error(error.response?.data.message);
        } else {
          toast.error("알 수 없는 오류입니다.");
        }
      }
    },
    [setBasketProducts]
  );

  // 2022/09/01 - 스킵 버튼 클릭 - by 1-blue
  const onUpdateSkip = useCallback(
    (productIdx: number, skip: boolean) => async () => {
      try {
        await apiService.basketService.apiUpdateBasket({
          productIdx,
          skip,
        });

        setBasketProducts((prev) =>
          prev.map((product) => {
            if (product.productIdx !== productIdx) return product;

            return { ...product, skip };
          })
        );
      } catch (error) {
        console.error(error);

        if (error instanceof AxiosError) {
          toast.error(error.response?.data.message);
        } else {
          toast.error("알 수 없는 오류입니다.");
        }
      }
    },
    [setBasketProducts]
  );

  return (
    <>
      {basketProducts.length === 0 ? (
        <Support.Error text="** 조건에 맞는 상품이 없습니다. **" />
      ) : (
        <ul className="space-y-2 sm:space-y-4">
          {basketProducts.map((basketProduct) => (
            <li
              key={basketProduct.productIdx}
              className={combineClassNames(
                "group relative flex flex-col shadow-lg rounded-md bg-gray-100 overflow-hidden hover:overflow-visible",
                basketProduct.skip ? "opacity-50" : ""
              )}
            >
              <Link href={`/product/${basketProduct.productIdx}`}>
                <a
                  className="p-2 space-x-4 flex h-full rounded-md bg-white border-4 border-transparent z-[2] group-hover:border-gray-400 focus:outline-blue-400 focus:outline-4"
                  onClick={(e) => {
                    const target = e.target as HTMLElement;

                    if (
                      target.nodeName === "BUTTON" ||
                      target.nodeName === "INPUT"
                    )
                      e.preventDefault();
                  }}
                >
                  <Photo
                    path={basketProduct.product.photo}
                    cover
                    className="flex-shrink-0 w-[120px] h-[120px] sm:w-[160px] sm:h-[160px]"
                  />
                  <div className="flex-1 flex flex-col space-y-1">
                    <h3 className="font-bolder sm:text-lg">
                      {basketProduct.product.name}
                    </h3>
                    <div className="flex justify-between">
                      <span className="text-xs sm:text-sm font-bold">
                        {numberWithComma(basketProduct.product.price)}원
                      </span>
                      <time className="text-[8px] sm:text-xs text-gray-400">
                        {dateOrTimeFormat(
                          basketProduct.product.updatedAt,
                          "YYYY-MM-DD-hh-mm-ss"
                        )}
                      </time>
                    </div>

                    <div className="flex-1" />

                    <div className="self-start rounded-sm border border-gray-600">
                      <button
                        type="button"
                        onClick={onUpdateQuantity(
                          basketProduct.productIdx,
                          basketProduct.quantity - 1
                        )}
                        className="py-1 px-1.5 sm:px-2 text-xs sm:text-base focus:outline-blue-500"
                      >
                        –
                      </button>
                      <span className="py-1 px-1.5 sm:px-2 text-sm sm:text-base border-x-2 border-gray-300">
                        {basketProduct.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={onUpdateQuantity(
                          basketProduct.productIdx,
                          basketProduct.quantity + 1
                        )}
                        className="py-1 px-1.5 sm:px-2 text-xs sm:text-base focus:outline-blue-500"
                      >
                        +
                      </button>
                    </div>

                    <span className="text-xs sm:text-base">
                      상품 가격:{" "}
                      {numberWithComma(
                        basketProduct.quantity * basketProduct.product.price
                      )}
                    </span>

                    <div className="absolute top-1 right-2 flex items-center space-x-2">
                      <Tool.Button
                        type="button"
                        text="삭제"
                        className="text-[8px] sm:text-xs px-1 sm:px-2 py-[2px] sm:py-1 border border-gray-400 text-gray-500 font-bold rounded-sm focus:outline-none focus:bg-gray-400 focus:text-white transition-colors"
                        onClick={onDeleteBasketProduct(
                          basketProduct.productIdx
                        )}
                      />
                      <input
                        type="checkbox"
                        className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer focus:outline-blue-400"
                        checked={!basketProduct.skip}
                        onChange={onUpdateSkip(
                          basketProduct.productIdx,
                          !basketProduct.skip
                        )}
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

export default React.memo(BasketProducts);
