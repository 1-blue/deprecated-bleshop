import { useCallback, useEffect, useState } from "react";
import { useSession } from "next-auth/react";

// util
import { combineClassNames, throttleHelper } from "@src/libs";

// hook
import useScrollDirection from "@src/hooks/useScrollDirection";

// component
import ToTopButton from "@src/components/Layout/ToTopButton";
import ToCreateProductButton from "@src/components/Layout/ToCreateProductButton";

const ASide = () => {
  const { data } = useSession();

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
    <aside
      className={combineClassNames(
        "fixed bottom-2 right-2 flex transition-all duration-500 space-x-2 z-10",
        locationCondition
      )}
    >
      <ToTopButton showCondition={showCondition} />
      {data?.user?.isAdmin && <ToCreateProductButton />}
    </aside>
  );
};

export default ASide;
