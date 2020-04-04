import styled from 'styled-components';
import { withMargins } from '../layout';

import Logo from './logo.svg';
import Facebook from './facebook.svg';
import Twitter from './twitter.svg';
import LinkedIn from './linkedin.svg';
import Houzz from './houzz.svg';
import GooglePlus from './googleplus.svg';
import Pinterest from './pinterest.svg';
import Instagram from './instagram.svg';
import LinkArrow from './arrow.svg';
import HorizontalWave from './wave-horizontal.svg';
import VerticalWave from './wave-vertical.svg';
import MenuOpen from './menu-open.svg';
import MenuClose from './menu-close.svg';

const GreyHorizontalWave = styled(HorizontalWave)`
  fill: ${({ theme }) => theme.grey};
  transition: ${({ theme }) => theme.transitions.all};
  ${withMargins}
`;

const YellowHorizontalWave = styled(HorizontalWave)`
  fill: ${({ theme }) => theme.yellow};
  ${withMargins}
`;

export {
  Logo,
  Facebook,
  Twitter,
  LinkedIn,
  Houzz,
  GooglePlus,
  Pinterest,
  Instagram,
  LinkArrow,
  GreyHorizontalWave,
  YellowHorizontalWave,
  VerticalWave,
  MenuOpen,
  MenuClose,
};
