import { useCallback, useEffect, useState } from "react";

type Props = {
  value: string;
  time: number;
};

/**
 * 2022/08/23 - "value"가 변하고 "time"이 지난 이후에 실행 가능 여부 반환 - by 1-blue
 * @param props "value", "time" 감시할 값과 기다릴 시간
 * @returns 재실행 가능 여부 반환
 */
const useDebounce = ({ value, time }: Props) => {
  const [debounce, setDebounce] = useState(false);
  // 2022/08/23 - 디바운스 적용할 때 사용하는 함수 - by 1-blue
  const debounceKeyword = useCallback(() => setDebounce(true), [setDebounce]);
  // 2022/08/23 - 디바운스 적용 - by 1-blue
  useEffect(() => {
    const timerId = setTimeout(debounceKeyword, time);

    return () => {
      clearTimeout(timerId);
      setDebounce(false);
    };
  }, [debounceKeyword, time, setDebounce, value]);

  return [debounce];
};

export default useDebounce;
