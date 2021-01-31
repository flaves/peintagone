import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import Button from '@/components/atoms/Button';
import Link from '@/components/atoms/Link';
import Container from '@/components/atoms/Container';
import Background from '@/components/atoms/Background';

import { ButtonProps } from '@/types/button';
import { BackgroundProps } from '@/components/atoms/Background/Background';
import Typography from '@/components/atoms/Typography';
import mq from '@/styles/mq';

interface Props {
  background?: BackgroundProps;
  title?: React.ReactNode;
  text?: React.ReactNode;
  button?: ButtonProps;
}

const Root = styled(Container)<Props>`
  padding: 0;
  margin-top: ${({ theme }) => theme.spacing(10)};

  ${mq('md')} {
    padding: 0 3rem;
  }
`;
const Text = styled(Typography)`
  margin-top: ${({ theme }) => theme.spacing(2)};
  ${mq('md')} {
    margin-top: ${({ theme }) => theme.spacing(1)};
  }
`;
const ButtonStyled = styled(Button)`
  margin-top: ${({ theme }) => theme.spacing(2.5)};
`;
const contentContainer = css`
  padding: 10rem;
`;

const HomeQuestion = ({
  background,
  title,
  text,
  button,
}: Props): JSX.Element => {
  const { label, link, target } = button || {};

  return (
    <Root maxWidth={1024}>
      <Background
        classes={{ content: contentContainer }}
        overlay
        {...background}
      >
        <Typography color="white" variant="h2">
          {title}
        </Typography>
        <Text variant="h4" color="white">
          {text}
        </Text>
        <ButtonStyled
          variant="outlined"
          color="white"
          as={Link}
          {...{ to: link, target }}
        >
          {label}
        </ButtonStyled>
      </Background>
    </Root>
  );
};

export const query = graphql`
  fragment HomeQuestion on PrismicHomePageDataType {
    question_background {
      url
      alt
    }
    question_mobile_background {
      url
      alt
    }
    question_section_title {
      raw
    }
    question_section_text {
      raw
    }
    question_button_label
    question_button_link {
      url
      target
    }
  }
`;

export default HomeQuestion;
