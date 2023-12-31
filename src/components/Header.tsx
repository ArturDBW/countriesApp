import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Moon } from "../svg/Moon";
import { FillMoon } from "../svg/FillMoon";

type Theme = "light" | "dark";

export const Header = () => {
  const [theme, setTheme] = useState<Theme>(
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light",
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  console.log(theme);

  return (
    <header className="border-b">
      <div className="mx-auto flex max-w-screen-2xl justify-between p-5 max-sm:p-3">
        <Link to={"/"}>
          <h1 className="text-2xl font-bold max-sm:text-xl">
            Where in the world?
          </h1>
        </Link>
        <button onClick={handleThemeSwitch} className="flex items-center">
          {theme === "dark" ? <FillMoon /> : <Moon />}
          Dark Mode
        </button>
      </div>
    </header>
  );
};
