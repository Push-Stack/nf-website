import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <title>Non Fungible Arcade</title>
        <link rel="icon" href="/static/icons/icon-48x48.png" type="image/png" />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/static/icons/icon-72x72.png"
        />

        <link
          rel="apple-touch-icon"
          sizes="96x96"
          href="/static/icons/icon-96x96.png"
        />

        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/static/icons/icon-144x144.png"
        />

        <link
          rel="apple-touch-icon"
          sizes="192x192"
          href="/static/icons/icon-192x192.png"
        />

        <link
          rel="apple-touch-icon"
          sizes="256x256"
          href="/static/icons/icon-256x256.png"
        />

        <link
          rel="apple-touch-icon"
          sizes="384x384"
          href="/static/icons/icon-384x384.png"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
