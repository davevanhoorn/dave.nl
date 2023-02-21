export const isAbsoluteURL = (str: string): boolean =>
  /^[a-z][a-z0-9+.-]*:/.test(str);
