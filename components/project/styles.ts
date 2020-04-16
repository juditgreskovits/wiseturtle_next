import styled from 'styled-components';
import { H2, P, H3 } from '../typography';
import { LinkArrow, GreyHorizontalWave } from '../assets';

export const StyledProjectCommentHeading = styled(H2)`
  max-width: ${({ theme }) => theme.spacing.multiple(30)};
  margin-bottom: ${({ theme }) => theme.spacing.multiple(4)};
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: ${({ theme }) => theme.spacing.multiple(50)};
  }
`;

export const StyledProjectComment = styled(P)`
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: ${({ theme }) => theme.spacing.multiple(100)};
  }
`;

export const StyledArrow = styled(LinkArrow)`
  width: 17px;
  height: 9px;
  fill: ${({ theme }) => theme.primary};
`;

export const StyledSpan = styled.span`
  margin-right: ${({ theme }) => theme.spacing.single};
  transition: ${({ theme }) => theme.transitions.all};
`;

export const StyledP = styled(P)`
  display: flex;
  align-items: center;
`;

export const StyledProjectInfo = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing.multiple(11)};
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: ${({ theme }) => `calc(50% - ${theme.spacing.multiple(1.5)})`};
    margin-bottom: ${({ theme }) => theme.spacing.multiple(9)};
    :last-child {
      margin-bottom: ${({ theme }) => theme.spacing.multiple(10)};
    }
    padding-right: ${({ theme }) => theme.spacing.multiple(15)};
    :nth-child(odd) {
      margin-right: ${({ theme }) => theme.spacing.multiple(3)};
    }
    :nth-child(even) {
      padding-top: ${({ theme }) => theme.spacing.multiple(21)};
    }
  }
`;

export const StyledProjectInfoLink = styled.a`
  display: block;
  text-decoration: none;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    &:hover {
      span {
        margin-right: ${({ theme }) => theme.spacing.double};
      }
      > svg {
        fill: ${({ theme }) => theme.yellow};
      }
    }
  }
`;

export const StyledProjectInfoHeading = styled(H3)`
  margin-top: ${({ theme }) => theme.spacing.multiple(3)};
  margin-bottom: ${({ theme }) => theme.spacing.multiple(3)};
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-top: ${({ theme }) => theme.spacing.multiple(5)};
    margin-bottom: ${({ theme }) => theme.spacing.multiple(3.5)};
  }
`;

export const StyledProjectInfoHorizontalWave = styled(GreyHorizontalWave)`
  margin-bottom: ${({ theme }) => theme.spacing.multiple(3)};
`;

export const StyledProjectInfoP = styled(P)`
  max-width: ${({ theme }) => theme.spacing.multiple(58)};
`;

export const StyledGalleryItem = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.multiple(4)};
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: ${({ theme }) => theme.spacing.multiple(10)};
  }
`;

export const StyledGalleryItemIndex = styled(P)`
  margin-bottom: ${({ theme }) => theme.spacing.multiple(2.5)};
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    min-width: 15%;
    margin-right: ${({ theme }) => theme.spacing.multiple(3)};
  }
`;
