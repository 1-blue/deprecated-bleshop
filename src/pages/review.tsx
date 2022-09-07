import { useRecoilValue } from "recoil";

// state
import stateService from "@src/states";

// component
import HeadInfo from "@src/components/common/HeadInfo";
import MyLoading from "@src/components/common/MyLoading";
import Nav from "@src/components/common/Nav";
import Support from "@src/components/common/Support";
import Photo from "@src/components/common/Photo";
import ReviewForm from "@src/components/Review/ReviewForm";

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
        <Nav.TitleNav title="돌아가기" />

        <Support.Background hasPadding className="space-y-2">
          <Support.Title text={`"${product.name}"의 대표 이미지`} />
          <Photo
            path={product.photo}
            className="w-full h-[200px] xs:h-[350px] md:h-[500px]"
            alt="상품 대표 이미지"
            cover
          />
        </Support.Background>

        <ReviewForm
          productIdx={product.productIdx}
          orderIdx={product.orderIdx}
        />
      </article>
    </>
  );
};

export default Review;
