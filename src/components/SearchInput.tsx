import { SearchIcon } from "../svg/SearchIcon";
import { ChangeEvent } from "react";

type InputValueProps = {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
};

export const SearchInput = ({ inputValue, setInputValue }: InputValueProps) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder="Search for a country..."
        className="w-96 py-2 pl-16 pr-4 shadow-md outline-none max-sm:w-full"
        value={inputValue}
        onChange={handleInputChange}
      />
      <SearchIcon />
    </div>
  );
};
