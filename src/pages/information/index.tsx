import { useCallback } from "react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

// component
import HeadInfo from "@src/components/common/HeadInfo";
import Tool from "@src/components/common/Tool";
import Icon from "@src/components/common/Icon";
import Photo from "@src/components/common/Photo";
import Support from "@src/components/common/Support";

// type
import type { NextPage } from "next";

const Information: NextPage = () => {
  const router = useRouter();
  const { data } = useSession();

  const onClickLogOut = useCallback(() => {
    const toastId = toast.loading("로그아웃중입니다.");

    signOut({ callbackUrl: "/login", redirect: true });

    toast.update(toastId, {
      render: "로그아웃이 완료되었습니다. 로그인페이지로 이동합니다.",
      type: "success",
      isLoading: false,
      autoClose: 1500,
    });
  }, []);

  return (
    <>
      <HeadInfo
        title="BleShop - 회원 정보"
        description="BleShop의 회원 정보 페이지입니다."
      />

      <article className="pt-4 space-y-4">
        <Support.Background className="space-y-2 sm:space-y-4" hasPadding>
          <div className="flex justify-center">
            <Photo
              path={data?.user?.photo?.path}
              cover
              avatar
              isFocus
              className="w-16 h-16 xs:w-20 xs:h-20 sm:w-32 sm:h-32 cursor-pointer"
              onClick={() => router.push("/information/update")}
            />
          </div>

          <section className="flex space-x-4">
            {data?.user ? (
              <>
                <Link href="/information/update">
                  <a className="flex-1 p-2 text-center text-sm xs:text-lg sm:text-xl font-bold bg-blue-400 text-white rounded-md transition-colors hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
                    {data.user.name}
                  </a>
                </Link>

                <Tool.Button
                  type="button"
                  text="로그아웃"
                  onClick={onClickLogOut}
                  className="flex-1 p-2 text-center text-sm xs:text-lg sm:text-xl font-bold bg-gray-400 text-white rounded-md transition-colors hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                />
              </>
            ) : (
              <>
                <Link href="/login">
                  <a className="flex-1 p-2 text-center text-sm xs:text-lg sm:text-xl font-bold bg-gray-400 text-white rounded-md transition-colors hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 focus:bg-blue-500">
                    로그인
                  </a>
                </Link>

                <Link href="/signup">
                  <a className="flex-1 p-2 text-center text-sm xs:text-lg sm:text-xl font-bold bg-gray-400 text-white rounded-md transition-colors hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 focus:bg-blue-500">
                    회원가입
                  </a>
                </Link>
              </>
            )}
          </section>
        </Support.Background>

        <Support.Background hasPadding>
          <h2>최근본상품</h2>
          <ul>
            <li>리스트1</li>
            <li>리스트2</li>
            <li>리스트3</li>
          </ul>
        </Support.Background>

        <Support.Background className="overflow-hidden">
          <ul className="divide-y-2">
            <li>
              <Link href="/">
                <a className="flex p-4 items-center transition-colors hover:bg-blue-400 hover:text-white focus:outline-none focus:bg-blue-400 focus:text-white">
                  <Icon shape="catalog" className="w-6 h-6 sm:w-8 sm:h-8" />
                  <span className="font-bolder sm:text-lg pl-3 flex-1">
                    주문목록
                  </span>
                  <Icon shape="arrowRight" className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="flex p-4 items-center transition-colors hover:bg-blue-400 hover:text-white focus:outline-none focus:bg-blue-400 focus:text-white">
                  <Icon shape="star" className="w-6 h-6 sm:w-8 sm:h-8" />
                  <span className="font-bolder sm:text-lg pl-3 flex-1">
                    리뷰관리
                  </span>
                  <Icon shape="arrowRight" className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              </Link>
            </li>
          </ul>
        </Support.Background>
      </article>
    </>
  );
};

export default Information;
