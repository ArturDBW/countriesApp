import { useState, useEffect } from "react";

type cityDataProps = {
  name: {
    common: string;
  };
};

export const Home = () => {
  const [cityData, setCityData] = useState<cityDataProps[] | null>(null);

  useEffect(() => {
    const API_URL_ALL: string = "https://restcountries.com/v3.1/all";

    fetch(API_URL_ALL)
      .then((res) => res.json())
      .then((res) => setCityData(res))
      .catch((error) => {
        console.error("Error during API request", error);
      });
  }, []); // Pusty array oznacza, że useEffect uruchomi się tylko raz, po zamontowaniu komponentu

  console.log(cityData);

  return (
    <div>
      {/* Sprawdź, czy cityData nie jest null, zanim użyjesz metody map */}
      {cityData !== null ? (
        <ul>
          {cityData.map((city, index: number) => (
            <li key={index}>{city.name.common}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
