import React from 'react';

import { NavDesktop, NavMobile } from '@/components/molecules/Navigation';
import Logo from '@/components/atoms/Logo';
import Container from '@/components/atoms/Container';
import Grid from '@/components/atoms/Grid';

import LinkProps from '@/types/link';

interface Props {
  links: LinkProps[];
}

const Header = ({ links }: Props): JSX.Element => {
  return (
    <Container>
      <Grid mt={2.5} container alignItems="center" spacing={1}>
        <Logo />
        <NavDesktop links={links} />
        <NavMobile links={links} />
      </Grid>
    </Container>
  );
};

export default Header;
