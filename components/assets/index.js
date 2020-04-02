import styled from "@emotion/styled";
import { withMargins } from "../layout";

import { ReactComponent as Logo } from "./logo.svg";
import { ReactComponent as Facebook } from "./facebook.svg";
import { ReactComponent as Twitter } from "./twitter.svg";
import { ReactComponent as LinkedIn } from "./linkedin.svg";
import { ReactComponent as Houzz } from "./houzz.svg";
import { ReactComponent as GooglePlus } from "./googleplus.svg";
import { ReactComponent as Pinterest } from "./pinterest.svg";
import { ReactComponent as Instagram } from "./instagram.svg";
import { ReactComponent as LinkArrow } from "./arrow.svg";
import { ReactComponent as HorizontalWave } from "./wave-horizontal.svg";
import { ReactComponent as VerticalWave } from "./wave-vertical.svg";
import { ReactComponent as MenuOpen } from "./menu-open.svg";
import { ReactComponent as MenuClose } from "./menu-close.svg";

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
  MenuClose
};
