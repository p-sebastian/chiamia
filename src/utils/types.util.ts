import { FC, ComponentType } from 'react';
import { NextJSAppContext, AppProps } from 'next-redux-wrapper';
import { BlogActionsType, ScreenActionsType } from '@actions/index';

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

export type HOC<T = {}> = (Page: ComponentType, options?: T) => ComponentType;

/**
 * Contains all actions
 */
export type TActions = BlogActionsType | ScreenActionsType;
