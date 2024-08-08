import React, { createContext, useState, useEffect } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("galaxy");

  useEffect(() => {
    document.body.className = "";
    if (theme === "light") {
      document.body.classList.add("light-mode");
    } else if (theme === "dark") {
      document.body.classList.add("dark-mode");
    } else if (theme === "galaxy") {
      document.body.classList.add("galaxy-mode");
    }
  }, [theme]);

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
