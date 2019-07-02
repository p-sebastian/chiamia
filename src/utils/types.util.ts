import { FC, ComponentType } from 'react';
import { NextJSAppContext, AppProps } from 'next-redux-wrapper';


export type TApp = FC<{
  Component: ComponentType,
  pageProps: any
} & AppProps> & {
  getInitialProps: (appCtx: NextJSAppContext) => Promise<{
    // isServer: boolean;
    // initialState: any;
    pageProps: {};
  }>;
};
