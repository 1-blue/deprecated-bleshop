import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

// component
import HeadInfo from "@src/components/common/HeadInfo";
import Tool from "@src/components/common/Tool";

// type
import type { NextPage } from "next";
import type { ApiLogInBody } from "@src/types";

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
      try {
        const result = await signIn("credentials", {
          redirect: false,
          ...body,
        });

        if (result?.error) return toast.error(result.error);

        toast.success("로그인 성공. 메인 페이지로 이동합니다.");
        router.push("/");
      } catch (error) {
        console.error("error >> ", error);

        toast.error(
          "알 수 없는 에러로 로그인에 실패했습니다. 잠시후에 다시 시도해주세요!"
        );
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

      <Tool.Form onSubmit={handleSubmit(onSubmit)}>
        <Tool.Input
          name="아이디"
          type="text"
          register={register("id")}
          placeholder="아이디를 입력하세요."
          errorMessage={errors.id?.message}
        />
        <Tool.Input
          name="비밀번호"
          type="password"
          register={register("password")}
          placeholder="비밀번호를 입력하세요."
          errorMessage={errors.password?.message}
        />

        <Tool.Button
          type="submit"
          text="로그인"
          className="min-w-[300px] max-w-[600px] w-full mb-4"
          primary
        />

        <Tool.Button
          type="button"
          text="회원가입하러 가기"
          className="min-w-[300px] max-w-[600px] w-full mb-4 bg-gray-400 hover:bg-gray-500 focus:ring-gray-400"
          onClick={() => router.push("/signup")}
          primary
        />
      </Tool.Form>
    </>
  );
};

export default LogIn;
