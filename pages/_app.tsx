import React from 'react';
import { makeStore } from '../src/redux/store';
import { Container } from 'next/app';
import { TApp } from '../src/utils/types.util';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';

const App: TApp = ({ Component, pageProps, store }) => (
  <Container>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  </Container>
);

App.getInitialProps = async ({ Component, ctx }) => {
  // Can dispatch actions from here
  // ctx.store.dispatch ();
  const pageProps = Component.getInitialProps ?
    await Component.getInitialProps (ctx) : {};

  return { pageProps };
};


export default withRedux (makeStore) (App);
