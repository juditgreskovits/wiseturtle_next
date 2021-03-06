import styled from 'styled-components';
import { withMargins, MarginDescriptor } from './withMargins';
import { Theme } from '../theme';

export interface Background {
  offset?: {
    top?: boolean;
    right?: boolean;
  };
}

export interface ContainerProps {
  theme: Theme;
  background?: boolean | Background;
  margin?: MarginDescriptor;
}

const Container = styled.div<ContainerProps>`
  margin: auto;
  padding-top: 0;
  padding-right: ${({ theme }) => theme.spacing.multiple(4)};
  padding-bottom: 0;
  padding-left: ${({ theme }) => theme.spacing.multiple(4)};
  max-width: ${({ theme }) => theme.maxWidth};

  ${({ background, theme }) => {
    if (background) {
      const bg = background as Background;
      return `background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP88R8AAvUB+VkkrXoAAAAASUVORK5CYII=);
          background-repeat: no-repeat;
          background-position: 0 ${bg.offset && bg.offset.top ? theme.spacing.multiple(10) : 0};
          background-size: 100% ${
            bg.offset && bg.offset.top ? ` calc(100% - ${theme.spacing.multiple(10)})` : ` 100%`
          };`;
    }
  }}

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-right: ${({ theme }) => theme.spacing.multiple(10)};
    padding-left: ${({ theme }) => theme.spacing.multiple(10)};
    ${({ background, theme }) => {
      if (background) {
        const bg = background as Background;
        return `background-position: ${theme.spacing.multiple(30)} ${
          bg.offset && bg.offset.top ? theme.spacing.multiple(10) : 0
        };
            background-size: calc(100% - ${
              bg.offset && bg.offset.right ? theme.spacing.multiple(57) : theme.spacing.multiple(40)
            }) ${bg.offset && bg.offset.top ? ` calc(100% - ${theme.spacing.multiple(10)})` : ` 100%`};`;
      }
    }}
  }
  ${withMargins}
`;

const LayoutContainer = styled(Container)<{ direction?: 'row' | 'column' }>`
  display: flex;
  flex-direction: column;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    ${({ direction }) =>
      direction === 'row' &&
      `
      flex-direction: row;
      justify-content: space-between;
    `}
  }
`;

const HeaderContainer = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 ${({ theme }) => theme.spacing.multiple(4)} 0 0;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-left: ${({ theme }) => theme.spacing.multiple(6)};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-left: ${({ theme }) => theme.spacing.multiple(20)};
    margin-right: ${({ theme }) => theme.spacing.multiple(20)};
  }
`;

const AboutContainer = styled(Container)`
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const ProjectInfosContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const ProjectCommentContainer = styled(Container)`
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const ContactContainer = styled(Container)`
  padding-top: ${({ theme }) => theme.spacing.multiple(6.5)};
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding-top: 10%;
    padding-left: 25%;
  }
`;

const NotFoundContainer = styled(Container)`
  padding-top: ${({ theme }) => theme.spacing.multiple(6.5)};
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding-top: 10%;
    padding-left: 40%;
  }
`;

const FooterLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding-top: ${({ theme }) => theme.spacing.multiple(4)};
  padding-right: 0;
  padding-bottom: ${({ theme }) => theme.spacing.multiple(4)};
  padding-left: 0;
  border-top: ${({ theme }) => `1px solid ${theme.light}`};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const HalfContainer = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 50%;
  }
  ${withMargins}
`;

const HomeHeadingContainer = styled.div<ContainerProps>`
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    position: absolute;
    top: calc(50% - 52px);
    margin-top: -102px;
  }
  ${withMargins}
`;

const HomeAboutProjectInfoContainer = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-left: 25%;
  }
  ${withMargins}
`;

const StyledPictureContainer = styled.div`
  display: none;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: initial;
    padding: 72px 112px 72px 0;
  }
`;

/* const ContentContainer = styled('div')`
  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    column-count: 2;
    column-gap: ${props => remcalc(props.theme.spacing.unit*5)};
  }
`; */

export {
  LayoutContainer,
  HeaderContainer,
  ProjectInfosContainer,
  ProjectCommentContainer,
  FooterLayoutContainer,
  ContactContainer,
  NotFoundContainer,
  AboutContainer,
  HalfContainer,
  HomeHeadingContainer,
  HomeAboutProjectInfoContainer,
  withMargins,
  StyledPictureContainer as AboutPictureContainer,
};

// export { AboutPictureContainer } from "./about";
