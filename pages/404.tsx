import React from 'react';

import { NotFoundContainer } from '../components/layout';
import { H1, P } from '../components/typography';
import { Section } from '../components/section';
import { ArrowLink } from '../components/link';

class NotFound extends React.PureComponent {
  render() {
    return (
      <Section>
        <NotFoundContainer>
          <H1 margin={{ bottom: { xs: 4.5, md: 3 } }}>404</H1>
          <P>There's nothing to see here</P>
          <ArrowLink href="/" margin={{ bottom: { xs: 11 } }}>
            Home
          </ArrowLink>
        </NotFoundContainer>
      </Section>
    );
  }
}

export default NotFound;
