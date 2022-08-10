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
      className="fixed top-0 z-20 max-w-[1024px] h-1 shadow-lg m-0 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600"
      style={{
        width: `${currentPositionY * 100}%`,
      }}
    />
  );
};

export default ScrollProgress;
