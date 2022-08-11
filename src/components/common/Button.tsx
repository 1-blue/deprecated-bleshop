import React, { useCallback } from "react";
import { toast } from "react-toastify";

// util
import { combineClassNames } from "@src/libs";

// component
import Spinner from "@src/components/common/Spinner";

type Props = {
  type: "button" | "submit";
  text: string;
  className?: string;
  primary?: boolean;
  loading?: boolean;
  onClick?: () => void;
};

const Button = ({
  type,
  text,
  className,
  primary,
  loading,
  onClick,
}: Props) => {
  // 2022/08/11 - 로딩 여부로 버튼 클릭 가능 판단하는 함수 및 기능 전달 시 사용 - by 1-blue
  const onClickButton = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (typeof onClick === "function") onClick();

      if (!loading) return;

      e.preventDefault();
      toast.warning("회원가입 처리중입니다. 잠시 기다려주세요!");
    },
    [loading, onClick]
  );

  return (
    <button
      type={type}
      className={combineClassNames(
        primary
          ? "py-3 text-white font-semibold rounded-md bg-blue-400 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          : "",
        className ? className : ""
      )}
      onClick={onClickButton}
    >
      {loading ? (
        <React.Suspense fallback={<span>Loading...</span>}>
          <Spinner kinds="button" />
        </React.Suspense>
      ) : (
        text
      )}
    </button>
  );
};

export default Button;
