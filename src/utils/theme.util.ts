import type { ThemeKey } from "@/constants/theme.constant";
import { getFromLocalStorage } from "./localstorage.util";
import type { Theme } from "@/types/theme.type";
import { DEFAULT_THEME, THEMES } from "@/constants/theme.constant";

export const getInitialTheme = (): Theme => {
    const storedKey = getFromLocalStorage<string>("theme");

    if (storedKey && storedKey in THEMES) {
        return THEMES[storedKey as ThemeKey];
    }

    return DEFAULT_THEME;
};
