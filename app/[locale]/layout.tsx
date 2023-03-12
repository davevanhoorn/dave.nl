import 'server-only';

import { Mulish } from 'next/font/google';
import localFont from 'next/font/local';
import { cookies as NextCookies } from 'next/headers';
import { Metadata } from 'next/types';

import { i18n, LocaleParams } from '@/config/i18n';
import { getDictionary } from '@/utils/get-dictionary';

import Header from '@/components/header/header';
import DictionaryContext from '@/context/dictionary-context';
import ThemeContext, { ThemeEnum } from '@/context/theme-context';

import { cookieNames } from '@/config/generic';
import { ThemeEnumServer } from '@/utils/theme-cookie';

import '@/styles/globals.css';

const mulish = Mulish({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal'],
  variable: '--font-mulish',
});

const salongbeach = localFont({
  src: '../../public/fonts/SALongBeach.woff',
  display: 'swap',
  variable: '--font-sa-long-beach',
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

  const cookies = NextCookies();
  const theme = cookies.get(cookieNames.theme)?.value || ThemeEnumServer.LIGHT;
  const useDarkMode = theme === ThemeEnumServer.DARK && `dark`; // Enables Tailwind dark mode

  return (
    <html
      lang={locale === 'nl' ? 'nl-NL' : 'en-US'}
      className={`${mulish.variable} ${salongbeach.variable} ${useDarkMode} font-sans`}
    >
      <head>
        <meta httpEquiv='content-language' content={locale} />
        <meta name='theme-color' content='white' />
        <meta
          name='theme-color'
          media='(prefers-color-scheme: dark)'
          content='black'
        />
      </head>
      <body className='dark:bg-black'>
        <ThemeContext theme={theme as ThemeEnum}>
          <DictionaryContext currentLocale={locale} dictionary={dictionary}>
            <Header currentLocale={locale} dictionary={dictionary} />
            {children}
          </DictionaryContext>
        </ThemeContext>
      </body>
    </html>
  );
}

export const dynamic = 'force-static';
// export const dynamic = 'force-dynamic';
