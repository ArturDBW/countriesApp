import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
export const DetailsCountry = () => {
  const { id } = useParams();

  const [countryDetails, setCountryDetails] = useState<
    countryDataProps[] | null
  >(null);

  useEffect(() => {
    const API_URL_ALL: string = `https://restcountries.com/v3.1/name/${id}`;

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
    <div className="text-3xl">
      DetailsCountry, {id}
      <div>
        <Link>&larr; Back</Link>
      </div>
    </div>
  );
};
