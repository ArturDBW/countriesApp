import { useParams } from "react-router-dom";

export const DetailsCountry = () => {
  const { id } = useParams();

  return <div className="text-3xl">DetailsCountry, {id}</div>;
};
