import { useState } from "react";
import Slider from "react-slick";

// util
import { combineClassNames } from "@src/libs";

// css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// type
import type { Settings } from "react-slick";
import type { Dispatch, SetStateAction } from "react";

type Props = {
  children: React.ReactNode;
  currentDot: number;
  setCurrentDot: Dispatch<SetStateAction<number>>;
};

const Carousel = ({ children, currentDot, setCurrentDot }: Props) => {
  const [settings, setSettings] = useState<Settings>({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: false,
    beforeChange: (prev, next) => setCurrentDot(next),
    appendDots: (dots) => <ul style={{ bottom: "-40px" }}>{dots}</ul>,
  });

  return (
    <Slider
      className="min-w-[200px] max-w-[600px]"
      {...settings}
      customPaging={(i) => (
        <div
          className={combineClassNames(
            "w-6 border-2 border-blue-400 hover:border-blue-600 hover:bg-blue-600 hover:text-white transition-colors focus:outline-none focus:bg-blue-600 focus:text-white focus:border-blue-600",
            currentDot === i ? "bg-blue-400 text-white" : ""
          )}
          tabIndex={0}
        >
          {i + 1}
        </div>
      )}
    >
      {children}
    </Slider>
  );
};

export default Carousel;
