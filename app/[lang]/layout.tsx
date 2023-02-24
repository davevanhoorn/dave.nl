import "server-only";

import { Metadata } from "next/types";

import { Mulish } from "next/font/google";

import { Dictionary, i18n, Locale } from "@/config/i18n";
import { getDictionary } from "@/utils/get-dictionary";

import Header from "@/components/header/header";
import DictionaryContext from "@/context/dictionary-context";

import "@/styles/globals.css";

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["600", "700"],
  style: ["normal"],
  variable: "--font-mulish",
});

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale };
}): Promise<Metadata> {
  const dictionary = await getDictionary(params.lang);
  const path = dictionary.global;

  return {
    metadataBase: new URL(process.env.HOST!),
    keywords: path.seo.keywords,
    authors: path.seo.authors,
    creator: path.seo.creator,
    publisher: path.seo.publisher,
    icons: {
      icon: path.icons.icon,
      shortcut: path.icons.shortcut,
      apple: path.icons.apple,
      other: path.icons.other,
    },
  };
}

export default async function Root({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const { lang: locale } = params;
  const lang = locale === "nl" ? "nl-NL" : "en-US";
  const dictionary: Dictionary = await getDictionary(locale).then((data) => {
    const serialized = JSON.stringify(data);
    return JSON.parse(serialized);
  });

  return (
    <html lang={lang} className={`${mulish.variable} font-sans`}>
      <body>
        <DictionaryContext currentLocale={locale} dictionary={dictionary}>
          <Header />
          {children}
        </DictionaryContext>
      </body>
    </html>
  );
}

export const dynamic = "force-static";
