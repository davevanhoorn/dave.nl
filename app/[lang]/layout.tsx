import "server-only";

import { Mulish } from "@next/font/google";

import { i18n, Locale } from "@/config/i18n";
import { getDictionary } from "@/utils/get-dictionary";

import Header from "@/components/header/header";

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

export async function generateMetadata({ params }: any) {
  const dictionary = await getDictionary(params.lang);
  const path = dictionary.global;

  return {
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
  const dictionary = await getDictionary(params.lang);

  return (
    <html lang={params.lang} className={`${mulish.variable} font-sans`}>
      <body>
        <Header currentLocale={params.lang} dictionary={dictionary} />
        {children}
      </body>
    </html>
  );
}

export const dynamic = "force-static";
