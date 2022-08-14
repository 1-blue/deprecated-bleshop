import { useCallback } from "react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

// component
import Button from "@src/components/common/Button";
import Icon from "@src/components/common/Icon";
import Photo from "@src/components/common/Photo";

// type
import type { NextPage } from "next";

const Information: NextPage = () => {
  const router = useRouter();
  const { data } = useSession();

  const onClickLogOut = useCallback(() => {
    signOut({
      callbackUrl: "/login",
      redirect: true,
    });

    toast.success("로그아웃이 완료되면 로그인페이지로 이동됩니다.");
  }, []);

  return (
    <article className="pt-4 space-y-4">
      <section className="space-y-4 p-4 bg-white rounded-md shadow-2xl">
        <div className="flex justify-center">
          <Photo
            path={data?.user?.photo?.path}
            cover
            avatar
            className="w-16 h-16 xs:w-20 xs:h-20 sm:w-32 sm:h-32 cursor-pointer"
            onClick={() => router.push("/information/edit")}
          />
        </div>

        <div>
          <section className="flex space-x-4">
            {data?.user ? (
              <>
                <Link href="/information/edit">
                  <a className="flex-1 p-2 text-center text-sm xs:text-lg sm:text-xl font-bold bg-blue-400 text-white rounded-md transition-colors hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
                    {data.user.name}
                  </a>
                </Link>

                <Button
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
        </div>
      </section>

      <section className="space-y-4 bg-white rounded-md shadow-2xl">
        <h2>최근본상품</h2>
        <ul>
          <li>리스트1</li>
          <li>리스트2</li>
          <li>리스트3</li>
        </ul>
      </section>

      <section className="bg-white rounded-md shadow-2xl overflow-hidden">
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
      </section>
    </article>
  );
};

export default Information;
