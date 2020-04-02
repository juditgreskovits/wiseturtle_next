import React from 'react';
import mocks from '../mocks';

import { Section } from '../components/section';
import { ContactContainer } from '../components/layout';
import { H1, Address } from '../components/typography';

class Contact extends React.PureComponent {
  render() {
    const info = `${mocks.details.email}<br />${mocks.details.phone}<br />${mocks.details.address
      .split(', ')
      .join('<br />')}`;

    return (
      <Section>
        <ContactContainer>
          <H1 margin={{ bottom: { xs: 4.5, md: 3 } }}>{mocks.sections.contact.title}</H1>
          <Address dangerouslySetInnerHTML={{ __html: info }} />
        </ContactContainer>
      </Section>
    );
  }
}

export default Contact;
