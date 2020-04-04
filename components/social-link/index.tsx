import React, { ReactNode } from 'react';

import { Facebook, Twitter, LinkedIn, Houzz, GooglePlus, Pinterest, Instagram } from '../assets';
import { StyledSocialLink } from './styles';

interface SocialLinkProps {
  children: ReactNode;
  link: string;
  name: string;
}

export const SocialIcons = {
  Facebook,
  Twitter,
  LinkedIn,
  Houzz,
  GooglePlus,
  Pinterest,
  Instagram,
};

export const SocialLink = ({ children, link }: SocialLinkProps) => (
  <StyledSocialLink href={link} rel="external" target="_blank">
    {children}
  </StyledSocialLink>
);
