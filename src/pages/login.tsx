import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

// component
import HeadInfo from "@src/components/common/HeadInfo";
const Form = dynamic(() => import("@src/components/common/Tool/Form"), {
  suspense: true,
});
const Input = dynamic(() => import("@src/components/common/Tool/Input"), {
  suspense: true,
});
const Button = dynamic(() => import("@src/components/common/Tool/Button"), {
  suspense: true,
});

// type
import type { NextPage } from "next";
import type { ApiLogInBody } from "@src/types";
import { AxiosError } from "axios";

const LogIn: NextPage = () => {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ApiLogInBody>();

  // 2022/08/12 - 로그인 요청 - by 1-blue
  const onSubmit = useCallback(
    async (body: ApiLogInBody) => {
      const toastId = toast.loading("로그인중입니다.");

      try {
        const result = await signIn("credentials", {
          redirect: false,
          ...body,
        });

        if (result?.error)
          return toast.update(toastId, {
            render: result.error,
            type: "error",
            isLoading: false,
            autoClose: 1500,
          });

        toast.update(toastId, {
          render: "로그인 성공. 메인 페이지로 이동합니다.",
          type: "success",
          isLoading: false,
          autoClose: 1500,
        });
        router.push("/");
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
    [router]
  );

  return (
    <>
      <HeadInfo
        title="BleShop - 로그인"
        description="BleShop의 로그인 페이지입니다."
      />

      <h1 className="pt-8 pb-4 text-center text-5xl font-bold font-special">
        bleshop
      </h1>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="아이디"
          type="text"
          register={register("id", { required: "아이디를 입력해주세요!" })}
          placeholder="아이디를 입력하세요."
          errorMessage={errors.id?.message}
          className="min-w-[200px] max-w-[600px] w-full"
        />
        <Input
          name="비밀번호"
          type="password"
          register={register("password", {
            required: "비밀번호를 입력해주세요!",
          })}
          placeholder="비밀번호를 입력하세요."
          errorMessage={errors.password?.message}
          className="min-w-[200px] max-w-[600px] w-full"
        />

        <Button
          type="submit"
          text="로그인"
          className="min-w-[200px] max-w-[600px] w-full mb-4"
          primary
        />

        <Button
          type="button"
          text="Kakao"
          className="min-w-[200px] max-w-[600px] w-full mb-4 bg-yellow-400 py-2 xs:py-3 text-xs xs:text-sm md:text-base text-white font-semibold rounded-sm xs:rounded-md hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 transition-colors"
          onClick={() => signIn("kakao")}
        />

        <Button
          type="button"
          text="Google"
          className="min-w-[200px] max-w-[600px] w-full mb-4 bg-teal-400 py-2 xs:py-3 text-xs xs:text-sm md:text-base text-white font-semibold rounded-sm xs:rounded-md hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-colors"
          onClick={() => signIn("google")}
        />

        <Button
          type="button"
          text="회원가입하러 가기"
          className="min-w-[200px] max-w-[600px] w-full mb-4 bg-indigo-400 py-2 xs:py-3 text-xs xs:text-sm md:text-base text-white font-semibold rounded-sm xs:rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors"
          onClick={() => router.push("/signup")}
        />
      </Form>
    </>
  );
};

export default LogIn;
