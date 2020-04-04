import styled from 'styled-components';

import { Address } from '../typography';

export const StyledAddress = styled(Address)`
  display: ${({ responsive }: { responsive: boolean }) => (responsive ? 'none' : 'flex')};
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing.double};
  margin-bottom: ${({ theme }) => theme.spacing.double};
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: flex;
  }
`;

export const StyledSocialLinks = styled('ul')`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing.double};
  margin-bottom: ${({ theme }) => theme.spacing.double};
  padding: 0;
`;

export const StyledSocialLink = styled('li')`
  margin-right: ${({ theme }) => theme.spacing.multiple(3.5)};
  &:last-of-type {
    margin-right: 0;
  }
  padding: 0;
  width: ${({ theme }) => theme.spacing.multiple(3.5)};
  list-style-type: none;
`;
