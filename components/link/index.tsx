import React, { ReactNode } from 'react';
import Link from 'next/link';

import { MarginDescriptor } from '../layout/withMargins';

import { StyledLink, StyledLinkArrow, StyledSpan } from './styles';

export const ArrowLink = ({
  children,
  href,
  margin,
}: {
  children: ReactNode;
  href: string;
  margin?: MarginDescriptor;
}) => {
  return (
    <Link href={href}>
      <StyledLink href={href} margin={margin}>
        <StyledSpan>{children}</StyledSpan>
        <StyledLinkArrow />
      </StyledLink>
    </Link>
  );
};
