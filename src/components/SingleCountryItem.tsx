type CountryDataProps = {
  country: {
    name: {
      common: string;
    };
    flags: {
      png: string;
    };
    population: number;
    region: string;
    capital: string;
  } | null;
};

export const SingleCountryItem = ({ country }: CountryDataProps) => {
  const spanStyled = "mr-1 font-bold";

  if (!country) {
    return null;
  }

  const { flags, name, population, region, capital } = country;

  return (
    <div className="bg-white shadow-md">
      <div className="">
        <img
          src={flags.png}
          alt={flags.png}
          className="aspect-[160/98] w-full"
        />
      </div>
      <div className="grid p-4">
        <h2 className="mb-4 h-10 text-lg font-bold">{name.common}</h2>
        <ul className="mb-8 space-y-1 text-sm">
          <li>
            <span className={spanStyled}>Population:</span>
            {population}
          </li>
          <li>
            <span className={spanStyled}>Region:</span>
            {region}
          </li>
          <li>
            <span className={spanStyled}>Capital:</span>
            {capital}
          </li>
        </ul>
      </div>
    </div>
  );
};
