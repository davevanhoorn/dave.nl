"use client";

import { FunctionComponent } from "react";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Link from "next/link";

import { Dictionary, i18n, Locale } from "@/config/i18n";

import Button from "@/components/button/button";
import LocaleSwitcherFlag from "@/components/locale-switcher/locale-switcher-flag";

import useI18n from "@/hooks/use-i18n";

import clsx from "clsx";
import styles from "./locale-switcher.module.scss";

interface LocaleSwitcherProps {
  currentLocale: Locale;
  dictionary: Dictionary;
}

const LocaleSwitcher: FunctionComponent<LocaleSwitcherProps> = ({
  currentLocale,
  dictionary,
}) => {
  const { redirectedPathName } = useI18n();

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
            "rounded-md p-2 bg-white shadow-lg shadow-gray-200/50"
          )}
        >
          {i18n.locales.map((locale) => (
            <DropdownMenu.Item key={locale}>
              <Link
                className={clsx(styles.localeLink, "p-1")}
                href={redirectedPathName(locale)}
              >
                <LocaleSwitcherFlag locale={locale} />
                <span className="font-semibold text-base">
                  {dictionary.global.languageSwitcher.locales[locale].name}
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
