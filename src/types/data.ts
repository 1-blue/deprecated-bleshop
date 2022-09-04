import type { User, Photo, Product, ProductsOnKeywords } from "@prisma/client";

export type UserWithPhoto =
  | (Omit<User, "password"> & {
      photo: { path: string } | null;
    })
  | null;

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
