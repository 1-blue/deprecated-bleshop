import type { Address, User } from "@prisma/client";

// 2022/08/11 - 모든 api요청이 공통으로 갖는 타입 - by 1-blue
type ApiResponse = {
  message: string | null;
};

// 2022/08/12 - 단일 이미지 업로드 송신/수신 타입 - by 1-blue
export type ApiUploadPhotoBody = { file: File };
export type ApiUploadPhotoResponse = ApiResponse & {
  preSignedURL: string | null;
  photoURL: string | null;
};

// 2022/08/12 - 여러 이미지들 업로드 송신/수신 타입 - by 1-blue
export type ApiUploadPhotosBody = { files: FileList };
export type ApiUploadPhotosResponse = ApiUploadPhotoResponse[];

// 2022/08/14 - 유저 이미지 제거 송신/수신 타입 - by 1-blue
export type ApiRemoveUserPhotoBody = {};
export type ApiRemoveUserPhotoResponse = ApiResponse;

// 2022/08/14 - 유저 이미지 업데이트 송신/수신 타입 - by 1-blue
export type ApiUpdateUserPhotoBody = { file: File };
export type ApiUpdateUserPhotoResponse = ApiResponse & {
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
export type ApiSignUpResponse = ApiResponse & { user: User | null };

// 2022/08/12 - 로그인 송신/수신 타입 - by 1-blue
export type ApiLogInBody = { id: string; password: string };
export type ApiLogInResponse = ApiResponse & {};

// 2022/08/14 - 유저 일반 정보 수정 송신/수신 타입 ( name, email, phone ) - by 1-blue
export type ApiEditUserBody = Pick<User, "name" | "email" | "phone">;
export type ApiEditUserResponse = ApiResponse & { user?: User | null };

// 2022/08/14 - 유저 이미지 수정 송신/수신 타입 - by 1-blue
export type ApiEditUserPhotoBody = { idx: number; photo: string };
export type ApiEditUserPhotoResponse = ApiResponse;

// 2022/08/15 - 주소 생성 송신/수신 타입 - by 1-blue
export type ApiCreateAddressBody = {
  name: string;
  address: string;
  residence: string;
  phone: string;
  message: string;
  isDefault: boolean;
};
export type ApiCreateAddressResponse = ApiResponse & {};

// 2022/08/15 - 주소 요청 송신/수신 타입 - by 1-blue
export type ApiGetAddressBody = {};
export type ApiGetAddressResponse = ApiResponse & { addresses: Address[] };

// 2022/08/15 - 주소 삭제 송신/수신 타입 - by 1-blue
export type ApiRemoveAddressBody = { idx: number };
export type ApiRemoveAddressResponse = ApiResponse & {};

// 2022/08/15 - 주소 수정 송신/수신 타입 - by 1-blue
export type ApiUpdateAddressBody = ApiCreateAddressBody & { idx: number };
export type ApiUpdateAddressResponse = ApiResponse & {};
