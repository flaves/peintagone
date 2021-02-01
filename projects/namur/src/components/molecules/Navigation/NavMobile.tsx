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

import mq from '@/styles/mq';

import { useCompanyInfosContext } from '@/contexts/companyInfosContext';

import LinkProps from '@/types/link';

interface Props {
  links: LinkProps[];
}

const Root = styled.div`
  display: block;

  ${mq('lg')} {
    display: none;
  }
`;
const Menu = styled.div`
  position: fixed;
  z-index: ${({ theme }) => theme.zIndex.menu};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.color.primary.main};
  color: ${({ theme }) => theme.color.white.main};
  transform: translateX(150vw);
  transition: all 0.5s ease;
`;
const LinkStyled = styled(Link)`
  display: block;
  color: ${({ theme }) => theme.color.textSecondary.main};
  margin-top: ${({ theme }) => theme.spacing(2)};
  font-size: 2.4rem;
  font-weight: 700;

  &:hover {
    color: ${({ theme }) => theme.color.textPrimary.main};
  }
`;
const FabButtonStyled = styled(FabButton)`
  position: fixed;
  bottom: 5%;
  right: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: ${({ theme }) => theme.zIndex.fixed};
  box-shadow: 0 4px 8px 0 #393939;
`;
const ButtonText = styled.span`
  font-size: 1.2rem;
  font-weight: 800;
  color: ${({ theme }) => theme.color.textSecondary.main};
`;
const CloseIcon = styled(FontAwesomeIcon)`
  font-size: 2rem;
`;
const MenuContent = styled(Container)`
  margin-top: ${({ theme }) => theme.spacing(3)};
`;
const MenuText = styled.p`
  color: ${({ theme }) => theme.color.textSecondary.main};
  font-weight: 800;
`;
const LinksContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing(3)};

  ${mq('sm')} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const CompanyInfosContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing(4)};
  line-height: 2;

  ${mq('sm')} {
    text-align: center;
  }
`;
const show = css`
  transform: translateX(0);
`;

const NavMobile = ({ links }: Props): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);
  const { companyInfos } = useCompanyInfosContext();

  const Links = links.map((link, index) => (
    <LinkStyled
      key={index.toString()}
      to={link.url || ''}
      target={link.target || ''}
    >
      {link.label}
    </LinkStyled>
  ));

  return (
    <Root>
      <FabButtonStyled onClick={() => setOpen(true)} bgColor="primary">
        <ButtonText>menu</ButtonText>
      </FabButtonStyled>
      <Menu css={open && show}>
        <MenuContent>
          <Grid container justifyContent="center">
            <Logo />
          </Grid>
          <LinksContainer>{Links}</LinksContainer>
          <CompanyInfosContainer>
            <MenuText>{companyInfos.email}</MenuText>
            <MenuText>{companyInfos.phone}</MenuText>
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
