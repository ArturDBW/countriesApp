import { useState, useEffect } from "react";
import { CountriesList } from "../components/CountriesList";
import { SearchBar } from "../components/SearchBar";

type countryDataProps = {
  name: {
    common: string;
  };
  flags: {
    png: string;
  };
  population: number;
  region: string;
  capital: string;
  cca3: string;
};

export const Home = () => {
  const [countryData, setCountryData] = useState<countryDataProps[] | null>(
    null,
  );

  const [inputValue, setInputValue] = useState("");
  const [filterValue, setFilterValue] = useState("");

  useEffect(() => {
    const API_URL_ALL: string = "https://restcountries.com/v3.1/all";
    const API_URL_NAME: string = `https://restcountries.com/v3.1/name/${inputValue}`;

    if (inputValue === "") {
      fetch(API_URL_ALL)
        .then((res) => res.json())
        .then((res) => {
          const filteredCountries = res.filter((country: countryDataProps) => {
            return filterValue === "" || country.region === filterValue;
          });
          setCountryData(filteredCountries);
        })
        .catch((error) => {
          console.error("Error during API request", error);
        });
    } else {
      fetch(API_URL_NAME)
        .then((res) => res.json())
        .then((res) => {
          const filteredCountries = res.filter((country: countryDataProps) => {
            return filterValue === "" || country.region === filterValue;
          });
          setCountryData(filteredCountries);
        })
        .catch((error) => {
          console.error("Error during API request", error);
        });
    }
  }, [inputValue, filterValue]);

  return (
    <div className="min-h-screen bg-[#fbfbfb] dark:bg-veryDarkBlue dark:text-white">
      <SearchBar
        inputValue={inputValue}
        setInputValue={setInputValue}
        filterValue={filterValue}
        setFilterValue={setFilterValue}
      />
      <CountriesList countryData={countryData} />
    </div>
  );
};
