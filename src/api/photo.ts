import axios, { AxiosError } from "axios";

import { axiosInstance } from ".";

import type {
  ApiUploadPhotoResponse,
  ApiUploadPhotoBody,
  ApiUploadPhotosResponse,
  ApiUploadPhotosBody,
  ApiUpdateUserPhotoBody,
  ApiUpdateUserPhotoResponse,
  // ApiRemoveUserPhotoBody,
  ApiRemoveUserPhotoResponse,
} from "@src/types";

import { isFulFilled } from "@src/libs";

/**
 * 2022/08/11 - presignedURL을 이용해서 이미지를 업로드하는 함수 - by 1-blue
 * @param file File 형태 입력
 * @returns 업로드된 이미지 URL(photoURL)반환 ( "photoURL"가 null이 아니면 성공 )
 */
export const apiUploadPhoto = async ({
  file,
}: ApiUploadPhotoBody): Promise<ApiUploadPhotoResponse> => {
  try {
    const {
      data: { preSignedURL, photoURL, message },
    } = await axiosInstance.get<ApiUploadPhotoResponse>(
      `/photo?name=${file.name}`
    );

    // 예측 불가능한 에러
    if (!preSignedURL || !photoURL)
      return {
        photoURL,
        preSignedURL,
        message: "알 수 없는 에러입니다. 잠시후에 다시 시도해주세요!",
      };

    await axios.put(preSignedURL, file, {
      headers: { "Content-Type": file.type },
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
 * @param files FileList 형태 입력
 * @returns 업로드된 이미지 URL(photoURL)들 반환
 */
export const apiUploadPhotos = async ({
  files,
}: ApiUploadPhotosBody): Promise<ApiUploadPhotosResponse> => {
  try {
    // 각 이미지들의 "preSignedURL"의 promise 얻음
    const preSignedUrlPromiseList = [...files].map((file) =>
      axiosInstance.get<ApiUploadPhotoResponse>(`/photo?name=${file.name}`)
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
        axios.put(preSignedURL!, files[i], {
          headers: { "Content-Type": files[i].type },
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

/**
 * 2022/08/14 - 유저의 이미지 제거 - by 1-blue
 * @returns 결과 메시지
 */
export const apiRemoveUserPhoto =
  async (): Promise<ApiRemoveUserPhotoResponse> => {
    try {
      const {
        data: { message },
      } = await axiosInstance.delete<ApiRemoveUserPhotoResponse>(`/photo`);

      return { message };
    } catch (error) {
      console.error("apiRemovePhoto() >> ", error);

      if (error instanceof AxiosError) {
        return { message: error.response?.data.message };
      }

      return { message: "에러가 발생했습니다. 잠시후에 다시 시도해주세요!" };
    }
  };

/**
 * 2022/08/15 - 유저 이미지 업데이트 - by 1-blue
 * @param file 수정할 이미지 파일
 * @returns
 */
export const apiUpdateUserPhoto = async ({
  file,
}: ApiUpdateUserPhotoBody): Promise<ApiUpdateUserPhotoResponse> => {
  try {
    const {
      data: { preSignedURL, photoURL, message },
    } = await axiosInstance.put<ApiUpdateUserPhotoResponse>(
      `/photo?name=${file.name}`
    );

    // 예측 불가능한 에러
    if (!preSignedURL)
      return {
        preSignedURL,
        photoURL,
        message: "알 수 없는 에러입니다. 잠시후에 다시 시도해주세요!",
      };

    await axios.put(preSignedURL, file, {
      headers: { "Content-Type": file.type },
    });

    return { preSignedURL, photoURL, message };
  } catch (error) {
    console.error("apiUpdateUserPhoto() >> ", error);

    // 예측 가능한 에러 ( 잘못된 형식의 데이터를 전달받음 )
    if (error instanceof AxiosError) {
      const { preSignedURL, photoURL, message } = error.response?.data;

      return { preSignedURL, photoURL, message };
    }

    // 예측 불가능한 에러
    return {
      preSignedURL: null,
      photoURL: null,
      message: "이미지 업데이트에 실패했습니다. 잠시후에 다시 시도해주세요!",
    };
  }
};
