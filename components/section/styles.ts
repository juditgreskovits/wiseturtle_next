import styled from 'styled-components';
import { H1, P } from '../typography';

export const StyledSection = styled.div`
  min-height: calc(100vh - 212px);
`;

export const StyledHeading = styled(H1)`
  background-color: ${({ theme }) => theme.primaryBackground};
`;

export const StyledSectionHeading = styled(H1)`
  margin-bottom: ${({ theme }) => theme.spacing.triple};
`;

export const StyledSectionIntro = styled(P)`
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 54%;
  }
`;
