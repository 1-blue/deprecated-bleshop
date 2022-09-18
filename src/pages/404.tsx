import Link from "next/link";
import dynamic from "next/dynamic";

// component
import HeadInfo from "@src/components/common/HeadInfo";
const Icon = dynamic(() => import("@src/components/common/Icon"), {
  suspense: true,
});

const NotFoundPage = () => {
  return (
    <>
      <HeadInfo title="BleShop - 잘못된 경로" />

      <article>
        <section className="flex justify-center items-center text-[#FF0000] text-[120px] xs:text-[140px] sm:text-[180px] space-x-2">
          <span>4</span>
          <svg
            version="1.1"
            id="layer"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 40 40"
            xmlSpace="preserve"
            fill="#FF0000"
            className="w-[90px] h-[90px] xs:w-[110px] xs:h-[110px] sm:w-[140px] sm:h-[140px]"
          >
            <g>
              <path d="M14.8,5.1L8.8,33C5.8,29.9,4,25.5,4,21C4,13.6,8.5,7.3,14.8,5.1 M20,0C9,0,0,9.4,0,21c0,8.4,4.7,15.5,11.4,19L20,0L20,0z" />
              <path d="M25.2,5.1C31.5,7.3,36,13.6,36,21c0,4.5-1.8,8.9-4.8,12L25.2,5.1 M20,0l8.6,40C35.3,36.5,40,29.4,40,21C40,9.4,31,0,20,0L20,0z" />
            </g>
          </svg>
          <span>4</span>
        </section>
        <section>
          <h1 className="whitespace-pre-line text-center text-xl xs:text-2xl font-bolder">
            {"찾을 수 없는 페이지 입니다.\n경로를 확인하고 다시 입력해주세요!"}
          </h1>
        </section>
        <section className="flex flex-col mt-10 text-red-400">
          <Icon
            shape="doubleDown"
            className="w-10 h-10 xs:w-14 xs:h-14 animate-bounce mx-auto"
          />
          <Link href="/">
            <a className="mx-auto px-6 py-2 xs:px-8 xs:py-4 text-lg xs:text-xl font-bolder border-2 border-red-400 rounded-md transition-colors hover:bg-red-400 hover:text-white">
              홈 페이지로 이동
            </a>
          </Link>
        </section>
      </article>
    </>
  );
};

export default NotFoundPage;
