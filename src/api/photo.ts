import axios from "axios";

import { axiosInstance } from ".";

import type { ApiPhotoResponse } from "@src/types";

type GetPreSignedURLBody = {
  name: string;
};

/**
 * 2022/08/11 - aws-s3의 presignedURL 요청 - by 1-blue
 * @param name 이미지 파일 이름 ( xx.png )
 * @returns aws-s3의 presignedURL 반환
 */
const apiGetPreSignedURL = ({ name }: GetPreSignedURLBody) =>
  axiosInstance.get<ApiPhotoResponse>(`/photo?name=${name}`);

type UploadPhotoBody = {
  photo: File;
};
/**
 * 2022/08/11 - presignedURL을 이용해서 이미지 업로드하는 함수 ( >>> 나중에 이미지 여러개 병렬적으로 처리하도록 수정하기 ) - by 1-blue
 * @param photo File 형태 입력
 * @returns 업로드된 이미지 URL(photoURL)반환 ( "photoURL"가 null이 아니면 성공 )
 */
export const apiUploadPhoto = async ({
  photo,
}: UploadPhotoBody): Promise<{
  photoURL: string | null;
  message: string | null;
}> => {
  try {
    const {
      data: { preSignedURL, photoURL, message },
    } = await apiGetPreSignedURL({ name: photo.name });

    if (!preSignedURL || !photoURL)
      return {
        photoURL: null,
        message: "이미지 업로드에 실패했습니다. 잠시후에 다시 시도해주세요!",
      };

    await axios.put(preSignedURL, photo, {
      headers: {
        "Content-Type": photo.type,
      },
    });

    return { photoURL, message };
  } catch (error) {
    console.error("apiUploadPhoto() >> ", error);

    return {
      photoURL: null,
      message: "이미지 업로드에 실패했습니다. 잠시후에 다시 시도해주세요!",
    };
  }
};
