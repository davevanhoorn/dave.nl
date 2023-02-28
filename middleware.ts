import { NextRequest, NextResponse } from "next/server";

import { getLocaleFromHeaders, redirectToLocale } from "@/utils/redirects";
import { addThemeCookieToResponse } from "@/utils/theme-cookie";

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const locale = getLocaleFromHeaders(request);

  const pathnameIsMissingLocale = ["nl", "en"].every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Pathname does not have a locale and it's not the homepage (e.g. /about)
  if (pathnameIsMissingLocale && pathname !== "/") {
    return redirectToLocale(request, locale);
  }

  const response = NextResponse.next();
  const responseWithThemeCookie = addThemeCookieToResponse(request, response);

  return responseWithThemeCookie;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicons|favicon.ico|images).*)",
  ],
};
