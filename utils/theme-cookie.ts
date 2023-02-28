import { NextRequest, NextResponse } from "next/server";

import { cookieNames } from "@/config/generic";

export enum ThemeEnumServer {
  DARK = "dark",
  LIGHT = "light",
}

export const addThemeCookieToResponse = (
  request: NextRequest,
  response: NextResponse
): NextResponse => {
  const themeFromCookie = request.cookies.get(cookieNames.theme)?.value;

  response.cookies.set(
    cookieNames.theme,
    themeFromCookie || ThemeEnumServer.LIGHT,
    {
      path: "/",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 7,
      secure: true,
      httpOnly: false,
    }
  );

  return response;
};
