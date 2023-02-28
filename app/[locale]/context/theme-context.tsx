"use client";

import "client-only";

import {
  createContext,
  FunctionComponent,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";

import { getCookie, setCookie } from "cookies-next";

import { cookieNames } from "@/config/generic";
import useLocation from "@/hooks/use-location";

export enum ThemeEnum {
  DARK = "dark",
  LIGHT = "light",
}

export type ThemeContextType = {
  theme: ThemeEnum | null;
  toggleTheme?: (theme: ThemeEnum, override?: boolean) => void;
};

export const ThemeContext = createContext<ThemeContextType>({ theme: null });

const Theme: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeEnum>(ThemeEnum.LIGHT);
  const { isInitialVisit } = useLocation();

  const setThemeCookie = (theme: ThemeEnum) =>
    setCookie(cookieNames.theme, theme, {
      maxAge: 60 * 60 * 24 * 7,
      sameSite: "strict",
      secure: true,
      path: "/",
      httpOnly: false,
    });

  const toggleTheme = (theme: ThemeEnum) => {
    if (theme === ThemeEnum.DARK) {
      document.documentElement.classList.add("dark");
    }
    if (theme === ThemeEnum.LIGHT) {
      document.documentElement.classList.remove("dark");
    }
    setThemeCookie(theme);
    setTheme(theme);
  };

  useEffect(() => {
    const theme = getCookie(cookieNames.theme) as ThemeEnum;
    const setDarkModeFromPreference =
      isInitialVisit &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (setDarkModeFromPreference) {
      document.documentElement.classList.add("dark");
      setThemeCookie(ThemeEnum.DARK);
      setTheme(ThemeEnum.DARK);
      return;
    }

    setThemeCookie(theme);
    setTheme(theme);
  }, [isInitialVisit]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default Theme;
