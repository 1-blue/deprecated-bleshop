import { useState } from "react";

// component
import Carousel from "@src/components/common/Carousel";
import Photo from "@src/components/common/Photo";

// >>> dummy data
import { getBennerPhotos } from "@src/dummy";

const Benner = () => {
  // 2022/08/22 - 현재 보여지는 광고 배너  - by 1-blue
  const [currentDot, setCurrentDot] = useState(0);

  return (
    <section className="p-2 xsm:p-3 md:p-4 space-y-1 bg-white rounded-md shadow-2xl w-full">
      <h2 className="pl-1 text-gray-800 font-bolder text-lg xs:text-xl md:text-2xl">
        광고
      </h2>

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

      <div className="pb-10" />
    </section>
  );
};

export default Benner;
