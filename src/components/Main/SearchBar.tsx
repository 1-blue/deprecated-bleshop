import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRecoilValueLoadable, useSetRecoilState } from "recoil";

// state
import { keywordsState, searchWordState } from "@src/states";

// hook
import useDebounce from "@src/hooks/useDebounce";

// component
import Tool from "@src/components/common/Tool";
import Icon from "@src/components/common/Icon";

type SearchForm = {
  searchWord: string;
};

const SearchBar = () => {
  const router = useRouter();
  const { register, handleSubmit, watch } = useForm<SearchForm>();

  // 2022/08/23 - 검색할 키워드 수정 - by 1-blue
  const setSearchWord = useSetRecoilState(searchWordState);

  // 2022/08/23 - 검색중인 단어를 포함하는 키워드들 ( 추천 검색어들 ) - by 1-blue
  const { state: keywordResult, contents: keywords } =
    useRecoilValueLoadable(keywordsState);

  // 2022/08/23 - 현재 검색창에 입력한 단어 - by 1-blue
  const searchWord = watch("searchWord");

  // 2022/08/23 - 검색 디바운스 적용할때 사용할 값 - by 1-blue
  const [debounce] = useDebounce({ value: searchWord, time: 300 });

  // 2022/08/23 - 디바운싱 적용한 추천 검색어 요청 - by 1-blue
  useEffect(() => {
    if (!debounce) return;

    setSearchWord(searchWord);
  }, [searchWord, debounce, setSearchWord]);

  // 2022/08/23 - 검색창 포커스 여부 - by 1-blue
  const [isFocus, setIsFocus] = useState(false);
  // 2022/08/23 - 검색창과 추천 검색어를 모두 포함하는 태그 - by 1-blue
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  // 2022/08/23 - 영역외 클릭 시 추천 키워드 창 닫기 - by 1-blue
  const handleCloseModal = useCallback(
    (e: any) => {
      if (
        isFocus &&
        (!wrapperRef.current || !wrapperRef.current.contains(e.target))
      )
        setIsFocus(false);
    },
    [isFocus, setIsFocus, wrapperRef]
  );
  // 2022/08/23 - 추천 키워드 창 닫기 이벤트 등록 - by 1-blue
  useEffect(() => {
    setTimeout(() => window.addEventListener("click", handleCloseModal), 0);
    return () => window.removeEventListener("click", handleCloseModal);
  }, [handleCloseModal]);

  // 2022/08/23 - 특정 키워드를 가진 상품들 검색 - by 1-blue
  const onSubmit = useCallback(
    ({ searchWord }: SearchForm) =>
      router.push(`/search?searchWord=${searchWord}`),
    [router]
  );

  if (keywordResult === "hasError")
    return <h3>에러가 발생했습니다. 새고로침을 시도해주세요.</h3>;

  return (
    <form
      className="flex flex-col justify-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div
        className="relative flex flex-col items-center w-full"
        ref={wrapperRef}
      >
        <Tool.Input
          type="search"
          name="검색어"
          placeholder="검색어를 입력해주세요."
          register={register("searchWord", {
            required: "검색어를 입력해주세요!",
          })}
          hiddenLabel={true}
          hiddenMessage={true}
          className="min-w-full max-w-full"
          onFocus={() => setIsFocus(true)}
        />

        <button
          type="submit"
          className="absolute top-0 right-0 p-[10px] xs:p-[12px] md:p-[10px] bg-blue-400 text-white rounded-r-sm hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
        >
          <Icon
            shape="search"
            className="w-4 h-4 xs:w-5 xs:h-5 md:w-6 md:h-6"
          />
        </button>
      </div>

      <div className="relative w-full">
        <ul className="absolute top-0 left-0 w-full bg-gray-200 rounded-b-md z-[1]">
          {isFocus &&
            keywordResult === "hasValue" &&
            keywords.map(({ keyword }) => (
              <li key={keyword}>
                <Link href={`/search?searchWord=${keyword}`}>
                  <a className="inline-block w-full px-4 py-2 text-[8px] xs:text-sm sm:text-base hover:bg-gray-300 focus:outline-none focus:bg-gray-300 transition-colors">
                    {keyword}
                  </a>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </form>
  );
};

export default SearchBar;
