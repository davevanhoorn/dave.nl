import Document, { Html, Head, Main, NextScript } from 'next/document'

import Header from '../components/Header/Header'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="nl">
        <Head />
        <body>
          <div className="container mx-auto p-4">
            <Header />
            <Main />
            <NextScript />
          </div>
        </body>
      </Html>
    )
  }
}

export default MyDocument
