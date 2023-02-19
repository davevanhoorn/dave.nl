"use client";

export const parseClientSideCookies = (cookies: Document["cookie"]) =>
  Object.fromEntries(
    cookies.split(/; */).map((cookie) => {
      const index = cookie.indexOf("="); // Find the index of the first equal sign
      const key = cookie.slice(0, index); // Everything upto the index is the key
      const value = cookie.slice(index + 1); // Everything after the index is the value

      // Return the key and value
      return [decodeURIComponent(key), decodeURIComponent(value)];
    })
  );
