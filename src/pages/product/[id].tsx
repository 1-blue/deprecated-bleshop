import { useCallback, useEffect, useState } from "react";
import { useRecoilValueLoadable, useSetRecoilState } from "recoil";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Link from "next/link";

// util
import { dateOrTimeFormat, numberWithComma } from "@src/libs";

// api
import apiService from "@src/api";

// state
import stateService, { productToBuy } from "@src/states";

// component
import Carousel from "@src/components/common/Carousel";
import Nav from "@src/components/common/Nav";
import Photo from "@src/components/common/Photo";
import Tool from "@src/components/common/Tool";

// type
import type { NextPage } from "next";
import type { ProductOptionForm } from "@src/types";

const Product: NextPage = () => {
  const { data } = useSession();
  const router = useRouter();

  // 2022/08/26 - 현재 상품의 식별자 수정자 - by 1-blue
  const setProductIdx = useSetRecoilState(
    stateService.productService.productIdxState
  );
  // 2022/08/26 - 현재 상품의 식별자로 변경하기 - by 1-blue
  useEffect(() => {
    if (typeof router.query.id !== "string") return;

    setProductIdx(+router.query.id);
  }, [router.query, setProductIdx]);

  // 2022/08/26 - 현재 상품의 상세 정보 - by 1-blue
  const { state: productResult, contents: product } = useRecoilValueLoadable(
    stateService.productService.productState
  );

  // 2022/08/26 - 현재 상품과 연관된 상품들의 정보 - by 1-blue
  const { state: relatedProductResult, contents: relatedProducts } =
    useRecoilValueLoadable(stateService.productService.relatedProductsState);

  // 2022/08/26 - 현재 상품에 찜하기를 눌렀는지 여부 - by 1-blue
  const [isWish, setIsWish] = useState(false);
  useEffect(() => {
    if (productResult === "loading" || productResult === "hasError") return;
    if (!product) return;
    if (!data?.user) return;

    (async () => {
      const {
        data: { isWish },
      } = await apiService.wishService.apiGetWish({ productIdx: product.idx });

      setIsWish(isWish);
    })();
  }, [productResult, product, data]);

  // 2022/08/26 - 구매/장바구니 관련 데이터 - by 1-blue
  const setProductToBuy = useSetRecoilState(productToBuy);

  // 2022/08/26 - 상품 구매/장바구니 관련 폼 - by 1-blue
  const { register, watch, setValue, handleSubmit } =
    useForm<ProductOptionForm>({
      defaultValues: { quantity: 1 },
    });

  // 2022/08/26 - 구매할 상품 개수 - by 1-blue
  const quantity = watch("quantity");

  // 2022/08/26 - 상품 구매버튼 클릭 시 실행 - by 1-blue
  const onSubmit = useCallback(
    (option: ProductOptionForm) => {
      if (productResult === "loading" || productResult === "hasError") return;
      if (!product) return;

      setProductToBuy({ product, option });

      // 구매 페이지로 이동
    },
    [productResult, product, setProductToBuy]
  );

  // 2022/08/26 - 현재 상품의 이미지들중에 보여지는 이미지 번호 - by 1-blue
  const [currentDot, setCurrentDot] = useState(0);

  if (productResult === "loading")
    return <h3>상품 데이터를 받아오는 중입니다...</h3>;
  if (productResult === "hasError")
    return <h3>상품 데이터를 받아오는 중에 에러가 발생했습니다.</h3>;
  if (product === null) return <h3>상품이 존재하지 않습니다.</h3>;

  return (
    <article className="pt-4 space-y-4">
      <Nav.TitleNav title="돌아가기" />

      {/* 상품 이미지들 */}
      <section className="p-2 xsm:p-3 md:p-4 space-y-2 bg-white rounded-md shadow-2xl">
        <h3 className="pl-1 text-gray-800 font-bolder text-lg xs:text-xl md:text-2xl">
          상품 이미지들
        </h3>
        <Carousel currentDot={currentDot} setCurrentDot={setCurrentDot}>
          <Photo
            key={product.photo}
            path={product.photo}
            className="w-full h-[200px] xs:h-[350px] md:h-[500px]"
            alt="상품 대표 이미지"
            cover
          />
          {product.photos.map(({ path }) => (
            <Photo
              key={path}
              path={path}
              className="w-full h-[200px] xs:h-[350px] md:h-[500px]"
              alt="상품 이미지"
              cover
            />
          ))}
        </Carousel>

        <div className="pb-10" />
      </section>

      {/* 상품 정보 */}
      <section className="flex flex-col p-2 xsm:p-3 md:p-4 bg-white rounded-md shadow-2xl">
        <h1 className="text-2xl font-bolder mb-2">{product.name}</h1>
        <div className="flex flex-col divide-y-2 space-y-2">
          <span className="px-2 font-bold">
            {numberWithComma(product.price)}원
          </span>
          <span className="px-2 pt-2">{product.brand}</span>
          <span className="px-2 pt-2">{product.company}</span>
        </div>

        <time className="self-end text-[8px] sm:text-xs text-gray-400">
          {dateOrTimeFormat(product.updatedAt, "YYYY-MM-DD-hh-mm-ss")}
        </time>
      </section>

      {/* 상품 설명 */}
      <section className="flex flex-col p-2 xsm:p-3 md:p-4 bg-white rounded-md shadow-2xl">
        <h3 className="text-2xl font-bolder mb-2">상품 설명</h3>
        <p className="whitespace-pre-line">{product.description}</p>
      </section>

      {/* 상품 옵션 선택 */}
      <section className="flex flex-col p-2 xsm:p-3 md:p-4 bg-white rounded-md shadow-2xl">
        <h3 className="text-2xl font-bolder mb-2">옵션 선택</h3>

        <form className="flex flex-col">
          {product.size && (
            <Tool.Select name="사이즈" register={register("size")}>
              {product.size.split(",").map((v) => (
                <option key={v}>{v}</option>
              ))}
            </Tool.Select>
          )}

          {product.color && (
            <Tool.Select name="색상" register={register("color")}>
              {product.color?.split(",").map((v) => (
                <option key={v}>{v}</option>
              ))}
            </Tool.Select>
          )}

          <div className="flex justify-between">
            <div className="rounded-sm border border-gray-600">
              <button
                type="button"
                onClick={() =>
                  setValue(
                    "quantity",
                    quantity - 1 >= 1 ? quantity - 1 : quantity
                  )
                }
                className="py-1 px-2"
              >
                –
              </button>
              <span className="py-1 px-2 border-x-2 border-gray-300">
                {watch("quantity")}
              </span>
              <button
                type="button"
                onClick={() => setValue("quantity", quantity + 1)}
                className="py-1 px-2"
              >
                +
              </button>
            </div>
            <span>가격: {numberWithComma(quantity * product.price)}원</span>
          </div>
        </form>
      </section>

      {/* 상품 찜하기/구매하기/장바구니 버튼 */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex p-2 space-x-2 xsm:p-3 md:p-4 bg-white rounded-md shadow-2xl"
      >
        <button
          type="button"
          className="flex-1 p-2 bg-red-400 text-white font-bold hover:bg-red-600 transition-colors"
        >
          {isWish ? "취소하기" : "찜하기"}
        </button>
        <button
          type="submit"
          className="flex-1 p-2 bg-blue-400 text-white font-bold hover:bg-blue-600 transition-colors"
        >
          구매하기
        </button>
        <button
          type="button"
          className="flex-1 p-2 bg-indigo-400 text-white font-bold hover:bg-indigo-600 transition-colors"
        >
          장바구니
        </button>
      </form>

      {/* 상품평 */}

      {/* 유사 상품 */}
      {relatedProductResult === "hasValue" && relatedProducts.length !== 0 && (
        <section className="flex flex-col p-2 xsm:p-3 md:p-4 bg-white rounded-md shadow-2xl">
          <h2 className="pl-1 text-gray-800 font-bolder text-lg xs:text-xl md:text-2xl">
            연관된 상품들
          </h2>

          <ul className="grid grid-cols-1 xsm:grid-cols-2 md:grid-cols-3 gap-2">
            {relatedProducts.map((product) => (
              <li
                key={product.idx}
                className="group relative flex flex-col shadow-lg rounded-md bg-gray-100 overflow-hidden hover:overflow-visible"
              >
                <Link href={`/product/${product.idx}`}>
                  <a className="flex flex-col h-full rounded-md bg-white border-4 border-transparent z-[2] group-hover:border-gray-400 focus:outline-blue-400 focus:outline-4">
                    <Photo path={product.photo} cover className="h-60" />
                    <div className="flex-1 flex flex-col space-y-2 px-2 py-1">
                      <h3 className="font-bolder text-xl">{product.name}</h3>
                      <p className="flex-1 whitespace-pre overflow-hidden text-ellipsis">
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
        </section>
      )}
    </article>
  );
};

export default Product;
