import React from "react";
import { useAppContext } from "../AppContext";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useAppContext();

  return (
    <div className="toggle-container">
      {isDarkTheme ? (
        <button
          className="dark-toggle toggle-icon"
          onClick={() => toggleDarkTheme()}
        >
          <FaMoon />
        </button>
      ) : (
        <button
          className="dark-toggle toggle-icon"
          onClick={() => toggleDarkTheme()}
        >
          <FaSun />
        </button>
      )}
    </div>
  );
};

export default ThemeToggle;
