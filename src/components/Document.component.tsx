import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'dank-mono';
    src: url('/static/fonts/DankMono-Regular.ttf');
  }
  @font-face {
    font-family: 'dank-mono-italic';
    src: url('/static/fonts/DankMono-Italic.ttf');
  }
  @font-face {
    font-family: 'fira-code-bold';
    src: url('/static/fonts/FiraCode-Bold.ttf');
  }
  body {
    margin: 0;

    &.noscroll {
      overflow: hidden;
    }
  }
`;
const CDocument: React.FC = () => ( 
  <Html>
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=0"
      />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
    </Head>
    <body>
      <GlobalStyle />
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default CDocument;
