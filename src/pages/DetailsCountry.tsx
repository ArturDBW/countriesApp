import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

type CountryDataProps = {
  name: {
    common: string;
    official: string;
  };
  flags: {
    png: string;
  };
  population: number;
  region: string;
  subregion: string;
  tld: string[];
  capital: string;
  cca3: string;
  currencies: {
    [key: string]: Currency;
  };
  borders: string[];
  languages: string[];
};

interface Currency {
  name: string;
  symbol: string;
}

export const DetailsCountry = () => {
  const spanStyled = "font-bold";
  const { id } = useParams();

  const [countryDetails, setCountryDetails] = useState<
    CountryDataProps[] | null
  >(null);

  useEffect(() => {
    const API_URL_ALL: string = `https://restcountries.com/v3.1/alpha?codes=${id}`;

    fetch(API_URL_ALL)
      .then((res) => res.json())
      .then((res) => setCountryDetails(res))
      .catch((error) => {
        console.error("Error during API request", error);
      });
  }, [id]);

  const navigate = useNavigate();

  return (
    <div className="min-h-[calc(100vh-72px)] bg-[#fbfbfb] dark:bg-veryDarkBlue dark:text-white">
      <div className="mx-auto max-w-screen-2xl p-5 max-sm:p-3">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center rounded-md border px-6 py-1 shadow-md transition-all hover:shadow-lg dark:border-[#1f2031] dark:bg-darkBlue"
        >
          &larr; Back
        </button>
        {countryDetails !== null ? (
          countryDetails.map((country, index) => (
            <div key={index} className="mt-10 flex max-lg:flex-col">
              <div className="flex w-1/2 max-lg:w-full">
                <img
                  src={country.flags.png}
                  alt={country.flags.png}
                  className="aspect-[160/98] w-3/4 max-lg:w-full"
                />
              </div>
              <div className="grid w-1/2 grid-cols-2 grid-rows-3 max-lg:w-full">
                <h2 className="col-span-full text-2xl font-bold max-lg:mt-5">
                  {country.name.common}
                </h2>
                <ul className="space-y-1 max-md:col-span-full max-md:mt-[-20px]">
                  <li>
                    <span className={spanStyled}>Native Name:&nbsp;</span>
                    {country.name.official}
                  </li>
                  <li>
                    <span className={spanStyled}>Population:&nbsp;</span>
                    {country.population}
                  </li>
                  <li>
                    <span className={spanStyled}>Region:&nbsp;</span>
                    {country.region}
                  </li>
                  <li>
                    <span className={spanStyled}>Sub Region:&nbsp;</span>
                    {country.subregion}
                  </li>
                </ul>
                <ul className="space-y-1 max-md:col-span-full max-sm:mb-6">
                  <li>
                    <span className={`${spanStyled}`}>Capital:&nbsp;</span>
                    {country.capital[0]}
                  </li>
                  <li>
                    <span className={spanStyled}>Top Level Domain:&nbsp;</span>
                    {country.tld}
                  </li>
                  <li>
                    <span className={spanStyled}>Currencies:&nbsp;</span>
                    {Object.values(country.currencies)
                      .map((currency) => currency.name)
                      .join(", ")}
                  </li>
                  <li>
                    <span className={spanStyled}>Languages:&nbsp;</span>
                    {Object.values(country.languages).join(", ")}
                  </li>
                </ul>
                <div className="col-span-full flex flex-wrap items-center space-x-2 space-y-1 self-end">
                  {country.borders && (
                    <span className={spanStyled}>Border Countries:&nbsp;</span>
                  )}
                  {country.borders?.map((neighbours, index: number) => (
                    <Link
                      to={`/${neighbours}`}
                      key={index}
                      className="border px-6 py-1 dark:border-[#1f2031] dark:bg-darkBlue"
                    >
                      {neighbours}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};
