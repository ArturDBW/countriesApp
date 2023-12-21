import { SingleCountryItem } from "./SingleCountryItem";

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
};

type CountriesListProps = {
  countryData: CountryDataProps[] | null;
};

export const CountriesList = ({ countryData }: CountriesListProps) => {
  return (
    <div>
      <div className="mx-auto max-w-screen-2xl p-5">
        {/* Sprawdź, czy cityData nie jest null, zanim użyjesz metody map */}
        {countryData !== null ? (
          <div className="grid grid-cols-4 gap-10">
            {countryData.map((country, index: number) => (
              <SingleCountryItem key={index} country={country} />
            ))}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};
