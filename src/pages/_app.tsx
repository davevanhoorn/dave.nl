import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';

import '@/styles/globals.css';
import 'prism-themes/themes/prism-coldark-dark.css';

if (process.env.NODE_ENV !== 'production' && typeof window !== 'undefined') {
  import('react-dom').then((ReactDOM) => {
    import('@axe-core/react').then((axe) => {
      axe.default(React, ReactDOM, 1000, {});
    });
  });
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
