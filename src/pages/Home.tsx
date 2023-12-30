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
  console.log(inputValue);

  useEffect(() => {
    const API_URL_ALL: string = "https://restcountries.com/v3.1/all";
    const API_URL_NAME: string = `https://restcountries.com/v3.1/name/${inputValue}`;

    if (inputValue === "") {
      fetch(API_URL_ALL)
        .then((res) => res.json())
        .then((res) => setCountryData(res))
        .catch((error) => {
          console.error("Error during API request", error);
        });
    } else {
      fetch(API_URL_NAME)
        .then((res) => res.json())
        .then((res) => setCountryData(res))
        .catch((error) => {
          console.error("Error during API request", error);
        });
    }
  }, [inputValue]);

  console.log(countryData);

  return (
    <div className="bg-[#fbfbfb]">
      <SearchBar inputValue={inputValue} setInputValue={setInputValue} />
      <CountriesList countryData={countryData} />
    </div>
  );
};
