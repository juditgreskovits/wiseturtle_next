import React from 'react';
import mocks from '../mocks';

import { Section, SectionIntro } from '../components/section';
import { LayoutContainer, ProjectInfosContainer, Background } from '../components/layout';
import { MarginDescriptor } from '../components/layout/withMargins';
import { H1 } from '../components/typography';
import { Picture, getPictureData } from '../components/picture';
import {
  ProjectInfo,
  ProjectInfoHeading,
  ProjectInfoHorizontalWave,
  ProjectInfoP,
  ArrowP,
} from '../components/project';

import { ProjectData } from '../types';

interface ProjectListProps {
  limit?: number;
  background?: boolean | Background;
  margin?: MarginDescriptor;
}

export const ProjectList = ({ limit, ...rest }: ProjectListProps) => {
  const { projects, order } = mocks.projects;
  const orderedProjects = order && order.length ? order.map((id) => projects.find((p) => p.id === id)) : projects;

  const projectInfos = orderedProjects.reduce((projectInfos, project, index) => {
    if (!limit || index < limit) {
      const p = project as ProjectData;
      const pInfo = (
        <ProjectInfo key={index} href={`/our-work/${p.id}`}>
          <Picture
            data={getPictureData({
              ...p.images[0],
              aspectRatio: 'square',
            })}
            lazyload={index > 1}
          />
          <ProjectInfoHeading>{p.title}</ProjectInfoHeading>
          <ProjectInfoHorizontalWave />
          <ProjectInfoP>{p.headline}</ProjectInfoP>
          <ArrowP>{p.info}</ArrowP>
        </ProjectInfo>
      );
      projectInfos.push(pInfo as never);
    }
    return projectInfos;
  }, []);

  return <ProjectInfosContainer {...rest}>{projectInfos}</ProjectInfosContainer>;
};

const Projects = () => (
  <Section>
    <LayoutContainer>
      <H1 margin={{ top: { xs: 7, md: 11 }, bottom: { xs: 3 } }}>{mocks.sections.ourWork.title}</H1>
      <SectionIntro margin={{ bottom: { xs: 11, md: 14 } }}>{mocks.sections.ourWork.content}</SectionIntro>
    </LayoutContainer>
    <ProjectList background={{ offset: { top: true } }} margin={{ bottom: { sm: 20 } }} />
  </Section>
);

export default Projects;
