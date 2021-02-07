import React from 'react';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import AliceCarousel from 'react-alice-carousel';

import Container from '@/components/atoms/Layout/Container';
import Typography from '@/components/atoms/Typography';
import Grid from '@/components/atoms/Layout/Grid';
import Link from '@/components/atoms/Link';

import mq from '@/styles/mq';

interface PartnerProps {
  name?: string | null;
  link?: string | null;
  target?: string | null;
}

interface Props {
  title?: React.ReactNode;
  partners?: PartnerProps[];
}

const Root = styled(Container)<Props>`
  position: relative;
`;
const Title = styled(Typography)`
  padding: ${({ theme }) => theme.spacing(5)} 0;

  ${mq('lg')} {
    padding: ${({ theme }) => theme.spacing(14)} 0;
  }
`;
const MobileCarouselContainer = styled.div`
  ${mq('md')} {
    display: none;
  }
`;
const Partner = styled(Link)`
  display: block;
  text-align: center;
  width: 100%;
  font-size: 2.4rem;
  font-weight: 700;
  color: #bec4c6;
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.color.primary.main};
  }

  ${mq('md')} {
    font-size: 3.6rem;
  }
`;

const HomePartners = ({ title, partners }: Props): JSX.Element => {
  const handleDragStart = (e: React.MouseEvent) => e.preventDefault();

  const Partners = partners?.map((partner, index) => (
    // @ts-ignore
    <Partner
      key={index.toString()}
      to={partner?.link || ''}
      target={partner?.target || '_blank'}
      onDragStart={handleDragStart}
    >
      {partner?.name}
    </Partner>
  ));

  return (
    <Root>
      <Grid container justifyContent="center" alignItems="center">
        <Title variant="h2">{title}</Title>
        <MobileCarouselContainer>
          <AliceCarousel
            mouseTracking
            disableDotsControls
            infinite
            responsive={{ 0: { items: 3 } }}
            disableButtonsControls
            items={Partners}
          />
        </MobileCarouselContainer>
      </Grid>
    </Root>
  );
};

export const query = graphql`
  fragment HomePartners on PrismicHomePageDataType {
    partners_section_title {
      raw
    }
    partners {
      name
      link {
        url
        target
      }
    }
  }
`;

export default HomePartners;
