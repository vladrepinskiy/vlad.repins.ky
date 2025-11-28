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

  // Check browser's theme preference
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return THEMES.DARK;
  }

  return DEFAULT_THEME;
};

export const getImageInvertFilter = (theme: Theme): string => {
  if (theme.key === "dark") {
    // Parse the background color to get RGB values
    const bgColor = theme.palette.bg;
    const rgb = parseInt(bgColor.replace("#", ""), 16);
    const r = (rgb >> 16) & 255;

    // Calculate invert percentage to map white (255) to background color (e.g., 26)
    // Formula: white * (1 - invert) = target, so invert = 1 - (target / 255)
    const invertAmount = 1 - r / 255;

    return `invert(${invertAmount.toFixed(2)})`;
  }

  return "";
};
