import type { User } from "@prisma/client";

// 2022/08/11 - 모든 api요청이 공통으로 갖는 타입 - by 1-blue
type ApiResponse = {
  message: string | null;
};

// 2022/08/12 - 이미지 업로드 송신/수신 타입 - by 1-blue
export type ApiUploadPhotoBody = {
  photo: File;
};
export type ApiUploadPhotoResponse = ApiResponse & {
  preSignedURL: string | null;
  photoURL: string | null;
};

// 2022/08/12 - 이미지들 업로드 송신/수신 타입 - by 1-blue
export type ApiUploadPhotosBody = {
  photos: FileList;
};
export type ApiUploadPhotosResponse = ApiUploadPhotoResponse[];

// 2022/08/11 - 회원가입 송신/수신 타입 - by 1-blue
export type ApiSignUpBody = {
  id: string;
  password: string;
  name: string;
  email: string;
  phone: string;
  photo?: string;
};
export type ApiSignUpResponse = ApiResponse & {
  user: User | null;
};
