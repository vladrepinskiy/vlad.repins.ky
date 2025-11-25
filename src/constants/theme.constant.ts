import type { Theme } from "@/types/theme.type";

export const lightTheme: Theme = {
    palette: {
        bg: "#ffffff",
        b80: "#d4d4d4",
        accent: "#f5a623",
    },
    spacing: {
        lg: "2rem",
    },
};

export const darkTheme: Theme = {
    palette: {
        bg: "#1a1a1a",
        b80: "#e0e0e0",
        accent: "#ffbf69",
    },
    spacing: {
        lg: "2rem",
    },
};

export const DEFAULT_THEME: Theme = lightTheme;