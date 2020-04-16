import styled from 'styled-components';
import { A } from '../typography';
import { LinkArrow } from '../assets';

export const StyledLink = styled(A)`
  display: inline-flex;
  align-items: center;
  padding: ${({ theme }) => `${theme.spacing.single} ${theme.spacing.single} ${theme.spacing.single} 0`};
  color: ${({ theme }) => theme.secondary};
  font-family: ${({ theme }) => theme.primaryFont};
  text-decoration: undeline;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    &:hover {
      span {
        margin-right: ${({ theme }) => theme.spacing.double};
      }
    }
  }
`;

export const StyledLinkArrow = styled(LinkArrow)`
  width: 17px;
  height: 9px;
  fill: ${({ theme }) => theme.secondary};
`;

export const StyledSpan = styled('span')`
  margin-right: ${({ theme }) => theme.spacing.single};
  text-decoration: undeline;
  transition: ${({ theme }) => theme.transitions.all};
`;
