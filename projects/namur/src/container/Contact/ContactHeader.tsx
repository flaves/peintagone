import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/pro-solid-svg-icons';

import Container from '@/components/atoms/Layout/Container';
import Typography from '@/components/atoms/Typography';
import Link from '@/components/atoms/Link';

import mq from '@/styles/mq';
import Logo from '@/components/atoms/Logo';

interface Props {
  title?: React.ReactNode;
  text?: React.ReactNode;
}

const Root = styled(Container)<Props>`
  margin-top: ${({ theme }) => theme.spacing(5)};
  text-align: center;

  ${mq('lg')} {
    text-align: left;
  }
`;
const LogoLink = styled(Link)`
  display: block;

  ${mq('lg')} {
    display: none;
  }
`;
const Back = styled(Link)`
  color: ${({ theme }) => theme.color.primary.main};
  display: none;

  ${mq('lg')} {
    display: block;
  }
`;
const BackArrow = styled(FontAwesomeIcon)`
  margin-right: ${({ theme }) => theme.spacing(1)};
`;
const Title = styled(Typography)`
  margin-top: ${({ theme }) => theme.spacing(2)};

  ${mq('lg')} {
    margin-top: 0;
  }
`;
const Text = styled(Typography)``;

const ContactHeader = ({ title, text }: Props): JSX.Element => {
  return (
    <Root>
      <LogoLink to="/">
        <Logo />
      </LogoLink>
      <Back to="/">
        <BackArrow icon={faArrowLeft} />
        Revenir à la page d&apos;accueil
      </Back>
      <Title variant="h1">{title}</Title>
      <Text variant="textLg">{text}</Text>
    </Root>
  );
};

export const query = graphql`
  fragment ContactHeader on PrismicContactPageDataType {
    title {
      raw
    }
    text {
      raw
    }
  }
`;

export default ContactHeader;
