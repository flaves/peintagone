import React from 'react';
import styled from '@emotion/styled';
import { useScrollSection } from 'react-scroll-section';

import Link from '@/components/atoms/Link';
import Grid from '@/components/atoms/Layout/Grid';

import mq from '@/styles/mq';

import LinkType from '@/types/link';
import SectionsType from '@/types/sections';

interface Props {
  links: LinkType[];
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
  const products = useScrollSection(`products`);
  const trends = useScrollSection(`trends`);
  const partners = useScrollSection(`partners`);
  const team = useScrollSection(`team`);
  const map = useScrollSection(`map`);

  const sections: SectionsType = {
    products,
    trends,
    partners,
    team,
    map,
  };

  const Links = links.map((link, index) => (
    <LinkStyled
      key={index.toString()}
      to={link?.url || `/`}
      onClick={(e) => {
        if (link?.target) {
          e.preventDefault();

          sections?.[link?.target]?.onClick();
        }
      }}
    >
      {link.label}
    </LinkStyled>
  ));

  return <NavGrid container>{Links}</NavGrid>;
};

export default NavDesktop;
