import React, { useState, useEffect, useCallback } from "react";

const ScrollProgress = () => {
  const [currentPositionY, setCurrentPositionY] = useState(0);

  // 2022/08/10 - 현재 스크롤 Y값 %로 구하기 - by 1-blue
  const scrollEvent = useCallback(() => {
    setCurrentPositionY(
      window.scrollY /
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight)
    );
  }, []);

  // 2022/08/10 - 스크롤 이벤트 등록 - by 1-blue
  useEffect(() => {
    window.addEventListener("scroll", scrollEvent);
    return () => window.removeEventListener("scroll", scrollEvent);
  }, [scrollEvent]);

  return (
    <aside
      className="absolute top-0 z-1 max-w-[1024px] h-[6px] shadow-lg m-0 bg-gradient-to-r from-teal-400 via-blue-400 to-indigo-400"
      style={{ width: currentPositionY * 100 + "%" }}
    />
  );
};

export default ScrollProgress;
