import React from 'react';

import { Picture, getPictureData } from '../components/picture';
import { ProjectInfoLink, ProjectInfoP, ArrowP } from '../components/project';

import {
  LayoutContainer,
  HomeHeadingContainer,
  HomeAboutProjectInfoContainer,
  HalfContainer,
} from '../components/layout';
import { SectionIntro } from '../components/section';
import { H2, P } from '../components/typography';
import { GreyHorizontalWave } from '../components/assets';

import { ArrowLink } from '../components/link';
import { HomeHeading } from '../components/home';
import mocks from '../mocks';

import { ProjectList } from './our-work';

import { ProjectData } from '../types';

const AboutSection = () => {
  const titleProject = mocks.titles.project;
  const project = mocks.projects.projects.find((p) => p.id === titleProject.id) as ProjectData;
  const picture = project.images[titleProject.imageIndex];

  return (
    <div>
      <LayoutContainer style={{ position: 'relative' }} margin={{ top: { xs: 7, md: 4 }, bottom: { xs: 11, md: 15 } }}>
        <HomeHeadingContainer margin={{ bottom: { xs: 11 } }}>
          <HomeHeading>{mocks.titles.subtitle}</HomeHeading>
          <ArrowLink href="/about-us">About us</ArrowLink>
        </HomeHeadingContainer>
        <HomeAboutProjectInfoContainer>
          <ProjectInfoLink href={`/our-work/${titleProject.id}`}>
            <Picture
              data={getPictureData({
                ...picture,
                aspectRatio: 'wide',
              })}
            />
            <ProjectInfoP margin={{ top: 5 }}>{project.headline}</ProjectInfoP>
            <ArrowP>{project.info}</ArrowP>
          </ProjectInfoLink>
        </HomeAboutProjectInfoContainer>
      </LayoutContainer>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <React.Fragment>
      <LayoutContainer background={true}>
        <H2 margin={{ top: { xs: 9, lg: 8 }, bottom: { xs: 3 } }}>{mocks.sections.ourWork.title}</H2>
        <SectionIntro margin={{ bottom: { xs: 4 } }}>{mocks.sections.ourWork.content}</SectionIntro>
        <ArrowLink href="/our-work" margin={{ bottom: { xs: 11 } }}>
          See all our work
        </ArrowLink>
      </LayoutContainer>
      <ProjectList limit={2} background={true} />
    </React.Fragment>
  );
};

const ApproachSection = () => {
  const approaches = mocks.sections.approach.content.map((approach, index) => (
    <React.Fragment key={`approach-${index}`}>
      <P margin={{ bottom: { xs: 5 } }}>{approach}</P>
      <GreyHorizontalWave margin={{ bottom: { xs: 5 } }} />
    </React.Fragment>
  ));

  return (
    <div>
      <LayoutContainer direction="row" margin={{ top: { xs: 11, md: 16 }, bottom: { lg: 11 } }}>
        <H2 margin={{ bottom: { xs: 4 } }}>{mocks.sections.approach.title}</H2>
        <HalfContainer>{approaches}</HalfContainer>
      </LayoutContainer>
    </div>
  );
};

const Home = () => (
  <>
    <AboutSection />
    <ProjectsSection />
    <ApproachSection />
  </>
);

export default Home;
