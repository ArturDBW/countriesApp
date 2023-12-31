import { FilterButton } from "./FilterButton";
import { SearchInput } from "./SearchInput";

type InputValueProps = {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  filterValue: string;
  setFilterValue: React.Dispatch<React.SetStateAction<string>>;
};

export const SearchBar = ({
  inputValue,
  setInputValue,
  filterValue,
  setFilterValue,
}: InputValueProps) => {
  return (
    <div>
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between p-5 max-sm:flex-col max-sm:items-start max-sm:space-y-6 max-sm:p-3">
        <SearchInput inputValue={inputValue} setInputValue={setInputValue} />
        <FilterButton
          filterValue={filterValue}
          setFilterValue={setFilterValue}
        />
      </div>
    </div>
  );
};
