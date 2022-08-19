import { atom, selector } from "recoil";
import { v1 } from "uuid";

// api
import apiService from "@src/api";

// type
import type { Category } from "@prisma/client";

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
 * 저장된 모든 카테고리들 요청
 */
export const categoryState = selector<Category[]>({
  key: "categoryState" + v1(),
  get: async () => {
    const {
      data: { categories },
    } = await apiService.categoryService.apiGetCategory();

    return categories;
  },
});
