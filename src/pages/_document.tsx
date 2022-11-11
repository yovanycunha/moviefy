import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class _Document extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>MovieFy - PWA</title>
          <link rel="apple-touch-icon" href="/icon.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#fff" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
