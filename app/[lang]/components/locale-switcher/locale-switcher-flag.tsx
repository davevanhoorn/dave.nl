import { FunctionComponent } from "react";

import { GB, NL } from "country-flag-icons/react/3x2";

import { Locale } from "@/config/i18n";

interface LocaleSwitcherFlagProps {
  locale: Locale;
}

const LocaleSwitcherFlag: FunctionComponent<LocaleSwitcherFlagProps> = ({
  locale,
}) => {
  if (locale === "nl") {
    return <NL className="w-5 xs:w-7 rounded-sm" />;
  }

  if (locale === "en") {
    return <GB className="w-5 xs:w-7 rounded-sm" />;
  }

  return null;
};

export default LocaleSwitcherFlag;
