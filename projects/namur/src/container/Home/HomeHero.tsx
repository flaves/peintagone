import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';

import Grid from '@/components/atoms/Grid';
import Typography from '@/components/atoms/Typography';
import Img from '@/components/atoms/Img';

import mq from '@/styles/mq';

import BlueArrow from '@/svg/BlueArrow.svg';
import Pentagon from '@/svg/Pentagon.svg';

import { ImageType } from '@/types/image';

interface Props {
  title?: React.ReactNode;
  text?: React.ReactNode;
  textMobile?: React.ReactNode;
  image?: ImageType;
}

const Root = styled.div`
  position: relative;
  margin-top: ${({ theme }) => theme.spacing(3)};
`;
const ContentContainer = styled(Grid)`
  text-align: center;
  max-width: 100vw;
  padding: 0;

  ${mq('md')} {
    max-width: ${({ theme }) => theme.breakpoints.md}px;
    text-align: left;
    margin: ${({ theme }) => theme.spacing(10)} auto auto;
  }
`;
const TextGrid = styled(Grid)`
  // Blue arrow relative to container on large screen
  ${mq('xl')} {
    position: relative;
  }
`;
const TextContainer = styled.div`
  position: relative;
  padding-left: ${({ theme }) => theme.spacing(3)};
  padding-right: ${({ theme }) => theme.spacing(3)};
  z-index: ${({ theme }) => theme.zIndex.content};
`;
const HeroText = styled(Typography)`
  display: none;
  margin-top: ${({ theme }) => theme.spacing(1)};

  ${mq('md')} {
    display: block;
  }
`;
const HeroTextMobile = styled(Typography)`
  display: block;
  margin-top: ${({ theme }) => theme.spacing(1)};
  margin-bottom: ${({ theme }) => theme.spacing(3)};

  ${mq('md')} {
    display: none;
  }
`;
const BlueArrowStyled = styled(BlueArrow)`
  display: none;

  ${mq('md')} {
    display: block;
    position: absolute;
    top: -80px;
    left: -500px;
    z-index: ${({ theme }) => theme.zIndex.top};
    opacity: 0.06;
    height: 900px;
  }
`;
const ImageGrid = styled(Grid)`
  ${mq('xl')} {
    position: relative;
  }
`;
const PentagonStyled = styled(Pentagon)`
  display: none;

  ${mq('md')} {
    display: block;
    position: absolute;
    top: -40%;
    right: 50px;
    height: 600px;
  }
`;
const ImageContainer = styled(Grid)`
  position: relative;
  height: 500px;
  overflow: hidden;
  z-index: ${({ theme }) => theme.zIndex.content};

  ${mq('md')} {
    height: 760px;
    max-width: 650px;
    position: absolute;
    top: -25%;
    right: 0;
  }

  ${mq('xl')} {
    height: 600px;
  }
`;
const HeroImage = styled(Img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;

  ${mq('md')} {
    display: block;
    margin-left: auto;
    position: relative;
    top: 0;
    clip-path: polygon(59% 0, 100% 24%, 100% 100%, 21% 100%, 0 29%);
  }
`;

const HomeHero = ({ title, text, textMobile, image }: Props): JSX.Element => {
  return (
    <Root>
      <ContentContainer container>
        <TextGrid md={6} xs={12}>
          <BlueArrowStyled />
          <TextContainer>
            <Typography as="div" variant="h1">
              {title}
            </Typography>
            <HeroText variant="textLg">{text}</HeroText>
            <HeroTextMobile variant="textLg">{textMobile}</HeroTextMobile>
          </TextContainer>
        </TextGrid>
        <ImageGrid md={6} xs={12}>
          <PentagonStyled />
          {image && (
            <ImageContainer>
              <HeroImage
                src={image?.url}
                alt={image?.alt}
                sizes="(max-width: 1240px) 100vw, 50vw"
              />
            </ImageContainer>
          )}
        </ImageGrid>
      </ContentContainer>
    </Root>
  );
};

export const query = graphql`
  fragment HomeHero on PrismicHomePageDataType {
    hero_title {
      raw
    }
    hero_text {
      raw
    }
    hero_text_mobile {
      raw
    }
    hero_image {
      url
      alt
    }
  }
`;

export default HomeHero;
