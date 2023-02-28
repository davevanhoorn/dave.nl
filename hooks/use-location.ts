"use client";

import "client-only";

import { useEffect, useState } from "react";

import { i18n } from "@/config/i18n";
import { usePathname } from "next/navigation";

const useLocation = () => {
  const pathname = usePathname();
  const [pathnameQueries, setPathnameQueries] = useState<Array<string>>([]);
  const isInitialVisit = pathnameQueries.length <= 1;
  const [isHome, setIsHome] = useState<boolean | null>(null);

  useEffect(() => {
    setPathnameQueries((prevPathnames) => {
      if (prevPathnames.length > 1) {
        const pathnames = prevPathnames.slice(1);
        return [...pathnames, pathname];
      }
      return [...prevPathnames, pathname];
    });

    const isHome =
      pathname === `/${i18n.locales[0]}` || pathname === `/${i18n.locales[1]}`;

    setIsHome(isHome);
  }, [pathname]);

  return { isInitialVisit, isHome };
};

export default useLocation;
