import React, { ReactNode } from 'react';
import Link from 'next/link';

import { StyledLink, StyledLinkArrow, StyledSpan } from './styles';

export const ArrowLink = ({ children, href }: { children: ReactNode; href: string }) => {
  return (
    <Link href={href}>
      <StyledLink href={href}>
        <StyledSpan>{children}</StyledSpan>
        <StyledLinkArrow />
      </StyledLink>
    </Link>
  );
};
