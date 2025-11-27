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

/**
 * Returns CSS filter to invert image when in dark theme
 * Maps white background to the dark theme background color
 * @param theme - The current theme object
 * @returns CSS filter string or empty string for light theme
 */
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
