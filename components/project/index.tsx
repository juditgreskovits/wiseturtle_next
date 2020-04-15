import React, { ReactNode } from 'react';
import Link from 'next/link';
import { YellowHorizontalWave } from '../assets';
import {
  StyledProjectCommentHeading,
  StyledProjectComment,
  StyledArrow,
  StyledSpan,
  StyledP,
  StyledProjectInfo,
  StyledProjectInfoLink,
  StyledProjectInfoHeading,
  StyledProjectInfoHorizontalWave,
  StyledProjectInfoP,
  StyledGalleryItem,
  StyledGalleryItemIndex,
} from './styles';

const ProjectComment = ({ children }: { children: ReactNode | ReactNode[] }) => (
  <StyledProjectComment>“{children}“</StyledProjectComment>
);

const ArrowP = ({ children }: { children: ReactNode | ReactNode[] }) => (
  <StyledP>
    <StyledSpan>{children}</StyledSpan>
    <StyledArrow />
  </StyledP>
);

const ProjectInfo = ({ href, children }: { href: string; children: ReactNode[] }) => (
  <StyledProjectInfo>
    <Link href={href}>
      <StyledProjectInfoLink href={href}>{children}</StyledProjectInfoLink>
    </Link>
  </StyledProjectInfo>
);

const GalleryItemIndex = ({ index, total }: { index: number; total: number }) => (
  <StyledGalleryItemIndex>
    {index + 1} / {total}
  </StyledGalleryItemIndex>
);

export {
  ProjectComment,
  StyledProjectCommentHeading as ProjectCommentHeading,
  ArrowP,
  ProjectInfo,
  StyledGalleryItem as GalleryItem,
  GalleryItemIndex,
  StyledProjectInfoHeading as ProjectInfoHeading,
  StyledProjectInfoHorizontalWave as ProjectInfoHorizontalWave,
  StyledProjectInfoP as ProjectInfoP,
  YellowHorizontalWave as ProjectHorizontalWave,
};
