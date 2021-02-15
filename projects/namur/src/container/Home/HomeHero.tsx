import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';

import Grid from '@/components/atoms/Layout/Grid';
import Typography from '@/components/atoms/Typography';
import Img from '@/components/atoms/Img';

import mq from '@/styles/mq';

import BlueArrow from '@/svg/BlueArrow.svg';
import Pentagon from '@/svg/Pentagon.svg';

import { ImageType } from '@/types/image';
import { faArrowDown } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
    text-align: left;
    margin-top: ${({ theme }) => theme.spacing(8)};
  }

  ${mq('lg')} {
    max-width: ${({ theme }) => theme.breakpoints.lg}px;
    margin: ${({ theme }) => theme.spacing(10)} auto auto;
  }
`;
const TextGrid = styled(Grid)`
  // Blue arrow relative to container on large screen
  ${mq('xxl')} {
    position: relative;
  }
`;
const TextContainer = styled.div`
  position: relative;
  padding-left: ${({ theme }) => theme.spacing(3)};
  padding-right: ${({ theme }) => theme.spacing(3)};
  z-index: ${({ theme }) => theme.zIndex.content};

  ${mq('md')} {
    padding-left: ${({ theme }) => theme.spacing(15)};
  }

  ${mq('lg')} {
    padding-left: ${({ theme }) => theme.spacing(3)};
  }
`;
const Title = styled(Typography)`
  max-width: 20ch;
  margin: auto;
`;
const HeroText = styled(Typography)`
  display: none;
  margin-top: ${({ theme }) => theme.spacing(1)};

  ${mq('lg')} {
    display: block;
  }
`;
const HeroTextMobile = styled(Typography)`
  display: block;
  margin-top: ${({ theme }) => theme.spacing(2)};
  margin-bottom: ${({ theme }) => theme.spacing(3)};

  ${mq('sm')} {
    max-width: 30ch;
    margin-left: auto;
    margin-right: auto;
  }

  ${mq('lg')} {
    display: none;
  }
`;
const BlueArrowStyled = styled(BlueArrow)`
  display: none;

  ${mq('lg')} {
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
  ${mq('xxl')} {
    position: relative;
  }
`;
const PentagonStyled = styled(Pentagon)`
  display: none;

  ${mq('md')} {
    display: block;
    position: absolute;
    top: -65%;
    right: -50px;
    height: 300px;
  }

  ${mq('lg')} {
    top: -40%;
    right: -50px;
    height: 600px;
  }
`;
const ImageContainer = styled(Grid)`
  position: relative;
  height: 500px;
  overflow: hidden;
  z-index: ${({ theme }) => theme.zIndex.content};

  ${mq('md')} {
    height: 480px;
    max-width: 450px;
    position: absolute;
    top: -55%;
    right: -5%;
  }

  ${mq('lg')} {
    top: -25%;
    height: 760px;
    max-width: 650px;
  }

  ${mq('xxl')} {
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
const ArrowContainer = styled(Grid)`
  display: none;
  margin-top: ${({ theme }) => theme.spacing(6.5)};

  ${mq('md')} {
    display: flex;
  }
`;
const Icon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.color.primary.main};
  font-size: 2.4rem;
`;

const HomeHero = ({ title, text, textMobile, image }: Props): JSX.Element => {
  return (
    <Root>
      <ContentContainer container>
        <TextGrid lg={6} md={7} xxs={12}>
          <BlueArrowStyled />
          <TextContainer>
            <Title as="div" variant="h1">
              {title}
            </Title>
            <HeroText variant="textLg">{text}</HeroText>
            <HeroTextMobile variant="textLg">{textMobile}</HeroTextMobile>
          </TextContainer>
        </TextGrid>
        <ImageGrid lg={6} md={5} xxs={12}>
          <PentagonStyled />
          {image && (
            <ImageContainer>
              <HeroImage
                src={image?.url}
                alt={image?.alt}
                sizes="(min-width: 980px) 40vw, 100vw"
              />
            </ImageContainer>
          )}
        </ImageGrid>
        <ArrowContainer container justifyContent="center" xs={12}>
          <Icon icon={faArrowDown} />
        </ArrowContainer>
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
