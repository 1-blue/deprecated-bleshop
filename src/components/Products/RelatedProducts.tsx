import React, { useCallback, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import Link from "next/link";
import { toast } from "react-toastify";

// api
import apiService from "@src/api";

// util
import { dateOrTimeFormat, numberWithComma } from "@src/libs";

// state
import stateService from "@src/states";

// component
import Photo from "@src/components/common/Photo";

// type
import type { LIMIT } from "@src/types";
import { AxiosError } from "axios";

const limit: LIMIT = 15;

type Props = {
  productIdx: number;
  keywords: string[];
};

const RelatedProducts = ({ productIdx, keywords }: Props) => {
  // 2022/08/27 - 화면에 랜더링할 연관된 상품들 - by 1-blue
  const [relatedProducts, setRelatedProducts] = useRecoilState(
    stateService.productService.relatedProductsState
  );
  // 2022/08/27 - 가장 최근에 요청한 상품의 마지막 식별자 ( 해당 식별자를 기준으로 다음 상품들의 데이터를 요청 ) - by 1-blue
  const [productLastIdx, setProductLastIdx] = useRecoilState(
    stateService.productService.relatedProductsLastIdxState
  );
  // 2022/08/27 - 마지막 상품의 ref - by 1-blue
  const [lastProductRef, setLastProductRef] = useState<HTMLLIElement | null>(
    null
  );

  // 2022/08/27 - 처음 한번 연관된 상품들의 데이터 요청 - by 1-blue
  useEffect(() => {
    (async () => {
      // 이전에 상품 데이터들을 받아왔을 경우를 대비해서 미리 초기화
      setProductLastIdx(-1);

      try {
        const {
          data: { products },
        } = await apiService.productService.apiGetRelatedProducts({
          limit,
          lastIdx: -1,
          productIdx,
          keywords,
        });

        setRelatedProducts(products);
      } catch (error) {
        console.error(error);

        if (error instanceof AxiosError) {
          toast.error(error.response?.data.message);
        } else {
          toast.error("알 수 없는 에러가 발생했습니다.");
        }
      }
    })();
  }, [productIdx, keywords, setRelatedProducts, setProductLastIdx]);

  // 2022/08/27 - observer로 인해 실행할 이벤트 함수 ( 제일 마지막 상품이 뷰포트에 들어오면 실행할 이벤트 함수 ) - by 1-blue
  const onScroll = useCallback(
    async ([{ isIntersecting }]: IntersectionObserverEntry[]) => {
      if (!lastProductRef) return;

      // 지정한 엘리먼트가 "threshold"만큼을 제외하고 뷰포트에 들어왔다면 실행
      if (isIntersecting) {
        try {
          const {
            data: { products },
          } = await apiService.productService.apiGetRelatedProducts({
            limit,
            lastIdx: productLastIdx,
            productIdx,
            keywords,
          });

          setRelatedProducts((prev) => [...prev, ...products]);
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
    [productIdx, keywords, lastProductRef, productLastIdx, setRelatedProducts]
  );

  // 2022/08/27 - observer 등록 ( 제일 마지막 상품이 뷰포트에 들어오면 실행할 이벤트 함수를 등록 ) - by 1-blue
  useEffect(() => {
    if (!lastProductRef) return;
    if (relatedProducts.length % limit !== 0) return;

    let observer = new IntersectionObserver(onScroll, {
      threshold: 0.1,
      rootMargin: "20px",
    });
    observer.observe(lastProductRef);

    return () => observer?.disconnect();
  }, [lastProductRef, onScroll, relatedProducts]);

  return (
    <>
      {relatedProducts.length === 0 ? (
        <h3>조건에 맞는 상품이 없습니다.</h3>
      ) : (
        <ul className="grid grid-cols-1 xsm:grid-cols-2 md:grid-cols-3 gap-2">
          {relatedProducts.map((relatedProduct, i) => (
            <li
              key={relatedProduct.idx}
              className="group relative flex flex-col shadow-lg rounded-md bg-gray-100 overflow-hidden hover:overflow-visible"
              ref={(e) =>
                relatedProducts.length === i + 1 ? setLastProductRef(e) : null
              }
            >
              <Link href={`/product/${relatedProduct.idx}`}>
                <a className="flex flex-col h-full rounded-md bg-white border-4 border-transparent z-[2] group-hover:border-gray-400 focus:outline-blue-400 focus:outline-4">
                  <Photo path={relatedProduct.photo} cover className="h-60" />
                  <div className="flex-1 flex flex-col space-y-2 px-2 py-1">
                    <h3 className="font-bolder text-xl">
                      {relatedProduct.name}
                    </h3>
                    <p className="flex-1 whitespace-pre overflow-hidden text-ellipsis">
                      {relatedProduct.description}
                    </p>
                    <div className="flex justify-between">
                      <span>{numberWithComma(relatedProduct.price)}원</span>
                      <time className="text-xs sm:text-sm text-gray-400">
                        {dateOrTimeFormat(
                          relatedProduct.updatedAt,
                          "YYYY-MM-DD-hh-mm-ss"
                        )}
                      </time>
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

export default React.memo(RelatedProducts);
