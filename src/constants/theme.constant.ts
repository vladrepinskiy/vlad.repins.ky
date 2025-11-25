import type { Theme } from "@/types/theme.type";

const FONT_SIZES = {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.25rem",
    xl: "1.5rem",
    xxl: "2rem",
};

export const LIGHT_THEME: Theme = {
    key: "light",
    icon: "☀️",
    palette: {
        bg: "#ffffff",
        b80: "#d4d4d4",
        accent: "#f5a623",
    },
    fontSizes: FONT_SIZES,
};

export const DARK_THEME: Theme = {
    key: "dark",
    icon: "🌙",
    palette: {
        bg: "#1a1a1a",
        b80: "#e0e0e0",
        accent: "#ffbf69",
    },
    fontSizes: FONT_SIZES,
};

export const THEMES = {
    LIGHT: LIGHT_THEME,
    DARK: DARK_THEME,
} as const;

export const DEFAULT_THEME: Theme = LIGHT_THEME;

export type ThemeKey = keyof typeof THEMES;
