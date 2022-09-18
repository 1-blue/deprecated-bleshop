// component
import HeadInfo from "@src/components/common/HeadInfo";

const MyLoading = () => {
  return (
    <>
      <HeadInfo title="BleShop - 로딩중" />

      <article className="fixed top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-4">
        <h1 className="whitespace-pre-line text-center text-xl xs:text-2xl font-bolder">
          {"데이터를 받아오는 중입니다.\n잠시만 기다려주세요!"}
        </h1>

        <div className="mx-auto text-center space-x-1">
          <div className="inline-block w-5 h-5 bg-blue-500 rounded-full animate-loading-spinner" />
          <div
            style={{ animationDelay: "-0.1s" }}
            className="inline-block w-5 h-5 bg-blue-500 rounded-full animate-loading-spinner"
          />
          <div
            style={{ animationDelay: "-0.2s" }}
            className="inline-block w-5 h-5 bg-blue-500 rounded-full animate-loading-spinner"
          />
          <div
            style={{ animationDelay: "-0.3s" }}
            className="inline-block w-5 h-5 bg-blue-500 rounded-full animate-loading-spinner"
          />
          <div
            style={{ animationDelay: "-0.4s" }}
            className="inline-block w-5 h-5 bg-blue-500 rounded-full animate-loading-spinner"
          />
        </div>
      </article>
    </>
  );
};

export default MyLoading;
