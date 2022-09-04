import { useCallback, useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

// util
import { dateOrTimeFormat, numberWithComma } from "@src/libs";

// api
import apiService from "@src/api";

// state
import stateService from "@src/states";

// component
import HeadInfo from "@src/components/common/HeadInfo";
import Carousel from "@src/components/common/Carousel";
import Nav from "@src/components/common/Nav";
import Photo from "@src/components/common/Photo";
import Tool from "@src/components/common/Tool";
import MyError from "@src/components/common/MyError";
import RelatedProducts from "@src/components/Products/RelatedProducts";
import Support from "@src/components/common/Support";
import MyLoading from "@src/components/common/MyLoading";
import SelectAddressModal from "@src/components/Product/SelectAddressModal";

// type
import type {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";
import type { LIMIT, DetailProduct, ProductOptionForm } from "@src/types";
import type { Product } from "@prisma/client";
import { AxiosError } from "axios";

const limit: LIMIT = 15;

type Props = {
  product: DetailProduct | null;
  relatedProducts: Product[];
};

const Product: NextPage<Props> = ({ product, relatedProducts }) => {
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
        <Nav.TitleNav title="돌아가기" />

        {/* 상품 이미지들 */}
        <Support.Background className="space-y-2" hasPadding>
          <Support.Title text="상품 이미지들" />
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
        </Support.Background>

        {/* 상품 정보 */}
        <Support.Background className="flex flex-col space-y-2" hasPadding>
          <Support.Title text={product.name} />
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
        </Support.Background>

        {/* 상품 설명 */}
        <Support.Background className="flex flex-col space-y-2" hasPadding>
          <Support.Title text="상품 설명" />
          <p className="text-sm sm:text-base whitespace-pre-line">
            {product.description}
          </p>
        </Support.Background>

        {/* 상품 옵션 선택 */}
        <Support.Background className="flex flex-col space-y-2" hasPadding>
          <Support.Title text="옵션 선택" />

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
        </Support.Background>

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

        {showAddressModal && (
          <SelectAddressModal
            product={product}
            onCloseModal={() => setShowAddressModal(false)}
            color={getValues("color")}
            size={getValues("size")}
            quantity={quantity}
          />
        )}

        {/* >>> 상품평 */}

        {/* 유사 상품 */}
        <Support.Background className="flex flex-col space-y-2" hasPadding>
          <Support.Title text="연관 상품들" />
          <RelatedProducts
            productIdx={product.idx}
            keywords={product.keywords.map(({ keywordIdx }) => keywordIdx)}
          />
        </Support.Background>
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
    const {
      data: { products: relatedProducts },
    } = await apiService.productService.apiGetRelatedProducts({
      limit,
      lastIdx: -1,
      productIdx,
      keywords: product.keywords.map(({ keywordIdx }) => encodeURI(keywordIdx)),
    });

    return { props: { product, relatedProducts } };
  } catch (error) {
    console.error("getStaticProps product/[id] >> ", error);

    return { props: { product: null, relatedProducts: [] } };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};
