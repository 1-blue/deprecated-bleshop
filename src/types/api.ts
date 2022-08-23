import type { LIMIT } from ".";
import type { Address, Category, Keyword, Product, User } from "@prisma/client";

/**
 * 2022/08/11 - 모든 api요청이 공통으로 갖는 타입 - by 1-blue
 */
type ApiResponse = {
  message: string | null;
};

/**
 * 2022/08/12 - 단일 이미지 업로드 송신 타입 - by 1-blue
 * 바로 이미지 업로드가 아닌 "preSignedUrl"을 요청하는 것
 */
export type ApiCreatePhotoBody = { file: File };
/**
 * 2022/08/12 - 단일 이미지 업로드 수신 타입 - by 1-blue
 * 바로 이미지 업로드가 아닌 "preSignedUrl"을 요청하는 것
 */
export type ApiCreatePhotoResponse = ApiResponse & {
  preSignedURL: string | null;
  photoURL: string | null;
};

/**
 * 2022/08/12 - 여러 이미지들 업로드 송신 타입 - by 1-blue
 * 바로 이미지 업로드가 아닌 "preSignedUrl"을 요청하는 것
 */
export type ApiCreatePhotosBody = { files: FileList };
/**
 * 2022/08/12 - 여러 이미지들 업로드 수신 타입 - by 1-blue
 * 바로 이미지 업로드가 아닌 "preSignedUrl"을 요청하는 것
 */
export type ApiCreatePhotosResponse = ApiCreatePhotoResponse[];

/**
 * 2022/08/11 - 회원가입 송신 타입 - by 1-blue
 */
export type ApiSignUpBody = {
  id: string;
  password: string;
  name: string;
  email: string;
  phone: string;
  photo?: string;
  isAdmin: boolean;
};
/**
 * 2022/08/11 - 회원가입 수신 타입 - by 1-blue
 */
export type ApiSignUpResponse = ApiResponse & { user: User | null };

/**
 * 2022/08/12 - 로그인 송신 타입 - by 1-blue
 */
export type ApiLogInBody = { id: string; password: string };
/**
 * 2022/08/12 - 로그인 수신 타입 - by 1-blue
 */
export type ApiLogInResponse = ApiResponse & {};

/**
 * 2022/08/14 - 유저 일반 정보 수정 송신 타입 - by 1-blue
 */
export type ApiUpdateUserBody = Pick<User, "name" | "email" | "phone">;
/**
 * 2022/08/14 - 유저 일반 정보 수정 수신 타입 - by 1-blue
 */
export type ApiUpdateUserResponse = ApiResponse & { user?: User | null };
/**
 * 2022/08/14 - 유저 이미지 수정 송신 타입 - by 1-blue
 * 기존 이미지를 제거하고 새로운 이미지를 추가할 수 있는 "preSingedUrl"을 얻는 타입
 */
export type ApiEditUserPhotoBody = { file: File };
/**
 * 2022/08/14 - 유저 이미지 수정 수신 타입 - by 1-blue
 * 기존 이미지를 제거하고 새로운 이미지를 추가할 수 있는 "preSingedUrl"을 얻는 타입
 */
export type ApiEditUserPhotoResponse = ApiResponse & {
  preSignedURL: string | null;
  photoURL: string | null;
};
/**
 * 2022/08/14 - 유저 이미지 수정 송신 타입 - by 1-blue
 * 새로운 이미지의 "path"를 이미지 DB에 수정하는 타입
 */
export type ApiUpdateUserPhotoBody = { path: string };
/**
 * 2022/08/14 - 유저 이미지 수정 수신 타입 - by 1-blue
 * 새로운 이미지의 "path"를 이미지 DB에 수정하는 타입
 */
export type ApiUpdateUserPhotoResponse = ApiResponse;
/**
 * 2022/08/14 - 유저 이미지 제거 송신 타입 - by 1-blue
 */
export type ApiDeleteUserPhotoBody = {};
/**
 * 2022/08/14 - 유저 이미지 제거 수신 타입 - by 1-blue
 */
export type ApiDeleteUserPhotoResponse = ApiResponse;

/**
 * 2022/08/15 - 주소 생성 송신 타입 - by 1-blue
 */
export type ApiCreateAddressBody = {
  name: string;
  address: string;
  residence: string;
  phone: string;
  message: string;
  isDefault: boolean;
};
/**
 * 2022/08/15 - 주소 생성 송신 타입 - by 1-blue
 */
export type ApiCreateAddressResponse = ApiResponse & {};

/**
 * 2022/08/15 - 로그인한 유저의 등록된 모든 주소들 요청 송신 타입 - by 1-blue
 */
export type ApiGetAllAddressBody = {};
/**
 * 2022/08/15 - 로그인한 유저의 등록된 모든 주소들 요청 수신 타입 - by 1-blue
 */
export type ApiGetAllAddressResponse = ApiResponse & { addresses?: Address[] };
/**
 * 2022/08/15 - 주소 삭제 송신 타입 - by 1-blue
 */
export type ApiDeleteAddressBody = { idx: number };
/**
 * 2022/08/15 - 주소 삭제 수신 타입 - by 1-blue
 */
export type ApiDeleteAddressResponse = ApiResponse & {};

/**
 * 2022/08/15 - 주소 수정 송신 타입 - by 1-blue
 */
export type ApiUpdateAddressBody = ApiCreateAddressBody & { idx: number };
/**
 * 2022/08/15 - 주소 수정 수신 타입 - by 1-blue
 */
export type ApiUpdateAddressResponse = ApiResponse & {};

/**
 * 2022/08/17 - 로그인한 유저의 기본 주소 요청 송신 타입 - by 1-blue
 * 기본 주소가 없다면 제일 처음 등록한 주소 요청
 */
export type ApiGetAddressBody = {};
/**
 * 2022/08/17 - 로그인한 유저의 기본 주소 요청 수신 타입 - by 1-blue
 * 기본 주소가 없다면 제일 처음 등록한 주소 반환
 */
export type ApiGetAddressResponse = ApiResponse & { address: Address | null };

/**
 * 2022/08/18 - 모든 카테고리 요청 송신 타입 - by 1-blue
 */
export type ApiGetCategoryBody = {};
/**
 * 2022/08/18 - 모든 카테고리 요청 수신 타입 - by 1-blue
 */
export type ApiGetCategoryResponse = ApiResponse & { categories: Category[] };

/**
 * 2022/08/19 - 임시 저장된 이미지 제거 송신 타입 - by 1-blue
 */
export type ApiDeletePhotoBody = { name: string };
/**
 * 2022/08/19 - 임시 저장된 이미지 제거 수신 타입 - by 1-blue
 */
export type ApiDeletePhotoResponse = ApiResponse & {};
/**
 * 2022/08/19 - 임시 저장된 이미지들 제거 송신 타입 - by 1-blue
 */
export type ApiDeletePhotosBody = { names: string[] };
/**
 * 2022/08/19 - 임시 저장된 이미지들 제거 수신 타입 - by 1-blue
 */
export type ApiDeletePhotosResponse = ApiResponse & {};

/**
 * 2022/08/18 - 상품 등록 송신 타입 - by 1-blue
 */
export type ApiCreateProductBody = {
  name: string;
  category: string;
  option: {
    color: string;
    size: string;
  };
  photo: string;
  photos: string[];
  description: string;
  information: {
    brand: string;
    company: string;
    period: Date;
    price: string;
  };
  keywords: string[];
  filters: string[];
  // delivery: {
  //   location: string;
  //   way: string;
  //   company: string;
  //   kinds: string;
  //   period: string;
  // };
};
/**
 * 2022/08/18 - 상품 등록 수신 타입 - by 1-blue
 */
export type ApiCreateProductResponse = ApiResponse & {
  productIdx?: number;
};

/**
 * 2022/08/21 - 상품들 불러오기 송신 타입 - by 1-blue
 */
export type ApiGetProductsBody = { limit: LIMIT; lastIdx: number };
/**
 * 2022/08/21 - 상품들 불러오기 수신 타입 - by 1-blue
 */
export type ApiGetProductsResponse = ApiResponse & { products: Product[] };

/**
 * 2022/08/23 - 추천 검색 키워드 불러오기 송신 타입 - by 1-blue
 */
export type ApiGetKeywordsBody = { word?: string };
/**
 * 2022/08/23 - 추천 검색 키워드 불러오기 수신 타입 - by 1-blue
 */
export type ApiGetKeywordsResponse = ApiResponse & { keywords: Keyword[] };

/**
 * 2022/08/23 - 특정 키워드를 가진 상품들 불러오기 송신 타입 - by 1-blue
 */
export type ApiGetProductsByKeywordBody = ApiGetProductsBody & {
  keyword: string;
};
/**
 * 2022/08/23 - 특정 키워드를 가진 상품들 불러오기 수신 타입 - by 1-blue
 */
export type ApiGetProductsByKeywordResponse = ApiGetProductsResponse;
