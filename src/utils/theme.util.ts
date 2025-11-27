import type { ThemeKey } from "@/constants/theme.constant";
import { getFromLocalStorage } from "./localstorage.util";
import type { Theme } from "@/types/theme.types";
import { DEFAULT_THEME, THEMES } from "@/constants/theme.constant";

export const getInitialTheme = (): Theme => {
  const storedKey = getFromLocalStorage<string>("theme");

  if (storedKey) {
    const theme = Object.values(THEMES).find(
      (theme) => theme.key === storedKey,
    );
    if (theme) {
      return theme;
    }
  }

  return DEFAULT_THEME;
};
