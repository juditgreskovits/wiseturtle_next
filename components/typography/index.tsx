import Link from 'next/link';
import styled from 'styled-components';
import { withMargins, MarginDescriptor } from '../layout/withMargins';
import { Theme } from '../theme';

export const remcalc = (px: number) => `${px / 16}rem`;

interface TextProps {
  theme: Theme;
  margin?: MarginDescriptor;
}

const text = (props: TextProps) => `
  margin: 0;
  padding: 0;
  color: ${props.theme.primary};
  font-family: ${props.theme.primaryFont};
  font-size: ${remcalc(16)};
  line-height: 1.5;
  ${withMargins(props)}
`;

const heading = (props: TextProps) => `
  margin: 0;
  color: ${props.theme.secondary};
  font-family: ${props.theme.secondaryFont};
  font-weight: normal;
  ${withMargins(props)}
`;

const H1 = styled.h1<TextProps>`
  ${(props) => heading(props)}
  font-size: ${remcalc(30)};
  line-height: 1.13;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${remcalc(48)};
  }
`;

const H2 = styled.h2<TextProps>`
  ${(props) => heading(props)}
  font-size: ${remcalc(30)};
  line-height: 1.13;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${remcalc(48)};
  }
`;

const H3 = styled.h3`
  ${(props) => heading(props)}
  font-size: ${remcalc(24)};
  line-height: 1.25;
`;

const P = styled.p`
  ${(props) => text(props)}
  a {
    color: ${({ theme }) => theme.yellow};
    text-decoration: undeline;
  }
`;

const A = styled.a`
  ${(props) => text(props)}
`;

const StyledLink = styled(Link)`
  ${(props) => text(props)}
`;

const Li = styled.li`
  ${(props) => text(props)}
`;

const Address = styled.address`
  ${(props) => text(props)}
  font-style: normal;
`;

export { text, heading, H1, H2, H3, P, A, StyledLink as Link, Li, Address };
