import "server-only";

import { FunctionComponent } from "react";

import clsx from "clsx";
import { RiWhatsappFill } from "react-icons/ri";

import { Dictionary, Locale } from "@/config/i18n";

import LightbulbIcon from "@/assets/images/font-awesome-5_solid-lightbulb.svg";
import Button, { ButtonTypeEnum } from "@/components/button/button";
import LocaleSwitcher from "@/components/locale-switcher/locale-switcher";
import Logo from "@/components/logo/logo";

import Link from "next/link";
import styles from "./header.module.scss";

interface HeaderProps {
  currentLocale: Locale;
  dictionary: Dictionary;
}

const Header: FunctionComponent<HeaderProps> = ({
  currentLocale,
  dictionary,
}) => {
  return (
    <header>
      <nav className="mx-auto max-w-screen-2xl px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between border-b border-black pt-6 pb-4 lg:py-6 lg:border-none">
          <div className="flex items-center w-full">
            <Logo dictionary={dictionary} />
            <div className="sm:px-4 md:px-0 hidden md:space-x-0 lg:space-x-3 xl:space-x-5 lg:flex flex-grow justify-center">
              {dictionary.global.header.navigation.map((link, key) => (
                <Link
                  key={`navigation-link-item-${key}`}
                  href={link.href}
                  title={link.title}
                  aria-label={link.ariaLabel}
                  className={clsx(
                    styles.link,
                    "relative text-lg font-semibold text-black md:text-xl py-2 px-3 md:px-2 lg:px-3 focus:rounded-md"
                  )}
                >
                  {link.value}
                </Link>
              ))}
            </div>
          </div>
          <div className="space-x-1 xs:space-x-2 flex">
            <Button
              className={clsx(styles.lightbulbButton, "hidden sm:inline-flex")}
              element={ButtonTypeEnum.a}
              href={dictionary.global.header.callToAction.project.href}
              title={dictionary.global.header.callToAction.project.title}
              aria-label={
                dictionary.global.header.callToAction.project.ariaLabel
              }
              icon={
                <span className={clsx(styles.lightbulbWrapper, "relative")}>
                  <LightbulbIcon
                    data-id="lightbulb-icon"
                    className="mr-1 xs:mr-2 text-base w-4 h-4 xs:w-5 xs:h-5"
                  />
                  <span className={styles.lightbulbRays}>
                    <span className={clsx(styles.lightbulbRay1)} />
                    <span className={clsx(styles.lightbulbRay2)} />
                    <span className={clsx(styles.lightbulbRay3)} />
                    <span className={clsx(styles.lightbulbRay4)} />
                    <span className={clsx(styles.lightbulbRay5)} />
                    <span className={clsx(styles.lightbulbRay6)} />
                    <span className={clsx(styles.lightbulbRay7)} />
                  </span>
                </span>
              }
            >
              {dictionary.global.header.callToAction.project.value}
            </Button>
            <Button
              className={clsx(styles.whatsappButton)}
              element={ButtonTypeEnum.a}
              href={dictionary.global.header.callToAction.whatsapp.href}
              title={dictionary.global.header.callToAction.whatsapp.title}
              aria-label={
                dictionary.global.header.callToAction.whatsapp.ariaLabel
              }
              icon={
                <span className={styles.whatsappWrapper}>
                  <span className={styles.whatsappDot}>1</span>
                  <RiWhatsappFill
                    data-id="whatsapp-icon"
                    className="mr-1 xs:mr-2 text-base xs:text-lg sm:text-xl"
                  />
                </span>
              }
            >
              {dictionary.global.header.callToAction.whatsapp.value}
            </Button>
            <LocaleSwitcher
              currentLocale={currentLocale}
              dictionary={dictionary}
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-center xs:gap-x-3 py-1 xs:py-2 lg:hidden">
          {dictionary.global.header.navigation.map((link, key) => (
            <Link
              key={`mobile-navigation-link-item-${key}`}
              href={link.href}
              title={link.title}
              aria-label={link.ariaLabel}
              className={clsx(
                styles.link,
                "text-base xs:text-xl font-semibold text-black p-2"
              )}
            >
              {link.value}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
