import { NextRequest, NextResponse } from "next/server";

import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

import { i18n, Locale } from "@/config/i18n";

function getLocaleFromHeaders(request: NextRequest): string | undefined {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // Use negotiator and intl-localematcher to get best locale
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages();
  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales;
  return matchLocale(languages, locales, i18n.defaultLocale);
}

export async function middleware(request: NextRequest) {
  // Path data
  const pathname = request.nextUrl.pathname;
  const requestUrl = new URL(request.url);

  // Check if is homepage request
  const isIndexPageRequest = !i18n.locales.every(
    (locale) => pathname !== `/${locale}`
  );

  // Check if there is any supported locale in the pathname, except for NL
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // If pathname is not missing locale and is not the index page, check if the slug exists in the translation files
  if (!isIndexPageRequest && !pathnameIsMissingLocale) {
    const parameters = requestUrl.pathname.split("/").filter(Boolean);
    const locale = parameters[0];
    const slug = parameters[1];

    // because Next.js server components bug
    const dictionaries = {
      en: () =>
        import("@/dictionaries/en.json").then((module) => module.default),
      nl: () =>
        import("@/dictionaries/nl.json").then((module) => module.default),
    };

    // Load current language dictionary
    const dictionary = await dictionaries[locale as Locale]();

    // Loop over slugs, exclude "global"
    const dictionarySlugs = Object.keys(dictionary);
    const folder = dictionarySlugs.find(
      // eslint-disable-next-line
      // @ts-ignore
      (dictionarySlug) => dictionary?.[dictionarySlug]?.slug?.[locale] === slug
    );

    // If slug matches, rewrite to "key", which is the page's folder name, e.g. /app/[lang]/about
    const url = new URL(`${requestUrl.origin}/${locale}/${folder}`);
    return NextResponse.rewrite(url);
  }

  if (isIndexPageRequest) {
    return NextResponse.next();
  }

  // Redirect is pathname is missing locale
  if (pathnameIsMissingLocale) {
    // Redirect if there is no locale
    const localeFromHeaders = getLocaleFromHeaders(request);

    // Redirect to english whenever the locale from headers is not "nl"
    if (localeFromHeaders) {
      const newEnUrl = new URL(
        `/${localeFromHeaders}${pathname === "/" ? `` : pathname}`,
        request.url
      );

      // e.g. incoming request is /products
      // The new URL is now /en-US/products
      return NextResponse.redirect(newEnUrl);
    }
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicons|images).*)"],
};
