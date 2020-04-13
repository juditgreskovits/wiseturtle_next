import App from 'next/app';
import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Reset } from 'styled-reset';

import mocks from '../mocks';
import { theme } from '../components/theme';
import { HeaderContainer } from '../components/layout';
import { Logo } from '../components/assets';
import { MenuLink, Menu } from '../components/menu';
import { Footer } from '../components/footer';

const GlobalStyle = createGlobalStyle`${theme.fonts}`;

const Header = () => (
  <HeaderContainer>
    <Logo to="/" />
    <Menu>
      <MenuLink href="/">Home</MenuLink>
      <MenuLink href="/projects" as="/our-work">
        Our work
      </MenuLink>
      <MenuLink href="/about" as="/about-us">
        About us
      </MenuLink>
      <MenuLink href="/contact">Get in touch</MenuLink>
    </Menu>
  </HeaderContainer>
);

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Reset />
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
        <Footer data={mocks} />
      </ThemeProvider>
    );
  }
}
