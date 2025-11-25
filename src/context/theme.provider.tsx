import { darkTheme, DEFAULT_THEME, lightTheme } from "@/constants/theme.constant";
import type { Theme } from "@/types/theme.type";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/localstorage.util";
import { createContext, useEffect, useState, type ReactNode } from "react";

type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
    theme: DEFAULT_THEME,
    toggleTheme: () => { },
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<Theme>(getFromLocalStorage("theme") || DEFAULT_THEME);

    const toggleTheme = () => {
        const newTheme = theme === lightTheme ? darkTheme : lightTheme;
        setTheme(newTheme);
        setToLocalStorage("theme", newTheme);
    };

    useEffect(() => {
        console.log("theme changed", theme);
        setToLocalStorage("theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};