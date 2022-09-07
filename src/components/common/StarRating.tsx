import { useCallback } from "react";

// component
import Icon from "@src/components/common/Icon";

// type
import type { MouseEvent } from "react";
import type { UseFormSetValue } from "react-hook-form";

const arr = Array(5)
  .fill(null)
  .map((_, i) => i + 1);

type Props = {
  score: number;
  setScore: UseFormSetValue<any>;
};

const StarRating = ({ score, setScore }: Props) => {
  // 2022/09/07 - 별 클릭 ( 점수 변경 ) - by 1-blue
  const onClickStar = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      const target = e.target as HTMLElement;
      if (!target.dataset.score) return;

      setScore("score", +target.dataset.score);
    },
    [setScore]
  );

  return (
    <section className="flex space-x-1" onClick={onClickStar}>
      {arr.map((v) => (
        <button key={v} type="button">
          <Icon
            shape="star"
            className="w-6 h-6 xs:w-8 xs:h-8 text-yellow-400"
            fill={score >= v}
            score={v}
          />
        </button>
      ))}
    </section>
  );
};

export default StarRating;
