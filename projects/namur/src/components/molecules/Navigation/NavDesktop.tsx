import React from 'react';
import styled from '@emotion/styled';

import Link from '@/components/atoms/Link';
import Grid from '@/components/atoms/Layout/Grid';

import mq from '@/styles/mq';

import LinkProps from '@/types/link';

interface Props {
  links: LinkProps[];
}

const LinkStyled = styled(Link)`
  font-size: 1.6rem;
  font-weight: 800;
  margin-right: ${({ theme }) => theme.spacing(5)};
`;

const NavGrid = styled(Grid)`
  display: none;

  ${mq('lg')} {
    display: block;
  }
`;

const NavDesktop = ({ links }: Props): JSX.Element => {
  const Links = links.map((link, index) => (
    <LinkStyled key={index.toString()} to={link.url || ''}>
      {link.label}
    </LinkStyled>
  ));

  return <NavGrid container>{Links}</NavGrid>;
};

export default NavDesktop;
