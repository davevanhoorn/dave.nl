"use client";

import { useEffect, useState } from "react";

import { parseClientSideCookies } from "@/utils/parse-client-side-cookies";

export enum ThemeEnum {
  "dark",
  "light",
}

const useTheme = () => {
  const [theme, setTheme] = useState<ThemeEnum>(ThemeEnum.light); // Defaults to "light" theme

  useEffect(() => {
    const cookies = parseClientSideCookies(document.cookie);

    // If theme has been saved in a cookie
    if (cookies?.theme) {
      setTheme(cookies.theme as unknown as ThemeEnum);
    }

    if (
      !cookies?.theme &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setTheme(ThemeEnum.dark);
    }
  }, []);

  useEffect(() => {
    document.cookie = `theme=${theme}; expires=Fri, 31 Dec 9999 23:59:59 GMT; SameSite=None; Secure`;
  }, [theme]);

  return { theme };
};

export default useTheme;
