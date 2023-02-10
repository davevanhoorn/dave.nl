import { Inter } from '@next/font/google';
import { AppProps } from 'next/app';
import Head from 'next/head';

import '@/styles/globals.css';
import 'prism-themes/themes/prism-coldark-dark.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <div className={`${inter.variable} font-sans`}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
