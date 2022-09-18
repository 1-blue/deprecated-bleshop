import { useCallback } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

// state
import stateService from "@src/states";

// util
import { combineClassNames } from "@src/libs";

const CategorySelector = () => {
  // 2022/08/22 - 등록된 모든 카테고리들 - by 1-blue
  const categories = useRecoilValue(
    stateService.categoryService.categoriesState
  );

  // 2022/08/24 - 현재 선택한 카테고리 - by 1-blue
  const [selectedCategory, setSelectedCategory] = useRecoilState(
    stateService.categoryService.selectedCategoryState
  );

  // 2022/08/24 - 카테고리 클릭 이벤트 함수 - by 1-blue
  const onClickCategory = useCallback(
    (category: string) => () =>
      setSelectedCategory((prev) => (prev === category ? null : category)),
    [setSelectedCategory]
  );

  return (
    <ul className="flex flex-wrap space-x-2">
      {categories.map(({ category }) => (
        <li key={category} className="first:self-end">
          <button
            type="button"
            className={combineClassNames(
              "py-1 px-2 shrink-1 bg-gray-400 text-white font-bolder text-xs hover:bg-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:ring-offset-2 transition-colors",
              selectedCategory === category ? "bg-blue-400" : ""
            )}
            onClick={onClickCategory(category)}
          >
            {category}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default CategorySelector;
