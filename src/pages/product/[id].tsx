import { useCallback, useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import dynamic from "next/dynamic";

// util
import { dateOrTimeFormat, numberWithComma } from "@src/libs";

// api
import apiService from "@src/api";

// state
import stateService from "@src/states";

// component
import HeadInfo from "@src/components/common/HeadInfo";
const Background = dynamic(
  () => import("@src/components/common/Support/Background"),
  { suspense: true }
);
const Title = dynamic(() => import("@src/components/common/Support/Title"), {
  suspense: true,
});
const TitleNav = dynamic(() => import("@src/components/common/Nav/TitleNav"), {
  suspense: true,
});
const Select = dynamic(() => import("@src/components/common/Tool/Select"), {
  suspense: true,
});
const Carousel = dynamic(() => import("@src/components/common/Carousel"), {
  suspense: true,
});
const Photo = dynamic(() => import("@src/components/common/Photo"), {
  suspense: true,
});
const MyError = dynamic(() => import("@src/components/common/MyError"), {
  suspense: true,
});
const MyLoading = dynamic(() => import("@src/components/common/MyLoading"), {
  suspense: true,
});
const RelatedProducts = dynamic(
  () => import("@src/components/Products/RelatedProducts"),
  {
    suspense: true,
  }
);
const SelectAddressModal = dynamic(
  () => import("@src/components/Product/SelectAddressModal"),
  {
    suspense: true,
  }
);
const Reviews = dynamic(() => import("@src/components/Product/Reviews"), {
  suspense: true,
});

// type
import type {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";
import type {
  LIMIT,
  DetailProduct,
  ProductOptionForm,
  ApiGetReviewsOfProductResponse,
  RecentProduct,
} from "@src/types";
import type { Product } from "@prisma/client";
import { AxiosError } from "axios";

const limit: LIMIT = 15;

type Props = {
  product: DetailProduct | null;
  relatedProducts: Product[];
  reviews: ApiGetReviewsOfProductResponse["reviews"];
};

const Product: NextPage<Props> = ({ product, relatedProducts, reviews }) => {
  const { data } = useSession();
  const router = useRouter();

  // 2022/08/26 - 상품 구매/장바구니 관련 폼 - by 1-blue
  const { register, watch, setValue, handleSubmit, getValues } =
    useForm<ProductOptionForm>({
      defaultValues: { quantity: 1 },
    });

  // 2022/08/26 - 구매할 상품 개수 - by 1-blue
  const quantity = watch("quantity");

  // 2022/09/04 - 배송지 선택 모달 렌더링 여부 - by 1-blue
  const [showAddressModal, setShowAddressModal] = useState(false);

  // 2022/08/26 - 상품 구매버튼 클릭 시 실행 - by 1-blue
  const onSubmit = useCallback(() => {
    if (!product) return;
    if (!data?.user) return toast.error("로그인 후에 시도해주세요!");

    toast.info("배송지를 선택해주세요!");

    setShowAddressModal(true);
  }, [data, product, setShowAddressModal]);

  // 2022/08/26 - 현재 상품의 이미지들중에 보여지는 이미지 번호 - by 1-blue
  const [currentDot, setCurrentDot] = useState(0);

  // 2022/08/26 - 현재 상품에 찜하기를 눌렀는지 여부 - by 1-blue
  const [isWish, setIsWish] = useState(false);
  useEffect(() => {
    if (!product) return;
    if (!data?.user) return;

    (async () => {
      const {
        data: { isWish },
      } = await apiService.wishService.apiGetWish({ productIdx: product.idx });

      setIsWish(isWish);
    })();
  }, [product, data]);

  // 2022/08/30 - 찜하기/찜취소하기 - by 1-blue
  const onClickWishButton = useCallback(async () => {
    if (typeof router.query.id !== "string") return;

    const toastId = toast.loading("찜하기 요청을 처리중입니다.");

    try {
      // 찜취소하기 요청
      if (isWish) {
        const {
          data: { message },
        } = await apiService.wishService.apiDeleteWish({
          productIdx: +router.query.id,
        });

        toast.update(toastId, {
          render: message,
          type: "success",
          isLoading: false,
          autoClose: 1500,
        });

        setIsWish(false);
      }
      // 찜하기 요청
      else {
        const {
          data: { message },
        } = await apiService.wishService.apiCreateWish({
          productIdx: +router.query.id,
          ...getValues(),
        });

        toast.update(toastId, {
          render: message,
          type: "success",
          isLoading: false,
          autoClose: 1500,
        });

        setIsWish(true);
      }
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
    }
  }, [isWish, router.query, getValues]);

  // 2022/08/31 - 장바구니 담기 - by 1-blue
  const onPutBasket = useCallback(async () => {
    if (typeof router.query.id !== "string") return;

    const toastId = toast.loading("장바구니에 상품을 넣는중입니다.");

    try {
      const {
        data: { message },
      } = await apiService.basketService.apiCreateBasket({
        ...getValues(),
        productIdx: +router.query.id,
      });

      toast.update(toastId, {
        render: message,
        type: "success",
        isLoading: false,
        autoClose: 1500,
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
    }
  }, [getValues, router.query]);

  // 2022/09/01 - 연관된 상품들 수정 함수 - by 1-blue
  const setRelatedProducts = useSetRecoilState(
    stateService.productService.relatedProductsState
  );

  // 2022/09/01 - 연관된 상품들 초기화 - by 1-blue
  useEffect(() => {
    setRelatedProducts(relatedProducts);
  }, [setRelatedProducts, relatedProducts]);

  // 2022/09/07 - 리뷰들 수정 함수 - by 1-blue
  const setReviews = useSetRecoilState(stateService.reviewService.reviewsState);

  // 2022/09/07 - 리뷰들 초기화 - by 1-blue
  useEffect(() => setReviews(reviews), [setReviews, reviews]);

  // 2022/09/11 - 최근 본 상품으로 등록 ( localStorage ) - by 1-blue
  useEffect(() => {
    if (!product) return;

    const previousWatched: RecentProduct[] = JSON.parse(
      localStorage.getItem("watched") || "[]"
    );
    if (!Array.isArray(previousWatched)) return;

    let currentWatched: RecentProduct[] = [];
    const targetIndex = previousWatched.findIndex(
      (watched) => watched.idx === product.idx
    );

    // 처음 보는 상품이라면
    if (targetIndex === -1) {
      const { idx, photo, name, ...rest } = product;
      currentWatched = [{ idx, photo, name }, ...previousWatched];
    }
    // 최근에 본적이 있는 상품이라면
    else {
      const target = previousWatched.splice(targetIndex, 1);
      currentWatched = [...target, ...previousWatched];
    }

    // 목록이 10개가 넘으면 자르기
    if (currentWatched.length > 10) currentWatched.pop();

    localStorage.setItem("watched", JSON.stringify(currentWatched));
  }, [product]);

  if (router.isFallback) return <MyLoading />;
  if (product === null) return <MyError message="상품이 존재하지 않습니다." />;

  return (
    <>
      <HeadInfo
        title={`BleShop - ${product.name}`}
        description={product.description}
        photo={product.photo}
      />

      <article className="pt-4 space-y-4">
        <TitleNav title="돌아가기" />

        {/* 상품 이미지들 */}
        <Background className="space-y-2" hasPadding>
          <Title text="상품 이미지들" />
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
        </Background>

        {/* 상품 정보 */}
        <Background className="flex flex-col space-y-2" hasPadding>
          <Title text={product.name} />
          <div className="flex flex-col divide-y-2 space-y-2 text-sm sm:text-base">
            <span className="px-2 font-bold">
              {numberWithComma(product.price)}원
            </span>
            <span className="px-2 pt-2">{product.brand}</span>
            <span className="px-2 pt-2">{product.company}</span>
          </div>

          <time className="self-end text-[8px] sm:text-xs text-gray-400">
            {dateOrTimeFormat(product.updatedAt, "YYYY-MM-DD-hh-mm-ss")}
          </time>
        </Background>

        {/* 상품 설명 */}
        <Background className="flex flex-col space-y-2" hasPadding>
          <Title text="상품 설명" />
          <p className="text-sm sm:text-base whitespace-pre-line">
            {product.description}
          </p>
        </Background>

        {/* 상품 옵션 선택 */}
        <Background className="flex flex-col space-y-2" hasPadding>
          <Title text="옵션 선택" />

          <form className="flex flex-col">
            {product.size && (
              <Select name="사이즈" register={register("size")}>
                {product.size.split(",").map((v) => (
                  <option key={v}>{v}</option>
                ))}
              </Select>
            )}

            {product.color && (
              <Select name="색상" register={register("color")}>
                {product.color?.split(",").map((v) => (
                  <option key={v}>{v}</option>
                ))}
              </Select>
            )}

            <div className="flex justify-between items-center">
              <div className="rounded-sm border border-gray-600">
                <button
                  type="button"
                  onClick={() =>
                    setValue(
                      "quantity",
                      quantity - 1 >= 1 ? quantity - 1 : quantity
                    )
                  }
                  className="py-1 px-1.5 sm:px-2 text-xs sm:text-base focus:outline-blue-500"
                >
                  –
                </button>
                <span className="py-1 px-1.5 sm:px-2 text-sm sm:text-base border-x-2 border-gray-300">
                  {watch("quantity")}
                </span>
                <button
                  type="button"
                  onClick={() => setValue("quantity", quantity + 1)}
                  className="py-1 px-1.5 sm:px-2 text-xs sm:text-base focus:outline-blue-500"
                >
                  +
                </button>
              </div>
              <span className="text-sm sm:text-base">
                가격: {numberWithComma(quantity * product.price)}원
              </span>
            </div>
          </form>
        </Background>

        {/* 상품 찜하기/구매하기/장바구니 버튼 */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex p-2 space-x-2 xsm:p-3 md:p-4 bg-white rounded-md shadow-2xl"
        >
          <button
            type="button"
            className="flex-1 p-1 xs:p-1.5 sm:p-2 bg-red-400 text-xs xs:text-sm sm:text-base text-white font-bold hover:bg-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            onClick={onClickWishButton}
          >
            {isWish ? "취소하기" : "찜하기"}
          </button>
          <button
            type="submit"
            className="flex-1 p-1 xs:p-1.5 sm:p-2 bg-blue-400 text-xs xs:text-sm sm:text-base text-white font-bold hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            구매하기
          </button>
          <button
            type="button"
            className="flex-1 p-1 xs:p-1.5 sm:p-2 bg-indigo-400 text-xs xs:text-sm sm:text-base text-white font-bold hover:bg-indigo-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={onPutBasket}
          >
            장바구니
          </button>
        </form>

        {/* 상품 구매 시 주소 선택 모달 */}
        {showAddressModal && (
          <SelectAddressModal
            products={[product]}
            onCloseModal={() => setShowAddressModal(false)}
            singleData={[
              {
                color: getValues("color"),
                size: getValues("size"),
                quantity: quantity,
                productIdx: product.idx,
              },
            ]}
          />
        )}

        {/* 상품평 */}
        <Background className="flex flex-col space-y-2 p-4">
          <Title text="리뷰들" />
          <Reviews productIdx={product.idx} />
        </Background>

        {/* 유사 상품 */}
        <Background className="flex flex-col space-y-2" hasPadding>
          <Title text="연관 상품들" />
          <RelatedProducts
            productIdx={product.idx}
            keywords={product.keywords.map(({ keywordIdx }) => keywordIdx)}
          />
        </Background>
      </article>
    </>
  );
};

export default Product;

export const getStaticProps: GetStaticProps<Props> = async (
  context: GetStaticPropsContext
) => {
  const productIdx = Number(context.params?.id);

  try {
    // 2022/09/03 - 현재 상품 - by 1-blue
    const {
      data: { product },
    } = await apiService.productService.apiGetProduct({ productIdx });

    // 2022/09/03 - 현재 상품과 연관된 상품들 ( 같은 키워드를 가진 상품들 ) - by 1-blue
    const relatedProductsPromise =
      await apiService.productService.apiGetRelatedProducts({
        limit,
        lastIdx: -1,
        productIdx,
        keywords: product.keywords.map(({ keywordIdx }) =>
          encodeURI(keywordIdx)
        ),
      });

    // 2022/09/07 - 현재 상품의 리뷰들 - by 1-blue
    const reviewsPromise = await apiService.productService.apiGetReviews({
      limit,
      lastIdx: -1,
      productIdx,
    });

    // 병렬 처리
    const [
      {
        data: { products: relatedProducts },
      },
      {
        data: { reviews },
      },
    ] = await Promise.all([relatedProductsPromise, reviewsPromise]);

    return { props: { product, relatedProducts, reviews } };
  } catch (error) {
    console.error("getStaticProps product/[id] >> ", error);

    return { props: { product: null, relatedProducts: [], reviews: [] } };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};
