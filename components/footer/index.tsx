import React, { ReactNode } from 'react';
import { useRouter } from 'next/router';

import { LayoutContainer, FooterLayoutContainer } from '../layout';
import { SocialLink, SocialIcons } from '../social-link';
import { StyledAddress, StyledSocialLinks, StyledSocialLink } from './styles';

interface DetailsData {
  address: string;
  phone: string;
}

interface SocialData {
  name: string;
  link: string;
}

type socialName = 'Facebook' | 'Twitter' | 'LinkedIn' | 'Houzz' | 'GooglePlus' | 'Pinterest' | 'Instagram';

interface FooterData {
  details: DetailsData;
  social: SocialData[];
}

const Footer = ({ data }: { data: FooterData }) => {
  const { details, social } = data;

  const socialLinks = social.map((social) => {
    const assetName = social.name === 'Google+' ? 'GooglePlus' : social.name;
    const AssetClass = SocialIcons[assetName as socialName];
    return (
      <StyledSocialLink key={social.name}>
        <SocialLink link={social.link} name={social.name}>
          <AssetClass />
        </SocialLink>
      </StyledSocialLink>
    );
  });

  const router = useRouter();

  const responsiveAddress =
    router.pathname !== '/' &&
    router.pathname.indexOf('/our-work') === -1 &&
    router.pathname.indexOf('/about-us') === -1;

  return (
    <footer>
      <LayoutContainer>
        <FooterLayoutContainer>
          <StyledAddress responsive={responsiveAddress}>{`${details.address}. ${details.phone}`}</StyledAddress>
          <StyledSocialLinks>{socialLinks}</StyledSocialLinks>
        </FooterLayoutContainer>
      </LayoutContainer>
    </footer>
  );
};

export { Footer };
