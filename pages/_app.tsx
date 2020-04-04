import App from 'next/app';
import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Reset } from 'styled-reset';

import mocks from '../mocks';
import { theme } from '../components/theme';
import { Footer } from '../components/footer';

const GlobalStyle = createGlobalStyle`${theme.fonts}`;

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Reset />
        <GlobalStyle />
        <Component {...pageProps} />
        <Footer data={mocks} />
      </ThemeProvider>
    );
  }
}
