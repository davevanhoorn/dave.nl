import { AppProps } from 'next/app';
import Head from 'next/head';

import '@/styles/globals.css';
import 'prism-themes/themes/prism-coldark-dark.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0'
        />
      </Head>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
