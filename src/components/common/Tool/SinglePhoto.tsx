import { useCallback, useRef } from "react";
import { toast } from "react-toastify";

// component
import Icon from "@src/components/common/Icon";
import Photo from "@src/components/common/Photo";
import Label from "./Label";
import ErrorMessage from "./ErrorMessage";

// api
import apiService from "@src/api";

// type
import type { ChangeEvent } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";
import type { Dispatch, SetStateAction } from "react";
import type { PhotoKinds } from "@src/types";
import { AxiosError } from "axios";

type Props = {
  photoURL: string;
  setPhotoURL: Dispatch<SetStateAction<string>>;
  name: string;
  register: UseFormRegisterReturn;
  kinds: PhotoKinds;
  errorMessage?: string;
  disabled?: boolean;
};

const SinglePhoto = ({
  photoURL,
  setPhotoURL,
  name,
  register,
  kinds,
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

      const toastId = toast.loading(
        "이미지를 업로드하는중입니다. 잠시 기다려주세요!"
      );
      try {
        const { photoURL } = await apiService.photoService.apiCreatePhoto({
          file,
          kinds,
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
        console.error("error >> ", error);

        if (error instanceof AxiosError) {
          toast.update(toastId, {
            render: error.response?.data.message,
            type: "error",
            isLoading: false,
            autoClose: 1500,
          });
        } else {
          toast.update(toastId, {
            render: "알 수 없는 에러가 발생했습니다.",
            type: "error",
            isLoading: false,
            autoClose: 1500,
          });
        }
      }
    },
    [setPhotoURL, kinds]
  );

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
        onChange={onInputPhoto}
      />
      <div
        className="min-w-[200px] max-w-[600px] w-full h-60 xs:h-96 p-2 flex justify-center items-center bg-transparent border-dashed border-2 border-gray-400 hover:border-blue-600 text-blue-400 hover:text-blue-600 rounded-md cursor-pointer transition-colors focus:outline-none focus:text-blue-600 focus:border-blue-600"
        onClick={() => photoRef.current?.click()}
        tabIndex={0}
      >
        {photoURL === "" ? (
          <Icon shape="plus" className="w-8 h-8 xs:w-12 xs:h-12" />
        ) : (
          <Photo
            path={photoURL}
            className="h-full w-full"
            alt="대표 이미지"
            contain
          />
        )}
      </div>

      <ErrorMessage errorMessage={errorMessage} />
    </>
  );
};

export default SinglePhoto;
