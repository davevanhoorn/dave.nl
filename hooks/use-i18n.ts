"use client";

import { usePathname } from "next/navigation";

const useI18n = () => {
  const pathName = usePathname();
  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return { redirectedPathName };
};

export default useI18n;
