import React from 'react';
import { makeStore } from '../src/redux/store';
import { Container } from 'next/app';
import { TApp } from '../src/utils/types.util';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from '@utils/theme.util';

const App: TApp = ({ Component, pageProps, store }) => (
  <MuiThemeProvider theme={theme}>
    <Container>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Container>
  </MuiThemeProvider>
);

App.getInitialProps = async ({ Component, ctx }) => {
  // Can dispatch actions from here
  // ctx.store.dispatch ();
  const pageProps = Component.getInitialProps ?
    await Component.getInitialProps (ctx) : {};

  return { pageProps };
};


export default withRedux (makeStore) (App);
