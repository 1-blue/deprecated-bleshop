import { useForm } from "react-hook-form";
import { useRecoilValueLoadable } from "recoil";

// state
import { categoryState } from "@src/states";

// component
import Tool from "@src/components/common/Tool";
import Icon from "@src/components/common/Icon";

type SearchForm = {
  searchWord: string;
};

const SearchBar = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchForm>();

  // 2022/08/22 - 등록된 모든 카테고리들 - by 1-blue
  const { state: categoryResult, contents: categories } =
    useRecoilValueLoadable(categoryState);

  // "useRecoilValueLoadable()"에 의해 사용 ( 미사용시 에러 발생 )
  if (categoryResult === "loading") return <h3>로딩중입니다...</h3>;
  if (categoryResult === "hasError")
    return <h3>에러가 발생했습니다. 새고로침을 시도해주세요.</h3>;

  return (
    <section className="p-2 xsm:p-3 md:p-4 space-y-1 bg-white rounded-md shadow-2xl">
      <h2 className="pl-1 text-gray-800 font-bolder text-lg xs:text-xl md:text-2xl">
        상품 검색
      </h2>

      <form className="flex justify-center">
        <div className="relative flex flex-col items-center w-full">
          <Tool.Input
            type="text"
            name="검색어"
            placeholder="검색어를 입력해주세요."
            register={register("searchWord", {
              required: "검색어를 입력해주세요!",
            })}
            errorMessage={errors.searchWord?.message}
            hiddenLabel={true}
            hiddenMessage={true}
            className="min-w-full max-w-full"
          />

          <button
            type="button"
            className="absolute top-0 right-0 p-[10px] xs:p-[12px] md:p-[10px] bg-blue-400 text-white rounded-r-sm hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
            // onClick={() => setShowAddressInput(true)}
          >
            <Icon
              shape="search"
              className="w-4 h-4 xs:w-5 xs:h-5 md:w-6 md:h-6"
            />
          </button>
        </div>
      </form>

      <ul className="flex flex-wrap space-x-2 space-y-2">
        {categories.map(({ category }) => (
          <li key={category} className="first:self-end">
            <button
              type="button"
              className="py-1 px-2 shrink-1 bg-gray-400 text-white font-bolder text-xs hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition-colors"
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SearchBar;
