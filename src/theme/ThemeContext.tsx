import { createContext, useContext } from "react";

export enum Theme {
  DARK = "dark",
  LIGHT = "light",
}

interface ThemeContextValue {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}
export const ThemeContext = createContext<ThemeContextValue>({});

export const LOCAL_STORAGE_THEME_KEY = "theme";

export const useThemeContext = () => useContext(ThemeContext);
