import styled from 'styled-components';
import { H1, P } from '../typography';

const StyledSection = styled.div`
  min-height: calc(100vh - 212px);
`;

const StyledHeading = styled(H1)`
  background-color: ${({ theme }) => theme.primaryBackground};
`;

const StyledSectionHeading = styled(H1)`
  margin-bottom: ${({ theme }) => theme.spacing.triple};
`;

const StyledSectionIntro = styled(P)`
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 54%;
  }
`;

export {
  StyledSection as Section,
  StyledHeading as FancyHeading,
  StyledSectionHeading as SectionHeading,
  StyledSectionIntro as SectionIntro,
};
