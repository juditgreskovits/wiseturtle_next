import styled from 'styled-components';

export const StyledSocialLink = styled.a`
  fill: ${({ theme }) => theme.secondary};
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    transition: ${({ theme }) => theme.transitions.color};
    &:hover {
      opacity: 0.5;
    }
  }
`;
