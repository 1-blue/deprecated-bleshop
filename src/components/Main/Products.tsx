import { useCallback, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import Link from "next/link";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

// api
import apiService from "@src/api";

// util
import { dateOrTimeFormat, numberWithComma } from "@src/libs";

// state
import { productLastIdxState, productsState } from "@src/states";

// component
import Photo from "@src/components/common/Photo";

// type
import type { LIMIT } from "@src/types";
import { AxiosError } from "axios";

const limit: LIMIT = 15;

const Products = () => {
  const router = useRouter();
  // 2022/08/22 - 화면에 랜더링할 상품들 - by 1-blue
  const [products, setProducts] = useRecoilState(productsState);
  // 2022/08/22 - 가장 최근에 요청한 상품의 마지막 식별자 ( 해당 식별자를 기준으로 다음 상품들의 데이터를 요청 ) - by 1-blue
  const [productLastIdx, setProductLastIdx] =
    useRecoilState(productLastIdxState);
  // 2022/08/22 - 마지막 상품의 ref - by 1-blue
  const [lastProductRef, setLastProductRef] = useState<HTMLLIElement | null>(
    null
  );

  // 2022/08/22 - 처음 한번 상품들의 데이터 요청 - by 1-blue
  useEffect(() => {
    (async () => {
      // 이전에 상품 데이터들을 받아왔을 경우를 대비해서 미리 초기화
      setProductLastIdx(-1);

      try {
        // 특정 키워드를 가진 상품들 요청
        if (typeof router.query.searchWord === "string") {
          const {
            data: { products },
          } = await apiService.productService.apiGetProductsByKeyword({
            limit,
            lastIdx: -1,
            keyword: router.query.searchWord,
          });

          setProducts(products);
        }
        // 모든 상품들 요청
        else {
          const {
            data: { products },
          } = await apiService.productService.apiGetProducts({
            limit,
            lastIdx: -1,
          });

          setProducts(products);
        }
      } catch (error) {
        console.error(error);

        if (error instanceof AxiosError) {
          toast.error(error.response?.data.message);
        } else {
          toast.error("알 수 없는 에러입니다. 잠시후에 다시 시도해주세요!");
        }
      }
    })();
  }, [setProducts, setProductLastIdx, router.query]);

  // 2022/08/22 - observer로 인해 실행할 이벤트 함수 ( 제일 마지막 상품이 뷰포트에 들어오면 실행할 이벤트 함수 ) - by 1-blue
  const onScroll = useCallback(
    async ([{ isIntersecting }]: IntersectionObserverEntry[]) => {
      if (!lastProductRef) return;

      // 지정한 엘리먼트가 "threshold"만큼을 제외하고 뷰포트에 들어왔다면 실행
      if (isIntersecting) {
        const {
          data: { products },
        } = await apiService.productService.apiGetProducts({
          limit,
          lastIdx: productLastIdx,
        });

        setProducts((prev) => [...prev, ...products]);
      }
    },
    [lastProductRef, productLastIdx, setProducts]
  );

  // 2022/08/22 - observer 등록 ( 제일 마지막 상품이 뷰포트에 들어오면 실행할 이벤트 함수를 등록 ) - by 1-blue
  useEffect(() => {
    if (!lastProductRef) return;
    if (products.length % limit !== 0) return;

    let observer = new IntersectionObserver(onScroll, {
      threshold: 0.1,
      rootMargin: "20px",
    });
    observer.observe(lastProductRef);

    return () => observer?.disconnect();
  }, [lastProductRef, onScroll, products]);

  return (
    <section className="space-y-4 p-2 xsm:p-3 md:p-4 bg-white rounded-md shadow-2xl">
      <h2 className="pl-1 text-gray-800 font-bolder text-lg xs:text-xl md:text-2xl">
        {router.query.searchWord
          ? `"${router.query.searchWord}"의 검색 결과`
          : "상품들"}
      </h2>

      {products.length === 0 ? (
        <h3>조건에 맞는 상품이 없습니다.</h3>
      ) : (
        <ul className="grid grid-cols-1 xsm:grid-cols-2 md:grid-cols-3 gap-2">
          {products.map((product, i) => (
            <li
              key={product.idx}
              className="group relative flex flex-col shadow-lg rounded-md bg-gray-100 overflow-hidden hover:overflow-visible"
              ref={(e) =>
                products.length === i + 1 ? setLastProductRef(e) : null
              }
            >
              <Link href={`/product/${product.idx}`}>
                <a className="rounded-md bg-white border-4 border-transparent z-[2] group-hover:border-gray-400 focus:outline-blue-400 focus:outline-4">
                  <Photo path={product.photo} cover className="h-60" />
                  <div className="space-y-2 px-2 py-1">
                    <h3 className="font-bolder text-xl">{product.name}</h3>
                    <p className="whitespace-pre overflow-hidden text-ellipsis">
                      {product.description}
                    </p>
                    <div className="flex justify-between">
                      <span>{numberWithComma(product.price)}원</span>
                      <time className="text-xs sm:text-sm text-gray-400">
                        {dateOrTimeFormat(
                          product.updatedAt,
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
    </section>
  );
};

export default Products;
