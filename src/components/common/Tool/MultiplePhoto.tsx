import { useCallback, useRef, useState } from "react";
import { toast } from "react-toastify";

// component
import Icon from "@src/components/common/Icon";
import Photo from "@src/components/common/Photo";
import Carousel from "@src/components/common/Carousel";
import Label from "./Label";
import ErrorMessage from "./ErrorMessage";

// api
import apiService from "@src/api";

// util
import { combineClassNames } from "@src/libs";

// type
import type { Dispatch, SetStateAction } from "react";
import type { ChangeEvent } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";
import { AxiosError } from "axios";

type Props = {
  photoURLs: string[];
  setPhotoURLs: Dispatch<SetStateAction<string[]>>;
  name: string;
  register: UseFormRegisterReturn;
  placeholder?: string;
  errorMessage?: string;
  disabled?: boolean;
};

const MultiplePhoto = ({
  photoURLs,
  setPhotoURLs,
  name,
  register,
  errorMessage,
  disabled,
}: Props) => {
  // 2022/08/18 - photo ref 떼내기 - by 1-blue
  const photoRef = useRef<HTMLInputElement | null>(null);
  const { ref, ...restRegister } = register;

  // 2022/08/18 - 추가 이미지들 선택 시 실행 - by 1-blue
  const onInputPhotos = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files) return;
      if (e.target.files?.length === 0) return;
      if (photoURLs.length + e.target.files.length >= 9)
        return toast.error("이미지는 최대 8개까지 등록할 수 있습니다.");

      const files = e.target.files;

      try {
        const toastId = toast.loading(
          "이미지들을 업로드하는중입니다. 잠시 기다려주세요!"
        );

        const response = await apiService.photoService.apiCreatePhotos({
          files,
        });

        if (response.length === 0)
          return toast.update(toastId, {
            render: "이미지들을 업로드하지 못했습니다. 다시 시도해주세요!",
            type: "warning",
            isLoading: false,
          });

        // 생성된 이미지만 필터링
        const filteredPhotoURLs = response
          .map(({ photoURL }) => photoURL)
          .filter(
            (photoURL): photoURL is string => typeof photoURL === "string"
          );

        /**
         * >>> 이미지들을 업로드할 때까지 기다렸다가 실행하는데도 403 에러 발생
         * 브라우저에서 바로 url 입력해서 접근하거나
         * 코드 변경으로 인한 새로고침시에는 정상적으로 이미지를 렌더링함
         *
         * 접근은 되는데 403 에러인데 타이머를 길게 걸어주면 정상적으로 작동함
         * 정확히 어떤 부분이 문제인지 파악하지 못해서 임시로 타이머를 이용해서 동작하게 만듦
         */
        await new Promise((resolve) => {
          setTimeout(() => resolve(0), 500 * filteredPhotoURLs.length);
        });

        setPhotoURLs((prev) => [...prev, ...filteredPhotoURLs]);

        toast.update(toastId, {
          render: "이미지들을 업로드했습니다.",
          type: "success",
          isLoading: false,
          autoClose: 1500,
        });
      } catch (error) {
        console.error(error);
        if (error instanceof AxiosError) {
          toast.error(error.response?.data.message);
        } else {
          toast.error(
            "알 수 없는 에러가 발생했습니다. 새로고침후에 다시 시도해주세요!"
          );
        }
      }
    },
    [setPhotoURLs, photoURLs]
  );

  // 2022/08/19 - 추가 이미지중에 현재 선택한 이미지 번호 - by 1-blue
  const [currentDot, setCurrentDot] = useState<number>(0);

  // 2022/08/19 - 추가 이미지 제거 시 실행 - by 1-blue
  const onDeletePhoto = useCallback(() => {
    let name = "";

    // 브라우저에서 제거
    setPhotoURLs((prev) =>
      prev.filter((v, i) => {
        if (i !== currentDot) return true;

        name = v;
        return false;
      })
    );

    // s3에서 제거
    apiService.photoService.apiDeletePhoto({ name });
  }, [currentDot, setPhotoURLs]);

  return (
    <>
      <Label name={name} />

      <input
        id={name}
        type="file"
        accept="image/*"
        {...restRegister}
        ref={(e) => {
          ref(e);
          photoRef.current = e;
        }}
        disabled={disabled}
        hidden
        onChange={onInputPhotos}
        multiple
      />
      <div
        onClick={() => photoURLs.length === 0 && photoRef.current?.click()}
        className={combineClassNames(
          "min-w-[200px] max-w-[600px] w-full h-full min-h-[200px] xs:min-h-[300px] md:min-h-[400px] p-2 flex justify-center items-center bg-transparent border-2 border-dashed border-gray-400 hover:border-blue-600 text-blue-400 hover:text-blue-600 rounded-md transition-colors focus:outline-none focus:border-blue-600 focus:text-blue-600",
          photoURLs.length === 0 ? "cursor-pointer" : ""
        )}
        tabIndex={0}
      >
        {photoURLs.length === 0 ? (
          <Icon shape="plus" className="w-12 h-12" />
        ) : (
          <Carousel currentDot={currentDot} setCurrentDot={setCurrentDot}>
            {photoURLs.map((photoURL) => (
              <div key={photoURL} className="relative">
                <button
                  type="button"
                  className="absolute top-[6px] right-[6px] z-[1]"
                  onClick={onDeletePhoto}
                  tabIndex={-1}
                >
                  ❌
                </button>
                <Photo
                  path={photoURL}
                  className="w-full h-[200px] xs:h-[300px] md:h-[400px]"
                  alt="상품 이미지"
                  contain
                />
              </div>
            ))}
          </Carousel>
        )}
      </div>

      <ErrorMessage errorMessage={errorMessage} />
    </>
  );
};

export default MultiplePhoto;
