import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { ThemeContext } from "./BackgroundThemes/ThemeContext";
import "../../index.css";

const NavBar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <div className="mode-buttons-container">
        <button
          className={`mode-button light ${
            theme === "light" ? "active light" : ""
          }`}
          onClick={() => toggleTheme("light")}
        >
          Light Mode
        </button>
        <button
          className={`mode-button dark ${
            theme === "dark" ? "active dark" : ""
          }`}
          onClick={() => toggleTheme("dark")}
        >
          Dark Mode
        </button>
        <button
          className={`mode-button galaxy ${
            theme === "galaxy" ? "active galaxy" : ""
          }`}
          onClick={() => toggleTheme("galaxy")}
        >
          Galaxy Mode
        </button>
      </div>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <NavLink
              to="/"
              exact="true"
              className="navbar-link"
              activeclassname="active"
            >
              Home
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink
              to="/about"
              className="navbar-link"
              activeclassname="active"
            >
              About
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink
              to="/projects"
              className="navbar-link"
              activeclassname="active"
            >
              Projects
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink
              to="/resume"
              className="navbar-link"
              activeclassname="active"
            >
              Resume
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;
