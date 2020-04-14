import styled from 'styled-components';

import { heading, text, remcalc } from '../typography';
import { Logo, MenuOpen, MenuClose } from '../assets';

export const StyledMenuOpen = styled(MenuOpen)`
  width: 24px;
  height: 24px;
`;

export const StyledMenuClose = styled(MenuClose)`
  width: 24px;
  height: 24px;
`;

export const StyledMenuButton = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.spacing.multiple(3)};
  right: 0;
  margin: 0;
  padding: ${({ theme }) => theme.spacing.multiple(4)};
  background: none;
  border: none;
  pointer-events: auto;
  touch-action: auto;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const StyledMenuLink = styled.a<{ active: boolean; href: string }>`
  ${(props) => heading(props)}
  font-size: ${remcalc(30)};
  color: ${({ theme }) => theme.light}};
  cursor: pointer;
  ${({ active }) => active && `opacity: 0.5;`}

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    ${(props) => text(props)}
    padding: ${({ theme }) => `${theme.spacing.single} ${theme.spacing.double}`};
    color: ${({ theme }) => theme.secondary}};
    text-decoration: none;
    transition: 0.2s opacity;
    &:hover {
      opacity: 0.5;
    }
  }
`;

export const StyledMenuLinkItem = styled.li`
  padding: 0;
  list-style-type: none;
  margin-bottom: ${({ theme }) => theme.spacing.multiple(5)};
  &:last-of-type {
    margin-bottom: 0;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-right: ${({ theme }) => theme.spacing.multiple(4)};
    &:last-of-type {
      margin-right: ${({ theme }) => theme.spacing.multiple(8)};
    }
  }
`;

interface NavProps {
  open: boolean;
}

export const StyledMenuLinks = styled.ul<NavProps>`
  display: ${({ open }) => (open ? 'block' : 'none')};
  padding: 0;
  margin: ${({ theme }) => `0 0 0 ${theme.spacing.multiple(4)}`};
  pointer-events: auto;
  touch-action: auto;
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-left: ${({ theme }) => theme.spacing.multiple(20)};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    justify-content: flex-end;
    margin-top: ${({ theme }) => theme.spacing.multiple(4)};
    margin-bottom: ${({ theme }) => theme.spacing.double};
    margin-left: 0;
  }
`;

export const StyledNav = styled.nav<NavProps>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  touch-action: none;
  ${({ open, theme }) =>
    open &&
    `
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${theme.secondary};
    z-index: 100;
  `}
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    position: initial;
    background-color: transparent;
  }
`;

export const StyledLogo = styled.a`
  display: inline-flex;
  align-items: center;
  margin: ${({ theme }) => `${theme.spacing.multiple(5)} ${theme.spacing.multiple(4)}`};
  text-decoration: none;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-left: ${({ theme }) => `${theme.spacing.multiple(6)}`};
    margin-right: ${({ theme }) => `${theme.spacing.multiple(6)}`};
  }
`;

export const StyledLogoIcon = styled(Logo)`
  margin-right: ${({ theme }) => theme.spacing.double};
  width: 28px;
  height: 54px;
`;

export const StyledLogoSpan = styled('span')`
  color: ${({ theme }) => theme.secondary};
  font-family: ${({ theme }) => theme.secondaryFont};
  font-size: 20px;
  line-height: 1;
`;
