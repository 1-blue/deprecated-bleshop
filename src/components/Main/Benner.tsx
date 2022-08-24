import { useState } from "react";

// component
import Carousel from "@src/components/common/Carousel";
import Photo from "@src/components/common/Photo";

// >>> dummy data
import { getBennerPhotos } from "@src/dummy";

const Benner = () => {
  // 2022/08/22 - 현재 보여지는 광고 번호  - by 1-blue
  const [currentDot, setCurrentDot] = useState(0);

  return (
    <Carousel
      currentDot={currentDot}
      setCurrentDot={setCurrentDot}
      autoPlay={true}
    >
      {getBennerPhotos().map((photoURL) => (
        <Photo
          key={photoURL}
          path={photoURL}
          className="w-full h-[200px] xs:h-[350px] md:h-[500px]"
          alt="상품 이미지"
          cover
        />
      ))}
    </Carousel>
  );
};

export default Benner;
