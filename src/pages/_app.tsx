import { AppProps } from 'next/app';

import '@/styles/globals.css';
import 'prism-themes/themes/prism-coldark-dark.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
