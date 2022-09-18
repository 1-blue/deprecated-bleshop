import { atom } from "recoil";

// type
import type { Category } from "@prisma/client";

/**
 * 2022/08/20 - 저장된 모든 카테고리들 요청 - by 1-blue
 */
export const categoriesState = atom<Category[]>({
  key: "categoriesState",
  default: [],
});
/**
 * 2022/08/24 - 현재 선택한 카테고리 - by 1-blue
 */
export const selectedCategoryState = atom<string | null>({
  key: "selectedCategoryState",
  default: null,
});

/**
 * 2022/08/27 - 카테고리 관련 states 객체 - by 1-blue
 */
const categoryService = {
  categoriesState,
  selectedCategoryState,
};

export default categoryService;
