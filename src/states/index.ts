import { atom, selector } from "recoil";
import { v1 } from "uuid";

// api
import apiService from "@src/api";

// type
import type { Category, Product } from "@prisma/client";

/**
 * 구글링으로 알아본 결과 "next.js"와 "recoil"을 같이 사용하면 어떤 문제로 인해서 "key" 중복 경고가 발생함
 * 그것을 없애기 위해 임시 방편으로 "uuid"를 이용해서 "key"가 중복되지 않게 만듦
 */

/**
 * 추가적으로 문제가 "selector"를 이용한 비동기 처리를 할 때
 * "next-auth"에서 생성한 쿠키를 전송하지 않는 경우가 많이 발생함
 * 따라서 서버측에서는 비로그인 유저가 특정 유저의 데이터를 요청하는 경우로 인식하여 오류가 발생됨
 *
 * 아직 마땅한 해결법을 찾지 못해서 "selector"의 비동기처리를 하는 경우에는 인증된 유저가 아니어도 접근할 수 있는 정보를 요청할 때만 사용함
 */

/**
 * 2022/08/20 - 저장된 모든 카테고리들 요청 - by 1-blue
 */
export const categoryState = selector<Category[]>({
  key: "categoryState - " + v1(),
  get: async () => {
    const {
      data: { categories },
    } = await apiService.categoryService.apiGetCategory();

    return categories;
  },
});

/**
 * 2022/08/22 - 최근 상품들 - by 1-blue
 */
export const productsState = atom<Product[]>({
  key: "productsState - " + v1(),
  default: [],
});
/**
 * 2022/08/22 - 최근 상품들의 마지막 상품의 식별자 - by 1-blue
 */
export const productLastIdxState = selector<number>({
  key: "productLastIdxState",
  get: ({ get }) => {
    const products = get(productsState);

    if (products.length === 0) return -1;

    return products[products.length - 1].idx;
  },
  set: ({ set }) => {
    set(productsState, []);
  },
});

/**
 * 2022/08/23 - 검색중인 단어 - by 1-blue
 */
export const searchWordState = atom({
  key: "searchWordState",
  default: "",
});
/**
 * 2022/08/23 - 검색중인 단어를 포함하는 키워드들 ( 추천 검색어 ) - by 1-blue
 */
export const keywordsState = selector({
  key: "keywordsState",
  get: async ({ get }) => {
    const word = get(searchWordState);
    const {
      data: { keywords },
    } = await apiService.keywordService.apiGetKeywords({ word });

    return keywords;
  },
});
