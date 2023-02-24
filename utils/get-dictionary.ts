import "server-only";

import type { Dictionary, Locale } from "@/config/i18n";

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  en: () => import("@/dictionaries/en.json").then((module) => module.default),
  nl: () => import("@/dictionaries/nl.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale): Promise<Dictionary> =>
  dictionaries[locale]().then((data) => {
    const serialized = JSON.stringify(data);
    return JSON.parse(serialized);
  });
