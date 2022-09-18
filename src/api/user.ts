import { axiosInstance } from ".";

// type
import type {
  // ApiGetReviewsOfUserBody,
  ApiGetReviewsOfUserResponse,
  ApiUpdateUserBody,
  ApiUpdateUserPhotoBody,
  ApiUpdateUserPhotoResponse,
  ApiUpdateUserResponse,
} from "@src/types";

/**
 * 2022/08/17 - 유저 기본 정보 수정 - by 1-blue
 * @param body 수정할 데이터들 ( name, email, phone )
 * @returns 결과 메시지 ( message )
 */
const apiEditUser = (body: ApiUpdateUserBody) =>
  axiosInstance.put<ApiUpdateUserResponse>(`/user`, body);

/**
 * 2022/08/17 - 유저 프로필 이미지 수정 - by 1-blue
 * @param body aws-s3에 업로드된 이미지 path
 * @returns 결과 메시지 ( message )
 */
const apiUpdateUserPhoto = (body: ApiUpdateUserPhotoBody) =>
  axiosInstance.put<ApiUpdateUserPhotoResponse>(`/user`, body);

/**
 * 2022/09/08 - 로그인한 유저의 모든 리뷰들 요청 - by 1-blue
 * @returns
 */
const apiGetReviews = () =>
  axiosInstance.get<ApiGetReviewsOfUserResponse>("/user/review");

/**
 * 2022/08/17 - 유저 관련 api 요청 객체 - by 1-blue
 */
const userService = {
  apiEditUser,
  apiUpdateUserPhoto,
  apiGetReviews,
};

export default userService;
