import "server-only";

import { NextRequest } from "next/server";

import { getLocaleFromHeaders, redirectToLocale } from "@/utils/redirects";

export async function GET(request: NextRequest) {
  const locale = getLocaleFromHeaders(request);
  return redirectToLocale(request, locale);
}
