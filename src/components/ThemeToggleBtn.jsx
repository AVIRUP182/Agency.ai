import React, { useEffect } from "react";
import assets from "../assets/assets";

const ThemeToggleBtn = ({ theme, setTheme }) => {
  // Toggle theme between dark and light
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  // On initial mount, sync theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");

    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, [setTheme]);

  return (
    <button onClick={toggleTheme} aria-label="Toggle Theme">
      <img
        src={theme === "dark" ? assets.sun_icon : assets.moon_icon}
        alt={theme === "dark" ? "Light Mode" : "Dark Mode"}
        className="w-8 h-8 p-1.5 border border-gray-500 rounded-full cursor-pointer"
      />
    </button>
  );
};

export default ThemeToggleBtn;