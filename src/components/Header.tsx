import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="border-b">
      <div className="mx-auto flex max-w-screen-2xl justify-between p-5">
        <Link to={"/"}>
          <h1 className="text-2xl font-bold ">Where in the world?</h1>
        </Link>
        <button>Dark Mode</button>
      </div>
    </header>
  );
};
