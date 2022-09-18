import { useForm } from "react-hook-form";
import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

// api
import apiService from "@src/api";

// component
import Tool from "@src/components/common/Tool";
import StarRating from "@src/components/common/StarRating";
import Support from "@src/components/common/Support";

// tpye
import { AxiosError } from "axios";

type ReviewFormType = {
  score: number;
  contents: string;
  photos: FileList;
};

type Props = {
  productIdx: number;
  orderIdx: number;
};

const ReviewForm = ({ productIdx, orderIdx }: Props) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
    watch,
  } = useForm<ReviewFormType>({
    defaultValues: { score: 1 },
  });

  // 2022/09/07 - 리뷰 이미지들 - by 1-blue
  const [photoURLs, setPhotoURLs] = useState<string[]>([]);

  // 2022/09/07 - 리뷰 등록 - by 1-blue
  const onCreateReview = useCallback(
    async ({ contents, score }: ReviewFormType) => {
      const toastId = toast.loading(
        "이미지들을 업로드하는중입니다. 잠시 기다려주세요!"
      );

      try {
        const {
          data: { message },
        } = await apiService.reviewService.apiCreateReview({
          contents,
          photos: photoURLs,
          score,
          productIdx,
          orderIdx,
        });

        toast.update(toastId, {
          render: message,
          type: "success",
          isLoading: false,
          autoClose: 1500,
        });

        router.push(`/product/${productIdx}`);
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
    },
    [photoURLs, productIdx, orderIdx, router]
  );

  return (
    <Tool.Form
      onSubmit={handleSubmit(onCreateReview)}
      className="self-center bg-white rounded-md shadow-2xl overflow-hidden min-w-[250px] max-w-[700px] p-8 w-full"
    >
      <Support.SubTitle text="별점 등록" />
      <StarRating score={watch("score")} setScore={setValue} />

      <div className="mb-4"></div>

      <Tool.Textarea
        name="리뷰 작성"
        register={register("contents", {
          required: { message: "리뷰를 입력해주세요!", value: true },
          maxLength: {
            message:
              "500자 이내로 입력해주세요!" +
              `( ${
                getValues("contents") ? getValues("contents").length : 0
              }/500 )`,
            value: 500,
          },
        })}
        errorMessage={errors.contents?.message}
        placeholder="상품에 대한 솔직한 리뷰를 남겨주세요. ( 최소 10자, 최대 500자 )"
      />

      <Tool.MultiplePhoto
        photoURLs={photoURLs}
        setPhotoURLs={setPhotoURLs}
        name="리뷰 이미지들 등록"
        register={register("photos")}
        kinds="review"
        placeholder="리뷰 이미지들"
      />

      <Tool.Button
        text="리뷰 등록"
        type="submit"
        primary
        className="mt-8 min-w-[200px] w-full"
      />
    </Tool.Form>
  );
};

export default ReviewForm;
