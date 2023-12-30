import { FilterButton } from "./FilterButton";
import { SearchInput } from "./SearchInput";

type InputValueProps = {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
};

export const SearchBar = ({ inputValue, setInputValue }: InputValueProps) => {
  return (
    <div className="mx-auto flex max-w-screen-2xl justify-between space-y-10 p-5 max-sm:flex-col">
      <SearchInput inputValue={inputValue} setInputValue={setInputValue} />
      <FilterButton />
    </div>
  );
};
