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
        <Head />
        <body className='font-body'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
