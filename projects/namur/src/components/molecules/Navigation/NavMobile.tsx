import React, { useState } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/pro-solid-svg-icons';

import Link from '@/components/atoms/Link';
import FabButton from '@/components/atoms/FabButton';
import Container from '@/components/atoms/Container';
import Logo from '@/components/atoms/Logo';
import Box from '@/components/atoms/Box';
import Grid from '@/components/atoms/Grid';
import Typography from '@/components/atoms/Typography';

import theme from '@/styles/theme';
import mq from '@/styles/mq';

import { useCompanyInfosContext } from '@/contexts/companyInfosContext';

import LinkProps from '@/types/link';

interface Props {
  links: LinkProps[];
}

const { primary, textPrimary, textSecondary, white } = theme.color;

const Root = styled.div`
  display: block;

  ${mq('md')} {
    display: none;
  }
`;

const Menu = styled.div`
  position: absolute;
  z-index: ${theme.zIndex.menu};
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${primary};
  color: ${white};
  transform: translateX(150vw);
  transition: all 0.5s ease;
`;

const LinkStyled = styled(Link)`
  display: block;
  color: ${textSecondary};
  font-size: 2.4rem;
  margin-top: ${theme.spacing(2)};
  font-weight: 700;

  &:hover {
    color: ${textPrimary};
  }
`;

const button = css`
  position: fixed;
  bottom: 5%;
  right: 5%;
`;

const closeIcon = css`
  font-size: 2rem;
`;

const menuContentContainer = css`
  margin-top: ${theme.spacing(3)};
`;

const show = css`
  transform: translateX(0);
`;

const NavMobile = ({ links }: Props): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);
  const { companyInfos } = useCompanyInfosContext();

  const Links = links.map((link, index) => (
    <LinkStyled key={index.toString()} to={link.path}>
      {link.label}
    </LinkStyled>
  ));

  return (
    <Root>
      <FabButton onClick={() => setOpen(true)} bgColor="primary" css={button}>
        <Typography variant="body" fontWeight={700} color="textSecondary">
          menu
        </Typography>
      </FabButton>
      <Menu css={open && show}>
        <Container css={menuContentContainer}>
          <Grid container justifyContent="center">
            <Logo />
          </Grid>
          <Box mt={5}>
            {Links}
            <span>{companyInfos.email}</span>
            <span>{companyInfos.phone}</span>
          </Box>
          <FabButton
            onClick={() => setOpen(false)}
            bgColor="white"
            css={button}
          >
            <FontAwesomeIcon css={closeIcon} icon={faTimes} />
          </FabButton>
        </Container>
      </Menu>
    </Root>
  );
};

export default NavMobile;
