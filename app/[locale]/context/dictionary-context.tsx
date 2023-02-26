"use client";

import "client-only";

import { createContext, FunctionComponent, PropsWithChildren } from "react";

import type { Dictionary, Locale } from "@/config/i18n";

export type DictionaryContext = {
  currentLocale?: Locale;
  dictionary?: Dictionary;
};

export const DictionaryContext = createContext<DictionaryContext>({});

const Dictionary: FunctionComponent<
  PropsWithChildren<{ currentLocale: Locale; dictionary: Dictionary }>
> = ({ currentLocale, dictionary, children }) => (
  <DictionaryContext.Provider value={{ currentLocale, dictionary }}>
    {children}
  </DictionaryContext.Provider>
);

export default Dictionary;
