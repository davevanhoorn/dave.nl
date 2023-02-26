import "server-only";

import { Mulish } from "next/font/google";
import { Metadata } from "next/types";

import { i18n, LocaleParams } from "@/config/i18n";
import { getDictionary } from "@/utils/get-dictionary";

import Header from "@/app/[locale]/components/header/header";
import DictionaryContext from "@/app/[locale]/context/dictionary-context";

import "@/styles/globals.css";

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["600", "700"],
  style: ["normal"],
  variable: "--font-mulish",
});

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: LocaleParams;
}): Promise<Metadata> {
  const dictionary = await getDictionary(params.locale);
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
    other: { ["test"]: "test" },
  };
}

export default async function Root({
  children,
  params,
}: {
  children: React.ReactNode;
  params: LocaleParams;
}) {
  const { locale } = params;
  const dictionary = await getDictionary(locale);

  return (
    <html
      lang={locale === "nl" ? "nl-NL" : "en-US"}
      className={`${mulish.variable} font-sans`}
    >
      <head>
        <meta httpEquiv="content-language" content={locale} />
      </head>
      <body>
        <DictionaryContext currentLocale={locale} dictionary={dictionary}>
          <Header currentLocale={locale} dictionary={dictionary} />
          {children}
        </DictionaryContext>
      </body>
    </html>
  );
}

export const dynamic = "force-static";
