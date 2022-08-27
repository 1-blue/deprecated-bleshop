import { atom, selector } from "recoil";

// api
import apiService from "@src/api";

// type
import type { Category } from "@prisma/client";

/**
 * 2022/08/20 - 저장된 모든 카테고리들 요청 - by 1-blue
 */
export const categoriesState = selector<Category[]>({
  key: "categoriesState",
  get: async () => {
    try {
      const {
        data: { categories },
      } = await apiService.categoryService.apiGetCategory();

      return categories;
    } catch (error) {
      console.log("error categories >> ", error);

      return [];
    }
  },
  set({ set }, newValue) {
    set(categoriesState, newValue);
  },
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
