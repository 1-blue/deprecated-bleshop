import React, { useCallback, useEffect, useRef } from "react";

// util
import { combineClassNames } from "@src/libs";

type Props = {
  children: React.ReactNode;
  onCloseModal: () => void;
  title?: string;
  className?: string;
};

const Modal = ({ children, onCloseModal, title, className }: Props) => {
  const modalRef = useRef<null | HTMLElement>(null);

  const closeModal = useCallback(
    (e: any) => {
      if (modalRef.current === e.target) onCloseModal();
    },
    [modalRef, onCloseModal]
  );

  // 2022/08/14 - 영역 외 클릭시 메뉴 닫는 이벤트 등록 - by 1-blue
  useEffect(() => {
    window.addEventListener("click", closeModal);

    return () => window.removeEventListener("click", closeModal);
  }, [closeModal]);

  return (
    <aside
      className="fixed -top-4 left-0 bg-black/60 w-full h-full animate-fade-in z-[9]"
      ref={modalRef}
    >
      <aside
        className={combineClassNames(
          "absolute top-1/2 left-1/2 max-w-[500px] min-w-[250px] w-2/3 rounded-md bg-white -translate-x-1/2 -translate-y-1/2 overflow-y-auto",
          className ? className : ""
        )}
      >
        {title && (
          <h3 className="xs:text-xl md:text-2xl text-center text-white font-bolder py-2 xs:py-3 bg-blue-400">
            {title}
          </h3>
        )}

        {children}
      </aside>
    </aside>
  );
};

export default Modal;
