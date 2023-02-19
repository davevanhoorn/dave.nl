import "server-only";

import { Mulish } from "@next/font/google";

import { i18n, Locale } from "@/config/i18n";
import { getDictionary } from "@/utils/get-dictionary";

import Header from "@/components/header/header";

import "@/styles/globals.css";

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
  variable: "--font-mulish",
});

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({ params }: any) {
  const dictionary = await getDictionary(params.lang);

  return {
    keywords: dictionary.global.seo.keywords,
    authors: dictionary.global.seo.authors,
    creator: dictionary.global.seo.creator,
    publisher: dictionary.global.seo.publisher,
    icons: {
      icon: dictionary.global.icons.icon,
      shortcut: dictionary.global.icons.shortcut,
      apple: dictionary.global.icons.apple,
      other: dictionary.global.icons.other,
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
