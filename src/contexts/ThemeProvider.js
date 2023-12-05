"use client"

import { createContext, useLayoutEffect, useState } from "react"

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? JSON.parse(localStorage.getItem("theme")) : "light");


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