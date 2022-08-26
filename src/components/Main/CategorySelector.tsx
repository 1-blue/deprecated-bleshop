import { useCallback } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";

// state
import { categoriesState, selectedCategoryState } from "@src/states";

// util
import { combineClassNames } from "@src/libs";

const CategorySelector = () => {
  // 2022/08/22 - 등록된 모든 카테고리들 - by 1-blue
  const { state: categoriesResult, contents: categories } =
    useRecoilValueLoadable(categoriesState);

  // 2022/08/24 - 현재 선택한 카테고리 - by 1-blue
  const [selectedCategory, setSelectedCategory] = useRecoilState(
    selectedCategoryState
  );

  // 2022/08/24 - 카테고리 클릭 이벤트 함수 - by 1-blue
  const onClickCategory = useCallback(
    (category: string) => () =>
      setSelectedCategory((prev) => (prev === category ? null : category)),
    [setSelectedCategory]
  );

  // "useRecoilValueLoadable()"에 의해 사용 ( 미사용시 에러 발생 )
  if (categoriesResult === "loading") return <h3>로딩중입니다...</h3>;
  if (categoriesResult === "hasError")
    return <h3>에러가 발생했습니다. 새고로침을 시도해주세요.</h3>;

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
