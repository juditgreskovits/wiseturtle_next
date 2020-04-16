import styled from 'styled-components';
import { H1 } from '../typography';

export const StyledHomeHeading = styled(H1)`
  margin-bottom: ${({ theme }) => `${theme.spacing.multiple(3)}`};
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin: 0;
    background-color: ${({ theme }) => 'rgba(255, 255, 255, 1)' /* theme.primaryBackground */};
    padding: ${({ theme }) =>
      `${theme.spacing.multiple(3.5)} ${theme.spacing.multiple(5)} ${theme.spacing.multiple(3.5)} 0`};
    max-width: ${({ theme }) => `${theme.spacing.multiple(84)}`};
  }
`;
