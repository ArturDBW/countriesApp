import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

export const DetailsCountry = () => {
  const spanStyled = "font-bold";
  const { id } = useParams();

  const [countryDetails, setCountryDetails] = useState<
    CountriesListProps[] | null
  >(null);

  useEffect(() => {
    const API_URL_ALL: string = `https://restcountries.com/v3.1/alpha?codes=${id}`;
    // const API_URL_ALL: string = `https://restcountries.com/v3.1/name/${id}`;

    fetch(API_URL_ALL)
      .then((res) => res.json())
      .then((res) => setCountryDetails(res))
      .catch((error) => {
        console.error("Error during API request", error);
      });
  }, [id]);

  console.log(countryDetails);
  console.log(id);

  return (
    <div className="p-5">
      <div className="mx-auto max-w-screen-2xl p-5">
        <Link to={""}>&larr; Back</Link>
        {countryDetails !== null ? (
          countryDetails.map((country, index) => (
            <div key={index} className="mt-10 flex items-center">
              <div className="flex w-1/2">
                <img
                  src={country.flags.png}
                  alt={country.flags.png}
                  className="w-2/3"
                />
              </div>
              <div className="grid w-1/2 grid-cols-2 grid-rows-3">
                <h2 className="col-span-full text-2xl font-bold">
                  {country.name.common}
                </h2>
                <ul className="space-y-1">
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
                <ul className="space-y-1">
                  <li>
                    <span className={spanStyled}>Capital:&nbsp;</span>
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
                <div className="col-span-full self-end">
                  <span className={spanStyled}>Border Countries:&nbsp;</span>
                  {country.borders.map((neighbours, index: number) => (
                    <Link
                      to={neighbours}
                      key={index}
                      className="mx-2 border px-6 py-1"
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
