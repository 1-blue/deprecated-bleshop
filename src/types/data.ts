import type { Photo, Product, ProductsOnKeywords, User } from "@prisma/client";

/**
 * 2022/09/07 - 간단한 유저 타입 ( 비밀번호 제외 ) - by 1-blue
 */
export type SimpleUser = Omit<User, "password">;

/**
 * 2022/08/25 - 상품 상세 데이터 - by 1-blue
 * 상품, 상품의 이미지들, 상품의 검색 키워드
 */
export type DetailProduct = Product & {
  photos: Photo[];
  keywords: ProductsOnKeywords[];
};

/**
 * 2022/08/26 - 구매할 상품 옵션 타입 - by 1-blue
 */
export type ProductOptionForm = {
  size: string;
  color: string;
  quantity: number;
};

/**
 * 2022/09/07 - 리뷰를 작성할 상품의 정보 - by 1-blue
 */
export type InformationAboutReview = {
  orderIdx: number;
  productIdx: number;
  photo: string;
  name: string;
};
