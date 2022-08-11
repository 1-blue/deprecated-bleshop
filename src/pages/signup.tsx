import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

// api
import { apiSignUp, apiUploadPhoto } from "@src/api";

// component
import Input from "@src/components/common/Input";
import Button from "@src/components/common/Button";
import Photo from "@src/components/common/Photo";

// type
import type { NextPage } from "next";
import type { ApiSignUpBody } from "@src/types";
import { AxiosError } from "axios";

type SignUpForm = Omit<ApiSignUpBody, "photo"> & { photo?: FileList | null };

const SignUp: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<SignUpForm>();
  // 2022/08/11 - 유저가 업로드한 이미지 경로 - by 1-blue
  const [photoURL, setPhotoURL] = useState("");

  // 2022/08/11 - 회원가입 요청 - by 1-blue
  const onSubmit = useCallback(
    async (body: SignUpForm) => {
      try {
        const {
          data: { message },
        } = await apiSignUp({ ...body, photo: photoURL });

        toast.success(message);
      } catch (error) {
        console.error(error);

        if (error instanceof AxiosError) {
          toast.error(error.response?.data.message);
        } else {
          toast.error("알 수 없는 에러입니다. 잠시후에 다시 시도해주세요!");
        }
      }
    },
    [photoURL]
  );

  // 2022/08/11 - 프로필 이미지 S3에 업로드 - by 1-blue
  const photo = watch("photo");
  useEffect(() => {
    if (!photo) return;

    apiUploadPhoto({ photo: photo[0] })
      .then(({ photoURL, message }) => {
        if (!photoURL) return;

        setPhotoURL(photoURL);
        toast.success(message);
      })
      .catch((error) => {
        console.error(error);

        if (error instanceof AxiosError) {
          toast.error(error.response?.data.message);
        } else {
          toast.error(
            "알 수 없는 에러가 발생했습니다. 새로고침후에 다시 시도해주세요!"
          );
        }
      });

    setValue("photo", null);
  }, [photo, setValue]);

  return (
    <>
      <h1 className="pt-8 pb-4 text-center text-5xl font-bold font-special">
        bleshop
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center"
      >
        <Input
          type="text"
          name="id"
          placeholder="아이디를 입력해주세요."
          register={register("id", {
            required: "아이디를 입력해주세요",
          })}
          errorMessage={errors.id?.message}
        />
        <Input
          type="text"
          name="password"
          placeholder="비밀번호를 입력해주세요."
          register={register("password", {
            required: "비밀번호를 입력해주세요",
          })}
          errorMessage={errors.password?.message}
        />
        <Input
          type="text"
          name="name"
          placeholder="이름를 입력해주세요."
          register={register("name", {
            required: "이름를 입력해주세요",
          })}
          errorMessage={errors.name?.message}
        />
        <Input
          type="text"
          name="email"
          placeholder="이메일을 입력해주세요.  ex)email@naver.com"
          register={register("email", {
            required: "이메일을 입력해주세요",
          })}
          errorMessage={errors.email?.message}
        />
        <Input
          type="text"
          name="phone"
          placeholder="휴대폰 번호를 숫자만 입력해주세요.  ex) 01021038259"
          register={register("phone", {
            required: "휴대폰 번호를 입력해주세요",
          })}
          errorMessage={errors.phone?.message}
        />
        {/* 프로필 이미지 */}
        <div className="min-w-[300px] max-w-[600px] w-full flex flex-col items-center space-x-3 mb-4">
          <label
            htmlFor="picture"
            className="cursor-pointer py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium mb-4 transition-colors hover:bg-blue-400 hover:text-white focus:bg-blue-400 focus:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1"
            tabIndex={0}
          >
            프로필 사진 추가/변경
            <input
              {...register("photo")}
              id="picture"
              type="file"
              className="hidden"
              accept="image/*"
            />
          </label>

          <Photo
            path={photoURL}
            className="h-96 w-full"
            alt="유저가 방금 업로드한 프로필 이미지"
            contain
          />
        </div>

        <Button
          type="submit"
          text="회원가입"
          className="min-w-[300px] max-w-[600px] w-full mb-4"
          primary
        />
      </form>
    </>
  );
};

export default SignUp;
