import React from 'react';
import mocks from '../mocks';

import { H1, H3, P } from '../components/typography';
import { Section, SectionIntro } from '../components/section';
import { LayoutContainer, AboutContainer, AboutPictureContainer, HalfContainer } from '../components/layout';
import { GreyHorizontalWave } from '../components/assets';
import { Picture, getPictureData } from '../components/picture';

class About extends React.PureComponent {
  render() {
    const project = mocks.sections.about.project;
    const pictureProject = mocks.projects.projects.find((p) => p.id === project.id);
    const picture = pictureProject && pictureProject.images[project.imageIndex];

    return (
      <Section>
        <LayoutContainer>
          <H1 margin={{ top: { xs: 12 }, bottom: { xs: 3 } }}>{mocks.sections.about.title}</H1>
          <SectionIntro margin={{ bottom: { xs: 11 } }}>{mocks.sections.about.content}</SectionIntro>
        </LayoutContainer>
        <AboutContainer background={{ offset: { right: true } }} margin={{ bottom: { xs: 20 } }}>
          <AboutPictureContainer>
            {picture && (
              <Picture
                data={getPictureData({
                  ...picture,
                  aspectRatio: 'wide',
                })}
              />
            )}
          </AboutPictureContainer>
          <HalfContainer>
            <H3 margin={{ top: { xs: 9, md: 17 }, bottom: { xs: 2 } }}>{mocks.sections.howWeWork.title}</H3>
            <GreyHorizontalWave margin={{ bottom: { xs: 2 } }} />
            <P margin={{ bottom: { xs: 7, md: 10 } }}>{mocks.sections.howWeWork.content}</P>
            <H3 margin={{ top: { xs: 10 }, bottom: { xs: 2 } }}>{mocks.sections.brands.title}</H3>
            <GreyHorizontalWave margin={{ bottom: { xs: 2 } }} />
            <P
              margin={{ bottom: { xs: 7, md: 10 } }}
              dangerouslySetInnerHTML={{
                __html: mocks.sections.brands.content,
              }}
            />
            <H3 margin={{ top: { xs: 10 }, bottom: { xs: 2 } }}>{mocks.sections.partners.title}</H3>
            <GreyHorizontalWave margin={{ bottom: { xs: 2 } }} />
            <P
              margin={{ bottom: { xs: 7, md: 10 } }}
              dangerouslySetInnerHTML={{
                __html: mocks.sections.partners.content,
              }}
            />
            <H3 margin={{ top: { xs: 10 }, bottom: { xs: 2 } }}>{mocks.sections.turtles.title}</H3>
            <GreyHorizontalWave margin={{ bottom: { xs: 2 } }} />
            <P
              margin={{ bottom: { xs: 10, md: 17 } }}
              dangerouslySetInnerHTML={{
                __html: mocks.sections.turtles.content,
              }}
            />
          </HalfContainer>
        </AboutContainer>
      </Section>
    );
  }
}

export default About;
