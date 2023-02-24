"server only";

import { NextRequest, NextResponse } from "next/server";

import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

import dictionary from "@/dictionaries/en.json";
import { URL as URLType } from "url";

export const i18n = {
  defaultLocale: "en",
  locales: ["en", "nl"],
} as const;

export type Locale = typeof i18n["locales"][number];

export type LocaleParams = { locale: Locale };

export type Dictionary = typeof dictionary;

export const getLocaleFromHeaders = (
  request: NextRequest
): Locale | undefined => {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // Use negotiator and intl-localematcher to get best locale
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages();
  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales;

  return match(languages, locales, i18n.defaultLocale) as Locale;
};

export const redirectToLocale = (
  request: NextRequest,
  locale: Locale | undefined
): NextResponse => {
  const pathname = request.nextUrl.pathname;
  let url: URLType;

  if (locale === "nl") {
    url = new URL(`/nl${pathname}`, request.url);
  } else {
    url = new URL(`/en${pathname}`, request.url);
  }

  return NextResponse.redirect(url);
};
