import Menu from '../components/menu';

import styled from 'styled-components';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Contact = () => (
  <div>
    <Menu />
    <Title>Get in touch!</Title>
  </div>
);

export default Contact;
