import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed bottom-6 right-6 z-50 bg-purple-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-purple-700 transition-all"
    >
      {theme === "dark" ? " Light Mode" : " Dark Mode"}
    </button>
  );
};

export default ThemeToggle;
