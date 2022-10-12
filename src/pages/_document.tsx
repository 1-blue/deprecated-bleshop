import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* favicon */}
          <link href="/favicon.ico" rel="shortcut icon" />

          {/* SEO 키워드 */}
          <meta
            name="keyword"
            content="ble, bleshop, shop, shopping, project, frontend, 쇼핑몰, 프로젝트, 프론트엔드"
          />

          {/* 메인 폰트: Nanum Gothic ( https://fonts.google.com/specimen/Nanum+Gothic?subset=korean ) */}
          <link
            href="https://fonts.googleapis.com/css?family=Nanum+Gothic+Coding:400&display=swap"
            rel="stylesheet"
          />

          {/* 굵은 폰트: Jua https://fonts.google.com/specimen/Jua?subset=korean#standard-styles */}
          <link
            href="https://fonts.googleapis.com/css2?family=Jua&display=swap"
            rel="stylesheet"
          />

          {/* 특수 폰트 : https://fonts.google.com/specimen/Yeon+Sung?subset=korean#standard-styles */}
          <link
            href="https://fonts.googleapis.com/css2?family=Yeon+Sung&display=swap"
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
}

export default MyDocument;
