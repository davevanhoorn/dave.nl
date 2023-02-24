import { FunctionComponent } from "react";

import clsx from "clsx";
import { GB, NL } from "country-flag-icons/react/3x2";

import { Locale } from "@/config/i18n";

import styles from "./locale-switcher.module.scss";

interface LocaleSwitcherFlagProps {
  locale: Locale;
}

const LocaleSwitcherFlag: FunctionComponent<LocaleSwitcherFlagProps> = ({
  locale,
}) => {
  if (locale === "nl") {
    return <NL className={clsx(styles.localeSwitcherFlag, "w-6 xs:w-7")} />;
  }

  if (locale === "en") {
    return <GB className={clsx(styles.localeSwitcherFlag, "w-6 xs:w-7")} />;
  }

  return null;
};

export default LocaleSwitcherFlag;
