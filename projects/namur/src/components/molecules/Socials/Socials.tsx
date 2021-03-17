import React from 'react';
import Image, { FluidObject } from 'gatsby-image';

import Link from '@/components/atoms/Link';

import { ImageType } from '@/types/image';
import LinkType from '@/types/link';
import styled from '@emotion/styled';

export interface SocialProps {
  icon: ImageType;
  link: LinkType;
}

export interface SocialsProps {
  socials: SocialProps[];
}

const LinkStyled = styled(Link)`
  display: block;
  &:not(:first-of-type) {
    margin-left: ${({ theme }) => theme.spacing(3)};
  }
`;

const SocialIcon = styled(Image)`
  width: 25px;
  height: 25px;
`;

const Social = (props: SocialProps): JSX.Element => {
  const { icon, link } = props;

  return (
    <LinkStyled to={link.url as string} target={link.target as string}>
      <SocialIcon fluid={icon?.fluid as FluidObject} />
    </LinkStyled>
  );
};

const Socials = ({ socials }: SocialsProps): JSX.Element => {
  const SocialsItems = socials?.map((social, index) => (
    <Social key={index.toString()} {...social} />
  ));

  return <>{SocialsItems}</>;
};

export default Socials;
