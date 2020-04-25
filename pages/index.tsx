import React from 'react';
import { GetServerSideProps } from 'next';

import { fetchData, useStore } from '../utils';
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

import { ProjectList } from './our-work';

import { TitlesData, ProjectData, SectionsData, Data, ProjectsData } from '../types';

const AboutSection = ({ titles, projects }: { titles: TitlesData; projects: ProjectData[] }) => {
  const titleProject = titles.project;
  const project = projects.find((p: ProjectData) => (p as ProjectData).id === titleProject.id) as ProjectData;
  const picture = project.images[titleProject.imageIndex];

  return (
    <div>
      <LayoutContainer style={{ position: 'relative' }} margin={{ top: { xs: 7, md: 4 }, bottom: { xs: 11, md: 15 } }}>
        <HomeHeadingContainer margin={{ bottom: { xs: 11 } }}>
          <HomeHeading>{titles.subtitle}</HomeHeading>
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

const ProjectsSection = ({ sections, projects }: { sections: SectionsData; projects: ProjectsData }) => {
  return (
    <React.Fragment>
      <LayoutContainer background={true}>
        <H2 margin={{ top: { xs: 9, lg: 8 }, bottom: { xs: 3 } }}>{sections.ourWork.title}</H2>
        <SectionIntro margin={{ bottom: { xs: 4 } }}>{sections.ourWork.content}</SectionIntro>
        <ArrowLink href="/our-work" margin={{ bottom: { xs: 11 } }}>
          See all our work
        </ArrowLink>
      </LayoutContainer>
      <ProjectList projectsData={projects} limit={2} background={true} />
    </React.Fragment>
  );
};

const ApproachSection = ({ sections }: { sections: SectionsData }) => {
  const approaches = sections.approach.content.map((approach, index) => (
    <React.Fragment key={`approach-${index}`}>
      <P margin={{ bottom: { xs: 5 } }}>{approach}</P>
      <GreyHorizontalWave margin={{ bottom: { xs: 5 } }} />
    </React.Fragment>
  ));

  return (
    <div>
      <LayoutContainer direction="row" margin={{ top: { xs: 11, md: 16 }, bottom: { lg: 11 } }}>
        <H2 margin={{ bottom: { xs: 4 } }}>{sections.approach.title}</H2>
        <HalfContainer>{approaches}</HalfContainer>
      </LayoutContainer>
    </div>
  );
};

export default ({ data }: { data: Data }) => {
  const { store, error } = useStore(data);
  if (!store) {
    return <p>NO DATA</p>;
  }
  return (
    <>
      <AboutSection titles={store.titles} projects={store.projects.projects} />
      <ProjectsSection sections={store.sections} projects={store.projects} />
      <ApproachSection sections={store.sections} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { data, error } = await fetchData();
  return { props: { data } };
};
