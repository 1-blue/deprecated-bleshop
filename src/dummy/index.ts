import type { Product, User } from "@prisma/client";

/**
 * 2022/08/22 - 관리자 유저 데이터를 가져오는 함수 - by 1-blue
 * @returns
 */
export const getAdminUser = (): User => ({
  idx: 1,
  name: "관리자",
  id: "a",
  password: "$2b$06$2dZH5QkrdzeLKo4eWkFC/.wd/iuO87L5CsF6FXvs1C0UzvcZpRYjq",
  email: "a@naver.com",
  phone: "01012123434",
  isAdmin: true,
});

/**
 * 2022/08/22 - 가짜 상품들의 데이터를 가져오는 함수 - by 1-blue
 * @returns
 */
export const getDummyProducts = (number: number): Omit<Product, "idx">[] =>
  Array(number)
    .fill(null)
    .map((v, i) => ({
      name: "테스트 상품 - 00" + i,
      color: "빨강, 파랑, 노랑, 초록, 보라",
      size: "S,M,L,XL",
      description: "대충 상품 설명\n✍️🔒❌😥➖🤔📃📑😮\n(👉ﾟヮﾟ)👉👈(ﾟヮﾟ👈)",
      brand: "브랜드",
      company: "제조사",
      period: String(new Date()),
      price: 5000 * i,
      photo:
        i % 2 === 0
          ? "photos/development/Iceland-waterfall.jpg"
          : "photos/development/venice.jpg",
      userIdx: 1,
      updatedAt: new Date(),
    }));

/**
 * 2022/08/22 - 배너의 가짜 이미지들 데이터를 가져오는 함수 - by 1-blue
 * @returns
 */
export const getBennerPhotos = () => [
  "photos/development/barcelona.jpg",
  "photos/development/big-ben.jpg",
  "photos/development/germany.jpg",
  "photos/development/Iceland-waterfall.jpg",
  "photos/development/venice.jpg",
];
