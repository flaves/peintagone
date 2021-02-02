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

  ${mq('lg')} {
    margin-top: ${({ theme }) => theme.spacing(10)};
    padding: 0 3rem;
  }
`;
const Title = styled(Typography)`
  text-align: center;

  ${mq('lg')} {
    text-align: left;
  }
`;
const Text = styled(Typography)`
  margin-top: ${({ theme }) => theme.spacing(2)};
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 60ch;

  ${mq('lg')} {
    text-align: left;
    margin-left: 0;
    margin-right: 0;
    margin-top: ${({ theme }) => theme.spacing(1)};
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;

  ${mq('lg')} {
    justify-content: flex-start;
  }
`;
const ButtonStyled = styled(Button)`
  margin-top: ${({ theme }) => theme.spacing(2.5)};
`;
const contentContainer = css`
  padding: 5rem;

  ${mq('lg')} {
    padding: 10rem;
  }
`;

const HomeQuestion = ({
  background,
  title,
  text,
  button,
}: Props): JSX.Element => {
  const { label, link, target } = button || {};

  return (
    <Root>
      <Background
        classes={{ content: contentContainer }}
        overlay
        {...background}
      >
        <Title color="white" variant="h2">
          {title}
        </Title>
        <Text variant="h4" color="white">
          {text}
        </Text>
        <ButtonContainer>
          <ButtonStyled
            variant="outlined"
            color="white"
            as={Link}
            {...{ to: link, target }}
          >
            {label}
          </ButtonStyled>
        </ButtonContainer>
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
