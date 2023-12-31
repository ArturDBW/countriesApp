type FilterButtonProps = {
  filterValue: string;
  setFilterValue: React.Dispatch<React.SetStateAction<string>>;
};

export const FilterButton = ({
  filterValue,
  setFilterValue,
}: FilterButtonProps) => {
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterValue(e.target.value);
  };

  console.log(filterValue);

  return (
    <div>
      <select
        value={filterValue}
        onChange={handleFilterChange}
        className="dark:bg-darkBlue rounded-md px-4 py-2 shadow-md outline-none"
      >
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};
