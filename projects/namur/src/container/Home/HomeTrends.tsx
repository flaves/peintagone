import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import AliceCarousel from 'react-alice-carousel';

import Button from '@/components/atoms/Button';
import Link from '@/components/atoms/Link';
import Container from '@/components/atoms/Layout/Container';
import Typography from '@/components/atoms/Typography';
import Grid from '@/components/atoms/Layout/Grid';
import Img from '@/components/atoms/Img';
import Arrow from '@/components/atoms/Arrow';

import { ButtonProps } from '@/types/button';
import { ImageType } from '@/types/image';
import mq from '@/styles/mq';

interface TrendProps {
  image?: ImageType;
  name?: string | null;
  color?: string | null;
  onDragStart?: (e: React.MouseEvent) => void;
}

interface Props {
  title?: React.ReactNode;
  text?: React.ReactNode;
  button?: ButtonProps;
  trends?: TrendProps[];
}

const Root = styled(Container)<Props>`
  display: flex;
  margin-top: ${({ theme }) => theme.spacing(10)};
`;
const ContentGrid = styled(Grid)`
  padding-left: ${({ theme }) => theme.spacing(2)};

  ${mq('lg')} {
    padding-left: 0;
  }
`;
const CarouselGrid = styled(Grid)`
  position: relative;
  margin-top: ${({ theme }) => theme.spacing(3)};

  ${mq('lg')} {
    margin-top: 0;
  }
`;
const Title = styled(Typography)`
  text-align: center;

  ${mq('md')} {
    text-align: left;
  }
`;
const ButtonStyled = styled(Button)`
  margin-top: ${({ theme }) => theme.spacing(1.5)};
`;
const TrendContainer = styled.div`
  position: relative;
  height: 450px;
  margin-left: ${({ theme }) => theme.spacing(2)};
  margin-right: ${({ theme }) => theme.spacing(2)};
`;
const TrendImage = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const TrendButton = styled(Button)`
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
`;
const ArrowPrev = styled(Arrow)`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);

  ${mq('lg')} {
    display: none;
  }
`;
const ArrowNext = styled(Arrow)`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);

  ${mq('lg')} {
    right: -50px;
  }
`;
const DesktopButton = styled.div`
  display: none;

  ${mq('md')} {
    display: block;
  }
`;
const MobileButton = styled.div`
  display: flex;
  justify-content: center;

  ${mq('md')} {
    display: none;
  }
`;

const Trend = ({ name, image, color }: TrendProps): JSX.Element => {
  return (
    <TrendContainer>
      <TrendImage src={image?.url} alt={image?.alt} sizes="400px" />
      <TrendButton
        variant="contained"
        css={css`
          background-color: ${color};
          cursor: pointer;
        `}
      >
        {name}
      </TrendButton>
    </TrendContainer>
  );
};

const HomeTrends = ({ title, text, button, trends }: Props): JSX.Element => {
  const handleDragStart = (e: React.MouseEvent) => e.preventDefault();

  const Trends = trends?.map((trend, index) => (
    <Trend onDragStart={handleDragStart} key={index.toString()} {...trend} />
  ));

  return (
    <>
      <Root>
        <Grid container>
          <ContentGrid lg={4} xxs={12}>
            <Title variant="h2">{title}</Title>
            <Typography variant="textMd">{text}</Typography>
            <DesktopButton>
              <ButtonStyled
                as={Link}
                variant="contained"
                color="primary"
                {...{ to: button?.link, target: button?.target }}
              >
                {button?.label}
              </ButtonStyled>
            </DesktopButton>
          </ContentGrid>
          <CarouselGrid lg={8} xxs={12}>
            <AliceCarousel
              mouseTracking
              disableDotsControls
              infinite
              responsive={{
                0: { items: 1 },
                980: { items: 2 },
                1240: { items: 2 },
              }}
              renderPrevButton={(): JSX.Element => (
                <ArrowPrev variant="primary" />
              )}
              renderNextButton={(): JSX.Element => (
                <ArrowNext variant="primary" type="next" />
              )}
              items={Trends}
            />
          </CarouselGrid>
        </Grid>
        {/* Show button below carousel on mobile */}
      </Root>
      <MobileButton>
        <ButtonStyled
          as={Link}
          variant="contained"
          color="primary"
          {...{ to: button?.link, target: button?.target }}
        >
          {button?.label}
        </ButtonStyled>
      </MobileButton>
    </>
  );
};

export const query = graphql`
  fragment HomeTrends on PrismicHomePageDataType {
    trends_section_title {
      raw
    }
    trends_section_text {
      raw
    }
    trends_button_label
    trends_button_link {
      url
      target
    }
    trends {
      trend_image {
        url
        alt
      }
      trend_name
      trend_color
    }
  }
`;

export default HomeTrends;
