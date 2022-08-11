import type { User } from "@prisma/client";

// 2022/08/11 - 모든 api요청이 공통으로 갖는 타입 - by 1-blue
type ApiResponse = {
  message: string | null;
};

// 2022/08/11 - 이미지 업로드 수신 타입 - by 1-blue
export type ApiPhotoResponse = ApiResponse & {
  preSignedURL: string | null;
  photoURL: string | null;
};

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
