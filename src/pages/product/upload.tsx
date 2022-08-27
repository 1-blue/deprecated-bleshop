import { useCallback, useState } from "react";
import { useRecoilValue } from "recoil";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

// util
import {
  deleteSeparator,
  numberWithComma,
  numberWithoutComma,
} from "@src/libs";

// api
import apiService from "@src/api";

// state
import stateService from "@src/states";

// component
import HeadInfo from "@src/components/common/HeadInfo";
import Tool from "@src/components/common/Tool";
import NotAuthPage from "@src/components/common/403";
import NotLogInPage from "@src/components/common/401";

// type
import type { NextPage } from "next";
import type { ApiCreateProductBody } from "@src/types";
import { AxiosError } from "axios";

type ProductForm = Pick<
  ApiCreateProductBody,
  "name" | "category" | "description" | "information" | "option"
> & {
  photo: FileList;
  photos: FileList;
  keywords: string;
  filters: string;
};

const Upload: NextPage = () => {
  const router = useRouter();
  const { data } = useSession();
  // 2022/08/19 - 저장된 모든 카테고리들 - by 1-blue
  const categories = useRecoilValue(
    stateService.categoryService.categoriesState
  );
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm<ProductForm>();

  // 2022/08/19 - 대표 이미지 - by 1-blue
  const [photoURL, setPhotoURL] = useState("");
  // 2022/08/19 - 서브 이미지들 - by 1-blue
  const [photoURLs, setPhotoURLs] = useState<string[]>([]);

  // 2022/08/19 - 상품 등록 - by 1-blue
  const onCreateProduct = useCallback(
    async (body: ProductForm) => {
      if (!body.keywords) {
        if (
          !confirm(
            "키워드를 입력하지 않으면 검색되지 않습니다.\n정말 이대로 상품을 생성하시겠습니까?"
          )
        )
          return;
      }
      if (!body.filters) {
        if (
          !confirm(
            "필터를 입력하지 않으면 필터링되지 않습니다.\n정말 이대로 상품을 생성하시겠습니까?"
          )
        )
          return;
      }

      const toastId = toast.loading(
        "상품을 등록중입니다. 잠시만 기다려주세요."
      );

      const productBody: ApiCreateProductBody = {
        ...body,
        option: {
          color: deleteSeparator(body.option.color, ",").join(),
          size: deleteSeparator(body.option.size, ",").join(),
        },
        photo: photoURL,
        photos: photoURLs,
        information: {
          ...body.information,
          price: numberWithoutComma(body.information.price),
        },
        keywords: deleteSeparator(body.keywords, ","),
        filters: deleteSeparator(body.filters, ","),
      };

      try {
        const {
          data: { message, productIdx },
        } = await apiService.productService.apiCreateProduct(productBody);

        toast.update(toastId, {
          render: message,
          type: "success",
          isLoading: false,
          autoClose: 1500,
        });

        router.push(`/product/${productIdx}`);
      } catch (error) {
        console.error("error >> ", error);

        if (error instanceof AxiosError) {
          toast.update(toastId, {
            render: error.response?.data.message,
            type: "error",
            isLoading: false,
            autoClose: 1500,
          });
        } else {
          toast.update(toastId, {
            render: "알 수 없는 에러입니다. 잠시후에 다시 시도해주세요!",
            type: "error",
            isLoading: false,
            autoClose: 1500,
          });
        }
      }
    },
    [photoURL, photoURLs, router]
  );

  // 2022/08/20 - 금액 관련 3자리 구분 기호 제거 - by 1-blue
  const onFocus = useCallback(() => {
    const price = getValues("information.price");

    setValue("information.price", numberWithoutComma(price));
  }, [getValues, setValue]);
  // 2022/08/20 - 금액 관련 3자리 구분 기호 추가 - by 1-blue
  const onBlur = useCallback(() => {
    const price = getValues("information.price");

    setValue("information.price", numberWithComma(price));
  }, [getValues, setValue]);

  // 로그인 유무 확인
  if (!data) return <NotLogInPage />;
  if (!data.user) return <NotLogInPage />;
  // 상품 등록 권한이 있는지 확인
  if (data.user.isAdmin) return <NotAuthPage />;

  return (
    <>
      <HeadInfo
        title="BleShop - 상품 생성"
        description="BleShop의 상품 생성 페이지"
      />

      <Tool.Form onSubmit={handleSubmit(onCreateProduct)} className="pt-4">
        {/* 상품명 입력 */}
        <Tool.Input
          name="상품명"
          type="text"
          placeholder="상품명을 입력해주세요."
          register={register("name", {
            required: { message: "상품명을 입력해주세요!", value: true },
            maxLength: { message: "상품명은 최대 40자 입니다!", value: 40 },
          })}
          errorMessage={errors.name?.message}
          className="min-w-[200px] max-w-[600px] w-full"
        />

        {/* 가격 입력 */}
        <Tool.Input
          name="가격"
          type="text"
          placeholder="가격을 입력해주세요."
          register={register("information.price", {
            required: { message: "가격을 입력해주세요!", value: true },
          })}
          errorMessage={errors.information?.price?.message}
          onFocus={onFocus}
          onBlur={onBlur}
          className="min-w-[200px] max-w-[600px] w-full"
        />

        {/* 카테고리 설정 */}
        <Tool.Select
          name="카테고리"
          register={register("category", {
            required: { message: "카테고리를 선택해주세요.", value: true },
          })}
          className="min-w-[200px] max-w-[600px] w-full"
        >
          {categories.map(({ category }) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </Tool.Select>

        {/* 옵션 설정 */}
        <Tool.Input
          name="사이즈"
          type="text"
          placeholder="사이즈 입력해주세요. ( 쉼표(,)로 구분해서 입력해주세요. )"
          register={register("option.size")}
          errorMessage={errors.option?.size?.message}
          className="min-w-[200px] max-w-[600px] w-full"
        />
        <Tool.Input
          name="색상"
          type="text"
          placeholder="색상 입력해주세요. ( 쉼표(,)로 구분해서 입력해주세요. )"
          register={register("option.color")}
          errorMessage={errors.option?.color?.message}
          className="min-w-[200px] max-w-[600px] w-full"
        />

        {/* 상품 대표 이미지 등록 */}
        <Tool.SinglePhoto
          photoURL={photoURL}
          setPhotoURL={setPhotoURL}
          name="대표 이미지"
          register={register("photo", {
            required: { message: "대표 이미지는 필수입니다!", value: true },
          })}
          errorMessage={errors.photo?.message}
        />

        {/* 상품 이미지들 등록 */}
        <Tool.MultiplePhoto
          photoURLs={photoURLs}
          setPhotoURLs={setPhotoURLs}
          name="추가 이미지"
          register={register("photos")}
        />

        {/* 상세 설명 */}
        <Tool.Textarea
          name="상품 설명"
          register={register("description", {
            required: { message: "상품 설명을 입력해주세요!", value: true },
            maxLength: {
              message: "2,000자 이내로 입력해주세요!",
              value: 2000,
            },
          })}
          errorMessage={errors.description?.message}
        />

        {/* 상품 주요 정보 ( 브랜드, 제조사, 판매기간 ) */}
        <Tool.Input
          name="브랜드"
          type="text"
          placeholder="브랜드를 입력해주세요."
          register={register("information.brand")}
          errorMessage={errors.option?.color?.message}
          className="min-w-[200px] max-w-[600px] w-full"
        />
        <Tool.Input
          name="제조사"
          type="text"
          placeholder="제조사를 입력해주세요."
          register={register("information.company")}
          errorMessage={errors.option?.color?.message}
          className="min-w-[200px] max-w-[600px] w-full"
        />
        <Tool.DatePicker<ProductForm>
          name="판매 종료일"
          control={control}
          errorMessage={
            errors.information?.period ? "판매 종료일을 선택해주세요!" : ""
          }
        />

        {/* 검색어 입력 ( 최대 20개 콤마로 구분 ) */}
        <Tool.Input
          name="검색어"
          type="text"
          placeholder="검색어 입력해주세요. ( 쉼표(,)로 구분해서 입력해주세요. ) ex) 남자,상의"
          register={register("keywords")}
          errorMessage={errors.option?.color?.message}
          className="min-w-[200px] max-w-[600px] w-full"
        />

        {/* 검색어 필터 ( 색상, 사이즈, 제조연도 등 ) */}
        <Tool.Input
          name="검색어 필터"
          type="text"
          placeholder="검색어 필터 입력해주세요. ( 쉼표(,)로 구분해서 입력해주세요. ) ex) 파랑,M"
          register={register("filters")}
          errorMessage={errors.option?.color?.message}
          className="min-w-[200px] max-w-[600px] w-full"
        />

        {/* 판매 요청 버튼 */}
        <Tool.Button
          text="상품 등록"
          type="submit"
          primary
          className="min-w-[200px] max-w-[600px] w-full"
        />

        {/* 필요 시 추가할 것들 배송 관련 사항 입력 ( 출고지, 배송 방법, 택배사, 배송종류, 출고 소요기간 ) */}
      </Tool.Form>
    </>
  );
};

export default Upload;
