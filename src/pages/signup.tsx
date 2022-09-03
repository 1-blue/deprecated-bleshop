import { useCallback, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

// util
import { getRegExp } from "@src/libs";

// api
import apiService from "@src/api";

// component
import HeadInfo from "@src/components/common/HeadInfo";
import Tool from "@src/components/common/Tool";

// type
import type { NextPage } from "next";
import type { ApiSignUpBody } from "@src/types";
import { AxiosError } from "axios";

type SignUpForm = Omit<ApiSignUpBody, "photo"> & {
  passwordConfirm: string;
  photo?: FileList | null;
};

const SignUp: NextPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<SignUpForm>();

  // 2022/08/11 - 유저가 업로드한 이미지 경로 - by 1-blue
  const [photoURL, setPhotoURL] = useState("");

  // 2022/08/11 - 회원가입 요청 - by 1-blue
  const onSubmit = useCallback(
    async (body: SignUpForm) => {
      const toastId = toast.loading("회원가입중입니다.");

      try {
        const { id, email, name, password, phone, isAdmin } = body;

        const {
          data: { message },
        } = await apiService.authService.apiSignUp({
          id,
          email,
          name,
          password,
          phone,
          photo: photoURL,
          isAdmin,
        });

        toast.update(toastId, {
          render: message,
          type: "success",
          isLoading: false,
          autoClose: 1500,
        });

        router.push("/login");
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
    [photoURL, router]
  );

  // 2022/08/12 - 비밀번호 확인과 비교를 위함 - by 1-blue
  const password = useRef<string | null>(null);
  password.current = watch("password", "");

  // 2022/08/20 - 관리자 여부 ( 임의로 숨김 ) - by 1-blue
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <HeadInfo
        title="BleShop - 회원가입"
        description="BleShop의 회원가입 페이지입니다."
      />

      <h1 className="pt-8 pb-4 text-center text-5xl font-bold font-special">
        bleshop
      </h1>

      <Tool.Form onSubmit={handleSubmit(onSubmit)}>
        {isShow && (
          <div className="fixed top-2 left-2">
            <Tool.Checkbox name="관리자" register={register("isAdmin")} />
          </div>
        )}

        <button
          type="button"
          className="fixed top-2 right-2 bg-transparent p-1 cursor-auto"
          onClick={() => setIsShow((prev) => !prev)}
        />

        <Tool.Input
          type="text"
          name="아이디"
          placeholder="아이디를 입력해주세요."
          register={register("id", {
            required: "아이디를 입력해주세요!",
            pattern: {
              value: getRegExp("id"),
              message:
                "숫자와 영어가 최소 한 글자 이상 포함되고, 최소 6자리여야 합니다.",
            },
          })}
          errorMessage={errors.id?.message}
          className="min-w-[200px] max-w-[600px] w-full"
        />
        <Tool.Input
          type="password"
          name="비밀번호"
          placeholder="비밀번호를 입력해주세요."
          register={register("password", {
            required: "비밀번호를 입력해주세요",
            pattern: {
              value: getRegExp("password"),
              message:
                "숫자와 영어가 최소 한 글자 이상 포함되고, 최소 8자리여야 합니다.",
            },
          })}
          errorMessage={errors.password?.message}
          className="min-w-[200px] max-w-[600px] w-full"
        />
        <Tool.Input
          type="password"
          name="비밀번호 확인"
          placeholder="비밀번호를 다시 입력해주세요."
          register={register("passwordConfirm", {
            required: "비밀번호를 다시 입력해주세요.",
            validate: (value) =>
              value === password.current || "비밀번호가 일치하지 않습니다.",
          })}
          errorMessage={errors.passwordConfirm?.message}
          className="min-w-[200px] max-w-[600px] w-full"
        />
        <Tool.Input
          type="text"
          name="이름"
          placeholder="이름를 입력해주세요."
          register={register("name", {
            required: "이름를 입력해주세요",
            maxLength: {
              value: 20,
              message: "20자 이내로 입력해주세요.",
            },
          })}
          errorMessage={errors.name?.message}
          className="min-w-[200px] max-w-[600px] w-full"
        />
        <Tool.Input
          type="text"
          name="이메일"
          placeholder="이메일을 입력해주세요.  ex)email@naver.com"
          register={register("email", {
            required: "이메일을 입력해주세요",
            pattern: {
              value: getRegExp("email"),
              message: "이메일 형식에 맞게 입력해 주세요.",
            },
          })}
          errorMessage={errors.email?.message}
          className="min-w-[200px] max-w-[600px] w-full"
        />
        <Tool.Input
          type="text"
          name="휴대폰 번호"
          placeholder="휴대폰 번호를 숫자만 입력해주세요.  ex) 01021038259"
          register={register("phone", {
            required: "휴대폰 번호를 입력해주세요",
            pattern: {
              value: getRegExp("phone"),
              message: "숫자만 11자리 입력해 주세요.",
            },
            maxLength: {
              value: 11,
              message: "숫자만 11자리 입력해 주세요.",
            },
            minLength: {
              value: 11,
              message: "숫자만 11자리 입력해 주세요.",
            },
          })}
          errorMessage={errors.phone?.message}
          className="min-w-[200px] max-w-[600px] w-full"
        />
        {/* 프로필 이미지 */}
        <Tool.SinglePhoto
          photoURL={photoURL}
          setPhotoURL={setPhotoURL}
          name="프로필 이미지"
          register={register("photo")}
          kinds="user"
        />

        <Tool.Button
          type="submit"
          text="회원가입"
          className="min-w-[200px] max-w-[600px] w-full mb-4"
          primary
        />

        <Tool.Button
          type="button"
          text="로그인하러 가기"
          className="min-w-[200px] max-w-[600px] w-full mb-4 bg-gray-400 hover:bg-gray-500 focus:ring-gray-400"
          onClick={() => router.push("/login")}
          primary
        />
      </Tool.Form>
    </>
  );
};

export default SignUp;
