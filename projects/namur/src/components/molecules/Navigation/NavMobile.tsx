import React, { useState } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/pro-solid-svg-icons';

import Link from '@/components/atoms/Link';
import FabButton from '@/components/atoms/FabButton';
import Container from '@/components/atoms/Container';
import Logo from '@/components/atoms/Logo';
import Grid from '@/components/atoms/Grid';
import Typography from '@/components/atoms/Typography';

import mq from '@/styles/mq';

import { useCompanyInfosContext } from '@/contexts/companyInfosContext';

import LinkProps from '@/types/link';

interface Props {
  links: LinkProps[];
}

const Root = styled.div`
  display: block;

  ${mq('md')} {
    display: none;
  }
`;

const Menu = styled.div`
  position: absolute;
  z-index: ${({ theme }) => theme.zIndex.menu};
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
  transform: translateX(150vw);
  transition: all 0.5s ease;
`;

const LinkStyled = styled(Link)`
  display: block;
  color: ${({ theme }) => theme.color.textSecondary};
  margin-top: ${({ theme }) => theme.spacing(2)};
  font-size: 2.4rem;
  font-weight: 700;

  &:hover {
    color: ${({ theme }) => theme.color.textPrimary};
  }
`;

const FabButtonStyled = styled(FabButton)`
  position: fixed;
  bottom: 5%;
  right: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CloseIcon = styled(FontAwesomeIcon)`
  font-size: 2rem;
`;

const MenuContent = styled(Container)`
  margin-top: ${({ theme }) => theme.spacing(3)};
`;

const LinksContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing(3)};
`;

const CompanyInfosContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing(4)};
  line-height: 2;
`;

const show = css`
  transform: translateX(0);
`;

const NavMobile = ({ links }: Props): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);
  const { companyInfos } = useCompanyInfosContext();

  const Links = links.map((link, index) => (
    <LinkStyled key={index.toString()} to={link.url} target={link.target}>
      {link.label}
    </LinkStyled>
  ));

  return (
    <Root>
      <FabButtonStyled onClick={() => setOpen(true)} bgColor="primary">
        <Typography variant="p" fontWeight={700} color="textSecondary">
          menu
        </Typography>
      </FabButtonStyled>
      <Menu css={open && show}>
        <MenuContent>
          <Grid container justifyContent="center">
            <Logo />
          </Grid>
          <LinksContainer>{Links}</LinksContainer>
          <CompanyInfosContainer>
            <Typography color="textSecondary" fontWeight={800}>
              {companyInfos.email}
            </Typography>
            <Typography color="textSecondary" fontWeight={800}>
              {companyInfos.phone}
            </Typography>
          </CompanyInfosContainer>
          <FabButtonStyled onClick={() => setOpen(false)} bgColor="white">
            <CloseIcon icon={faTimes} />
          </FabButtonStyled>
        </MenuContent>
      </Menu>
    </Root>
  );
};

export default NavMobile;
