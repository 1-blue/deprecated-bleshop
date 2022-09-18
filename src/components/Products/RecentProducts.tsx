import { useEffect, useState } from "react";
import Link from "next/link";

// component
import Support from "@src/components/common/Support";
import Carousel from "@src/components/common/Carousel";
import Photo from "@src/components/common/Photo";

// type
import type { RecentProduct } from "@src/types";

const RecentProducts = () => {
  // 2022/09/11 - 최근 본 상품들 - by 1-blue
  const [recentProducts, setReconetProducts] = useState<RecentProduct[]>([]);

  // 2022/09/11 - "localStorage"에서 최근 본 상품 가져오기 - by 1-blue
  useEffect(() => {
    setReconetProducts(JSON.parse(localStorage.getItem("watched") || "[]"));
  }, []);

  // 2022/09/11 - 현재 보여지는 광고 번호  - by 1-blue
  const [currentDot, setCurrentDot] = useState(0);

  if (recentProducts.length === 0)
    return <Support.Error text="** 최근 본 상품이 없습니다. **" />;

  return (
    <Carousel
      currentDot={currentDot}
      setCurrentDot={setCurrentDot}
      slidesToShow={3}
      dotPos={30}
    >
      {recentProducts.map((product) => (
        <div key={product.idx} className="px-2">
          <Link href={`/product/${product.idx}`}>
            <a>
              <Photo
                path={product.photo}
                className="w-full h-[100px] xsm:h-[160px] md:h-[200px]"
                alt="상품 이미지"
                cover
              />
              <span className="inline-block w-full text-center font-bold text-xs xs:text-sm sm:text-base">
                {product.name}
              </span>
            </a>
          </Link>
        </div>
      ))}
    </Carousel>
  );
};

export default RecentProducts;
