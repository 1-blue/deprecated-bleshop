import { useCallback, useState } from "react";
import { useRecoilValueLoadable } from "recoil";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

// util
import { deleteSeparator } from "@src/libs";

// api
import apiService from "@src/api";

// atom
import { categoryState } from "@src/states";

// component
import HeadInfo from "@src/components/common/HeadInfo";
import Tool from "@src/components/common/Tool";

// type
import type { NextPage } from "next";
import type { ApiCreateProductBody } from "@src/types";
import { AxiosError } from "axios";

type ProductForm = Pick<
  ApiCreateProductBody,
  "name" | "category" | "description" | "information"
> & {
  option: {
    color: string;
    size: string;
  };
  photo: FileList;
  photos: FileList;
  keywords: string;
  filters: string;
};

const Upload: NextPage = () => {
  // 2022/08/19 - 저장된 모든 카테고리들 - by 1-blue
  const { state, contents: categories } = useRecoilValueLoadable(categoryState);
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductForm>();

  // 2022/08/19 - 대표 이미지 - by 1-blue
  const [photoURL, setPhotoURL] = useState("");
  // 2022/08/19 - 서브 이미지들 - by 1-blue
  const [photoURLs, setPhotoURLs] = useState<string[]>([]);

  // 2022/08/19 - 상품 등록 - by 1-blue
  const onCreateProduct = useCallback(
    async (body: ProductForm) => {
      const toastId = toast.loading(
        "상품을 등록중입니다. 잠시만 기다려주세요."
      );

      const productBody: ApiCreateProductBody = {
        ...body,
        option: {
          color: deleteSeparator(body.option.color, ","),
          size: deleteSeparator(body.option.size, ","),
        },
        photo: photoURL,
        photos: photoURLs,
        keywords: deleteSeparator(body.keywords, ","),
        filters: deleteSeparator(body.filters, ","),
      };

      try {
        const {
          data: { message },
        } = await apiService.productService.apiCreateProduct(productBody);

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
            render: "알 수 없는 에러입니다. 잠시후에 다시 시도해주세요!",
            type: "error",
            isLoading: false,
            autoClose: 1500,
          });
        }
      }
    },
    [photoURL, photoURLs]
  );

  // "useRecoilValueLoadable()"에 의해 사용 ( 미사용시 에러 발생 )
  if (state === "loading") return <h3>로딩중입니다...</h3>;
  if (state === "hasError")
    return <h3>에러가 발생했습니다. 새고로침을 시도해주세요.</h3>;

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
          register={register("name")}
          errorMessage={errors.name?.message}
        />

        {/* 카테고리 설정 */}
        <Tool.Select
          name="카테고리"
          register={register("category", {
            required: { message: "카테고리를 선택해주세요.", value: true },
          })}
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
        />
        <Tool.Input
          name="색상"
          type="text"
          placeholder="색상 입력해주세요. ( 쉼표(,)로 구분해서 입력해주세요. )"
          register={register("option.color")}
          errorMessage={errors.option?.color?.message}
        />

        {/* 상품 대표 이미지 등록 */}
        <Tool.SinglePhoto
          photoURL={photoURL}
          setPhotoURL={setPhotoURL}
          name="대표 이미지"
          register={register("photo", {
            required: {
              message: "대표 이미지는 필수입니다!",
              value: true,
            },
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
            maxLength: { message: "2,000자 이내로 입력해주세요!", value: 2000 },
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
        />
        <Tool.Input
          name="제조사"
          type="text"
          placeholder="제조사를 입력해주세요."
          register={register("information.company")}
          errorMessage={errors.option?.color?.message}
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
        />

        {/* 검색어 필터 ( 색상, 사이즈, 제조연도 등 ) */}
        <Tool.Input
          name="검색어 필터"
          type="text"
          placeholder="검색어 필터 입력해주세요. ( 쉼표(,)로 구분해서 입력해주세요. ) ex) 파랑,M"
          register={register("filters")}
          errorMessage={errors.option?.color?.message}
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
