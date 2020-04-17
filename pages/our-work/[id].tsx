import React from 'react';
import { useRouter } from 'next/router';
import mocks from '../../mocks';

import { H1, H2 } from '../../components/typography';
import { Section, SectionIntro } from '../../components/section';
import { LayoutContainer, ProjectCommentContainer } from '../../components/layout';
import { Picture, getPictureData } from '../../components/picture';
import {
  ProjectHorizontalWave,
  ProjectCommentHeading,
  ProjectComment,
  GalleryItem,
  GalleryItemIndex,
} from '../../components/project';
import NotFound from '../404';

import { ProjectData, ImageData } from '../../types';

const Project = () => {
  const router = useRouter();
  const projectId = router.query.id;
  if (!projectId) {
    return null;
  }
  const project: ProjectData = mocks.projects.projects.find(({ id }) => id === projectId) as ProjectData;
  if (!project) {
    return <NotFound />;
  }
  const images: ImageData[] = project.images;

  const total = images.length;
  const gallery = images.map((image, index) => (
    <GalleryItem key={index}>
      <GalleryItemIndex index={index} total={total} />
      <Picture
        data={getPictureData({
          ...image,
          aspectRatio: 'wide',
        })}
        lazyload={index > 0}
      />
    </GalleryItem>
  ));

  let comment = null;
  if (project.feedback) {
    comment = (
      <React.Fragment>
        <ProjectCommentHeading>Client’s impression</ProjectCommentHeading>
        <ProjectComment>{project.feedback}</ProjectComment>
      </React.Fragment>
    );
  } else if (project.comment) {
    comment = (
      <React.Fragment>
        <ProjectCommentHeading>Designer’s comments</ProjectCommentHeading>
        <ProjectComment>{project.comment}</ProjectComment>
      </React.Fragment>
    );
  }

  return (
    <Section>
      <LayoutContainer margin={{ bottom: { xs: 7, md: 9 } }}>
        <H1 margin={{ top: { xs: 7, md: 12 } }}>{project.title}</H1>
        <H2 margin={{ bottom: { xs: 3, md: 5 } }}>{project.info}</H2>
        <ProjectHorizontalWave margin={{ bottom: { xs: 3, md: 5 } }} />
        <SectionIntro margin={{ bottom: { xs: 3, md: 4 } }}>{project.headline}</SectionIntro>
        <SectionIntro margin={{ bottom: { xs: 10, md: 13 } }}>{project.description}</SectionIntro>
        {gallery}
      </LayoutContainer>
      <ProjectCommentContainer margin={{ bottom: 15 }}>{comment}</ProjectCommentContainer>
    </Section>
  );
};

export default Project;
