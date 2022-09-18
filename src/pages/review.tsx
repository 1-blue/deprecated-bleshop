import { useRecoilValue } from "recoil";
import dynamic from "next/dynamic";

// state
import stateService from "@src/states";

// component
import HeadInfo from "@src/components/common/HeadInfo";
const MyLoading = dynamic(() => import("@src/components/common/MyLoading"), {
  suspense: true,
});
const TitleNav = dynamic(() => import("@src/components/common/Nav/TitleNav"), {
  suspense: true,
});
const Background = dynamic(
  () => import("@src/components/common/Support/Background"),
  { suspense: true }
);
const Title = dynamic(() => import("@src/components/common/Support/Title"), {
  suspense: true,
});
const Photo = dynamic(() => import("@src/components/common/Photo"), {
  suspense: true,
});
const ReviewForm = dynamic(() => import("@src/components/Review/ReviewForm"), {
  suspense: true,
});

const Review = () => {
  const product = useRecoilValue(
    stateService.reviewService.informationAboutReviewState
  );

  if (product === null) return <MyLoading />;

  return (
    <>
      <HeadInfo
        title={`BleShop - 리뷰 작성`}
        description="BleShop의 리뷰 작성 페이지입니다."
      />

      <article className="pt-4 space-y-4 flex flex-col">
        <TitleNav title="돌아가기" />

        <Background hasPadding className="space-y-2">
          <Title text={`"${product.name}"의 대표 이미지`} />
          <Photo
            path={product.photo}
            className="w-full h-[200px] xs:h-[350px] md:h-[500px]"
            alt="상품 대표 이미지"
            cover
          />
        </Background>

        <ReviewForm
          productIdx={product.productIdx}
          orderIdx={product.orderIdx}
        />
      </article>
    </>
  );
};

export default Review;
