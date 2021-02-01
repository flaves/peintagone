import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';

import { NavDesktop, NavMobile } from '@/components/molecules/Navigation';
import Logo from '@/components/atoms/Logo';
import Container from '@/components/atoms/Container';

import mq from '@/styles/mq';

import LinkProps from '@/types/link';

interface Props {
  links?: LinkProps[];
}

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing(2.5)};

  ${mq('lg')} {
    justify-content: flex-start;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;

  ${mq('lg')} {
    justify-content: flex-start;
    margin-right: ${({ theme }) => theme.spacing(5)};
  }
`;

const Header = ({ links }: Props): JSX.Element => {
  return (
    <Container>
      <NavContainer>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        {links && (
          <>
            <NavDesktop links={links} />
            <NavMobile links={links} />
          </>
        )}
      </NavContainer>
    </Container>
  );
};

export const query = graphql`
  fragment Navigation on PrismicNavigation {
    data {
      links {
        label
        link {
          url
          target
        }
      }
    }
  }
`;

export default Header;
