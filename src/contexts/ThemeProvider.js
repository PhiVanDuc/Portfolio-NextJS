"use client"

import { createContext, useEffect, useState } from "react"

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        if (localStorage.getItem("theme")) setTheme(JSON.parse(localStorage.getItem("theme")));
        else {
            localStorage.setItem("theme", JSON.stringify("light"));
            setTheme("light");
        }
    }, [theme]);

    const switchTheme = (color) => {
        setTheme(color);
        localStorage.setItem("theme", JSON.stringify(color));
    }

    const data = {
        theme,
        switchTheme,
    }

    return (
        <ThemeContext.Provider value={data}>
            <div className={`${theme} transition`}>
                { children }
            </div>
        </ThemeContext.Provider>
    )
}
