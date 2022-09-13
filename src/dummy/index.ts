import type { Category, Product, User } from "@prisma/client";

const keywords = [
  "블루투스",
  "라면",
  "닌텐도스위치",
  "스포츠",
  "리액트",
  "프론트엔드",
  "데이터베이스",
  "아마존",
  "윌라오디오북",
  "그리스로마신화",
];
const filters = [
  "빨강",
  "주황",
  "노랑",
  "초록",
  "파랑",
  "남색",
  "보라",
  "분홍",
  "검정",
  "흰색",
];
const categories = [
  "패션의류",
  "뷰티",
  "식품",
  "인테리어",
  "스포츠",
  "취미",
  "문구",
  "가전",
  "생활용품",
  "여행",
];
const photos = [
  "photos/development/benner/barcelona.jpg",
  "photos/development/benner/big-ben.jpg",
  "photos/development/benner/germany.jpg",
  "photos/development/benner/Iceland-waterfall.jpg",
  "photos/development/benner/venice.jpg",
];

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
  photo: null,
});

/**
 * 2022/08/22 - 가짜 상품들의 데이터를 가져오는 함수 - by 1-blue
 * @returns
 */
export const getDummyProducts = (number: number): Omit<Product, "idx">[] =>
  Array(number)
    .fill(null)
    .map(() => ({
      name: "테스트 상품" + Math.floor(Math.random() * 100),
      color: "빨강, 파랑, 노랑, 초록, 보라",
      size: "S,M,L,XL",
      description: "대충 상품 설명\n✍️🔒❌😥➖🤔📃📑😮\n(👉ﾟヮﾟ)👉👈(ﾟヮﾟ👈)",
      brand: "브랜드",
      company: "제조사",
      period: String(new Date()),
      price: 5000 * Math.floor(Math.random() * 100),
      photo: photos[Math.floor(Math.random() * 5)],
      userIdx: 1,
      updatedAt: new Date(),
    }));

/**
 * 2022/08/28 - 가짜 카테고리들 가져오는 함수 - by 1-blue
 * @returns
 */
export const getDummyCategories = (number: number) => [
  ...new Set(
    Array(number)
      .fill(null)
      .map(() => categories[Math.floor(Math.random() * 10)])
  ),
];

/**
 * 2022/08/28 - 가짜 키워드들 가져오는 함수 - by 1-blue
 */
export const getDummyKeywords = (number: number) => [
  ...new Set(
    Array(number)
      .fill(null)
      .map(() => keywords[Math.floor(Math.random() * 10)])
  ),
];

/**
 * 2022/08/28 - 가짜 키워드들 가져오는 함수 - by 1-blue
 */
export const getDummyFilters = (number: number) => [
  ...new Set(
    Array(number)
      .fill(null)
      .map(() => filters[Math.floor(Math.random() * 10)])
  ),
];

/**
 * 2022/08/22 - 배너의 가짜 이미지들 데이터를 가져오는 함수 - by 1-blue
 * @returns
 */
export const getBennerPhotos = () => [...photos];
