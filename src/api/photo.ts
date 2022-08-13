import axios, { AxiosError } from "axios";

import { axiosInstance } from ".";

import type {
  ApiUploadPhotoResponse,
  ApiUploadPhotoBody,
  ApiUploadPhotosResponse,
  ApiUploadPhotosBody,
} from "@src/types";

import { isFulFilled } from "@src/libs";

/**
 * 2022/08/11 - presignedURL을 이용해서 이미지를 업로드하는 함수 - by 1-blue
 * @param photo File 형태 입력
 * @returns 업로드된 이미지 URL(photoURL)반환 ( "photoURL"가 null이 아니면 성공 )
 */
export const apiUploadPhoto = async ({
  photo,
}: ApiUploadPhotoBody): Promise<ApiUploadPhotoResponse> => {
  try {
    const {
      data: { preSignedURL, photoURL, message },
    } = await axiosInstance.get<ApiUploadPhotoResponse>(
      `/photo?name=${photo.name}`
    );

    // 예측 불가능한 에러
    if (!preSignedURL || !photoURL)
      return {
        photoURL,
        preSignedURL,
        message: "알 수 없는 에러입니다. 잠시후에 다시 시도해주세요!",
      };

    await axios.put(preSignedURL, photo, {
      headers: { "Content-Type": photo.type },
    });

    return { photoURL, preSignedURL, message };
  } catch (error) {
    console.error("apiUploadPhoto() >> ", error);

    // 예측 가능한 에러 ( 잘못된 형식의 데이터를 전달받음 )
    if (error instanceof AxiosError) {
      const { preSignedURL, photoURL, message } = error.response?.data;

      return { photoURL, preSignedURL, message };
    }

    // 예측 불가능한 에러
    return {
      photoURL: null,
      preSignedURL: null,
      message: "이미지 업로드에 실패했습니다. 잠시후에 다시 시도해주세요!",
    };
  }
};

/**
 * 2022/08/12 - presignedURL을 이용해서 이미지들을 업로드하는 함수 - by 1-blue
 * @param photos FileList 형태 입력
 * @returns 업로드된 이미지 URL(photoURL)들 반환
 */
export const apiUploadPhotos = async ({
  photos,
}: ApiUploadPhotosBody): Promise<ApiUploadPhotosResponse> => {
  try {
    // 각 이미지들의 "preSignedURL"의 promise 얻음
    const preSignedUrlPromiseList = [...photos].map((photo) =>
      axiosInstance.get<ApiUploadPhotoResponse>(`/photo?name=${photo.name}`)
    );

    // promise 병렬 처리
    const preSignedUrlPromiseResultList = await Promise.allSettled(
      preSignedUrlPromiseList
    );

    // 필요한 값만 추출 ( message, preSignedURL, photoURL )
    const preSignedUrlResultList = preSignedUrlPromiseResultList
      .filter(isFulFilled)
      .map((url) => ({ ...url.value.data }));

    // 각 이미지 업로드 promise 얻음
    const photoPromiseList = preSignedUrlResultList.map(
      ({ preSignedURL }, i) => {
        axios.put(preSignedURL!, photos[i], {
          headers: { "Content-Type": photos[i].type },
        });
      }
    );

    // 병렬 처리
    await Promise.allSettled(photoPromiseList);

    return preSignedUrlResultList;
  } catch (error) {
    console.error("apiUploadPhotos() >> ", error);

    // 예측 가능한 에러 ( 잘못된 형식의 데이터를 전달받음 )
    if (error instanceof AxiosError) {
      const { preSignedURL, photoURL, message } = error.response?.data;

      return [{ photoURL, preSignedURL, message }];
    }

    // 예측 불가능한 에러
    return [
      {
        photoURL: null,
        preSignedURL: null,
        message: "이미지 업로드에 실패했습니다. 잠시후에 다시 시도해주세요!",
      },
    ];
  }
};
