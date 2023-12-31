import { SingleCountryItem } from "./SingleCountryItem";
import { Link } from "react-router-dom";

type CountryDataProps = {
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

type CountriesListProps = {
  countryData: CountryDataProps[] | null;
};

export const CountriesList = ({ countryData }: CountriesListProps) => {
  return (
    <div>
      <div className="mx-auto max-w-screen-2xl p-5 max-sm:p-3">
        {countryData !== null ? (
          <div className="grid grid-cols-4 gap-10 max-xl:grid-cols-3 max-lg:gap-4 max-md:grid-cols-2 max-sm:grid-cols-1">
            {countryData.map((country, index: number) => (
              <Link to={`/${country.cca3}`} key={index}>
                <SingleCountryItem country={country} />
              </Link>
            ))}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};
