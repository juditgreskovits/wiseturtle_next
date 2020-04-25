import App from 'next/app';
import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Reset } from 'styled-reset';

import mocks from '../mocks';
import { StoreContext } from '../components/store';
import { theme } from '../components/theme';
import { HeaderContainer } from '../components/layout';
import { Logo, MenuLink, Menu } from '../components/menu';
import { Footer } from '../components/footer';

import { Data } from '../types';

const GlobalStyle = createGlobalStyle`${theme.fonts}`;

const Header = () => (
  <HeaderContainer>
    <Logo href="/" />
    <Menu>
      <MenuLink href="/">Home</MenuLink>
      <MenuLink href="/our-work">Our work</MenuLink>
      <MenuLink href="/about-us">About us</MenuLink>
      <MenuLink href="/contact">Get in touch</MenuLink>
    </Menu>
  </HeaderContainer>
);

export default class MyApp extends App {
  state = {
    store: null,
  };

  setStore = (data: Data) => {
    this.setState({ store: data });
  };

  render() {
    const { Component, pageProps } = this.props;
    return (
      <StoreContext.Provider value={{ setStore: this.setStore, store: this.state.store }}>
        <ThemeProvider theme={theme}>
          <Reset />
          <GlobalStyle />
          <Header />
          <Component {...pageProps} />
          <Footer data={mocks} />
        </ThemeProvider>
      </StoreContext.Provider>
    );
  }
}
