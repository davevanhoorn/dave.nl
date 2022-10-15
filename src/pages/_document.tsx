import {
  getCspInitialProps,
  provideComponents,
} from '@next-safe/middleware/dist/document';
import Document, { DocumentContext, Html, Main } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await getCspInitialProps({ ctx });
    return { ...initialProps };
  }

  render() {
    const { Head, NextScript } = provideComponents(this.props);

    return (
      <Html>
        <Head>
          <link
            href='https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500&family=EB+Garamond:wght@400;500&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body className='font-body'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
