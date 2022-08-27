import { useCallback } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

// state
import stateService from "@src/states";

// util
import { combineClassNames } from "@src/libs";

const FilterSelector = () => {
  // 2022/08/22 - 등록된 모든 필터들 - by 1-blue
  const filters = useRecoilValue(stateService.filterService.filtersState);

  // 2022/08/24 - 현재 선택한 필터들 - by 1-blue
  const [selectedFilters, setSelectedFilters] = useRecoilState(
    stateService.filterService.selectedFiltersState
  );

  // 2022/08/24 - 필터 클릭 이벤트 함수 - by 1-blue
  const onClickFilter = useCallback(
    (filter: string) => () =>
      setSelectedFilters((prev) => {
        const targetIndex = prev.findIndex((v) => v === filter);

        if (targetIndex === -1) return [...prev, filter];
        return [...prev.slice(0, targetIndex), ...prev.slice(targetIndex + 1)];
      }),
    [setSelectedFilters]
  );

  return (
    <ul className="flex flex-wrap space-x-2">
      {filters.map(({ filter }) => (
        <li key={filter} className="first:self-end">
          <button
            type="button"
            className={combineClassNames(
              "py-1 px-2 shrink-1 bg-gray-400 text-white font-bolder text-xs hover:bg-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:ring-offset-2 transition-colors",
              selectedFilters.includes(filter) ? "bg-blue-400" : ""
            )}
            onClick={onClickFilter(filter)}
          >
            {filter}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FilterSelector;
