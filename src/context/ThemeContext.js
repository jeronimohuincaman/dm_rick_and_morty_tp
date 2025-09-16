// context/ThemeContext.js

import { createContext, useContext, useState } from "react";
import { charactersStyles } from "../styles";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("morty");

    const toggleTheme = () => {
        setTheme((prev) => (prev === "morty" ? "rick" : "morty"));
    }

    const colors = theme === "morty" ? charactersStyles.morty : charactersStyles.rick;
    const isDarkMode = theme === "morty"; // por ejemplo, "rick" es modo oscuro

    return (
        <ThemeContext.Provider value={{ theme, isDarkMode, toggleTheme, colors }}>
            {children}
        </ThemeContext.Provider>
    );
};


export const useTheme = () => useContext(ThemeContext);