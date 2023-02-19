"use client";

import { FunctionComponent, useEffect, useState } from "react";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaCheck } from "react-icons/fa";

import { Dictionary, Locale } from "@/config/i18n";
import { parseClientSideCookies } from "@/utils/parse-client-side-cookies";

import Button from "@/components/button/button";
import LocaleSwitcherFlag from "@/components/locale-switcher/locale-switcher-flag";

import { cookieNames } from "@/config/generic";
import styles from "./locale-switcher.module.scss";

interface LocaleSwitcherProps {
  currentLocale: Locale;
  dictionary: Dictionary;
}

const LocaleSwitcher: FunctionComponent<LocaleSwitcherProps> = ({
  currentLocale,
  dictionary,
}) => {
  const pathName = usePathname();
  const [translations, setTranslations] = useState<
    [{ locale: Locale; slug: string }] | null
  >(null);

  useEffect(() => {
    const cookies = parseClientSideCookies(document.cookie);
    setTranslations(JSON.parse(cookies[cookieNames.i18n]));
  }, [pathName]);

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button
          className="lg:px-4"
          aria-label={dictionary.global.languageSwitcher.label}
        >
          <LocaleSwitcherFlag locale={currentLocale} />
        </Button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          collisionPadding={10}
          sideOffset={10}
          className={clsx(
            styles.localeSwitcherContent,
            "rounded-md p-1 sm:p-2 bg-white"
          )}
        >
          <DropdownMenu.Arrow />
          {translations?.map((translation) => (
            <DropdownMenu.Item key={translation.locale}>
              <Link
                className={clsx(styles.localeLink, "p-1 sm:p-2")}
                href={
                  translation.slug === "/"
                    ? `/${translation.locale}`
                    : `/${translation.locale}/${translation.slug}`
                }
              >
                <span className="relative mr-3">
                  <LocaleSwitcherFlag locale={translation.locale} />
                  {translation.locale === currentLocale && (
                    <span
                      className={clsx(
                        styles.localeCheck,
                        "absolute text-center rounded-2xl"
                      )}
                    >
                      <FaCheck className="w-2 h-2" />
                    </span>
                  )}
                </span>
                <span className="font-semibold text-base sm:text-lg">
                  {
                    dictionary.global.languageSwitcher.locales[
                      translation.locale
                    ].name
                  }
                </span>
              </Link>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default LocaleSwitcher;
