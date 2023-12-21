import { useState, useEffect } from "react";
import { CountriesList } from "../components/CountriesList";

type countryDataProps = {
  name: {
    common: string;
  };
};

export const Home = () => {
  const [countryData, setCountryData] = useState<countryDataProps[] | null>(
    null,
  );

  useEffect(() => {
    const API_URL_ALL: string = "https://restcountries.com/v3.1/all";

    fetch(API_URL_ALL)
      .then((res) => res.json())
      .then((res) => setCountryData(res))
      .catch((error) => {
        console.error("Error during API request", error);
      });
  }, []);

  console.log(countryData);

  return (
    <div>
      <CountriesList countryData={countryData} />
    </div>
  );
};
