import React from 'react';
import { css } from '@emotion/react';

import mq from '@/styles/mq';

import Link from '@/components/atoms/Link';
import Grid from '@/components/atoms/Grid';

import LinkProps from '@/types/link';
import styled from '@emotion/styled';

interface Props {
  links: LinkProps[];
}

const LinkStyled = styled(Link)`
  font-size: 1.6rem;
  font-weight: bold;
`;

const hideOnMobile = css`
  display: none;

  ${mq('md')} {
    display: block;
  }
`;

const NavDesktop = ({ links }: Props): JSX.Element => {
  const Links = links.map((link, index) => (
    <LinkStyled key={index.toString()} to={link.path}>
      {link.label}
    </LinkStyled>
  ));

  return (
    <Grid container spacing={2.5} css={hideOnMobile}>
      {Links}
    </Grid>
  );
};

export default NavDesktop;
