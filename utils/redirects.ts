import { NextRequest, NextResponse } from "next/server";

import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

import { addThemeCookieToResponse } from "@/utils/theme-cookie";

export const getLocaleFromHeaders = (
  request: NextRequest
): string | undefined => {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // Use negotiator and intl-localematcher to get best locale
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages();
  const locales: string[] = ["nl", "en"];

  return match(languages, locales, "en");
};

export const redirectToLocale = (
  request: NextRequest,
  locale: string | undefined
): NextResponse => {
  const pathname = request.nextUrl.pathname;
  let url: URL;

  if (locale === "nl") {
    url = new URL(`/nl${pathname}`, request.url);
  } else {
    url = new URL(`/en${pathname}`, request.url);
  }

  const response = NextResponse.redirect(url);
  const responseWithThemeCookie = addThemeCookieToResponse(request, response);

  return responseWithThemeCookie;
};
