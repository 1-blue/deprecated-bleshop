import { useCallback, useEffect, useState } from "react";

// util
import { combineClassNames, throttleHelper } from "@src/libs";

// hook
import useScrollDirection from "@src/hooks/useScrollDirection";

// component
import Icon from "@src/components/common/Icon";

const ToTopButton = () => {
  // 2022/08/10 - 현재 가로 길이 - by 1-blue
  const [screenWidth, setScreenWidth] = useState(0);

  // 2022/08/10 - 리사이즈일 경우 실행할 이벤트 함수 - by 1-blue
  const handleResize = useCallback(() => setScreenWidth(window.innerWidth), []);
  // 2022/08/10 - 쓰로틀링적용한 이벤트 함수 - by 1-blue
  const throttleResize = throttleHelper(handleResize, 100);

  // 2022/08/10 - 리사이즈 이벤트 등록 - by 1-blue
  useEffect(() => {
    window.addEventListener("resize", throttleResize);
    return () => window.removeEventListener("resize", throttleResize);
  }, [throttleResize]);

  // 2022/08/10 - 가로 길이, 스크롤 방향에 의해서 버튼 위치 결정 조건 - by 1-blue
  const [isUp, isBottom, pageY] = useScrollDirection(50);
  const locationCondition =
    screenWidth >= 1150
      ? "bottom-2"
      : isBottom
      ? "bottom-[64px]"
      : isUp
      ? "bottom-2"
      : "bottom-[64px]";
  const showCondition = pageY < 100 ? "opacity-0" : "opacity-75";

  return (
    <button
      type="button"
      className={combineClassNames(
        "fixed bottom-2 right-2 rounded-full bg-white border border-gray-300 shadow-md p-2 flex flex-col items-center transition-all duration-500 hover:text-blue-600 hover:border-blue-600",
        showCondition,
        locationCondition
      )}
      onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
    >
      <Icon shape="doubleUp" className="w-5 h-5" />
      <span className="text-[8px]">맨위로</span>
    </button>
  );
};

export default ToTopButton;
