import React from 'react';

import Link from '@/components/atoms/Link';
import Img from '@/components/atoms/Img';

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

const SocialIcon = styled(Img)`
  width: 25px;
  height: 25px;
  object-fit: contain;
`;

const Social = (props: SocialProps): JSX.Element => {
  const { icon, link } = props;

  return (
    <LinkStyled to={link.url} target={link.target}>
      <SocialIcon
        src={icon.url}
        alt={icon.alt}
        width={30}
        height={30}
        sizes="30px"
      />
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
