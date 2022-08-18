import { useCallback, useRef } from "react";
import { toast } from "react-toastify";

// component
import Icon from "@src/components/common/Icon";
import Photo from "@src/components/common/Photo";

// api
import apiService from "@src/api";

// type
import type { ChangeEvent } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";
import type { Dispatch, SetStateAction } from "react";
import { AxiosError } from "axios";

type Props = {
  photoURL: string;
  setPhotoURL: Dispatch<SetStateAction<string>>;
  name: string;
  register: UseFormRegisterReturn;
  errorMessage?: string;
  disabled?: boolean;
};

const SinglePhoto = ({
  photoURL,
  setPhotoURL,
  name,
  register,
  errorMessage,
  disabled,
}: Props) => {
  // 2022/08/18 - photo ref 떼내기 - by 1-blue
  const photoRef = useRef<HTMLInputElement | null>(null);
  const { ref, ...restRegister } = register;

  // 2022/08/18 - 이미지 선택 시 실행 - by 1-blue
  const onInputPhoto = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files) return;
      if (e.target.files?.length === 0) return;

      const file = e.target.files[0];

      try {
        const toastId = toast.loading(
          "이미지를 업로드하는중입니다. 잠시 기다려주세요!"
        );

        const { photoURL } = await apiService.photoService.apiCreatePhoto({
          file,
        });

        if (!photoURL)
          return toast.update(toastId, {
            render: "이미지를 업로드하지 못했습니다. 다시 시도해주세요!",
            type: "warning",
            isLoading: false,
          });

        setPhotoURL(photoURL);

        toast.update(toastId, {
          render: "이미지를 업로드했습니다.",
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
    [setPhotoURL]
  );

  return (
    <>
      <label
        htmlFor={name}
        className="min-w-[200px] max-w-[600px] w-full font-bolder text-xs xs:text-sm md:text-base cursor-pointer"
      >
        {name}
      </label>
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
        onChange={onInputPhoto}
      />
      <div
        className="min-w-[200px] max-w-[600px] w-full h-60 xs:h-96 p-2 flex justify-center items-center bg-transparent border-2 border-blue-400 hover:border-blue-600 text-blue-400 hover:text-blue-600 rounded-md cursor-pointer transition-colors"
        onClick={() => photoRef.current?.click()}
      >
        {photoURL === "" ? (
          <Icon shape="plus" className="w-8 h-8 xs:w-12 xs:h-12" />
        ) : (
          <Photo
            path={photoURL}
            className="h-full w-full"
            alt="상품 대표 이미지"
            contain
          />
        )}
      </div>
      <span className="self-start text-red-600 mb-4 mt-1 font-semibold text-[8px] xs:text-xs">
        {errorMessage && "※" + " " + errorMessage}
      </span>
    </>
  );
};

export default SinglePhoto;