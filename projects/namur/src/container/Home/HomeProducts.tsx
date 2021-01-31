import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import Img from '@/components/atoms/Img';
import Link from '@/components/atoms/Link';
import Typography from '@/components/atoms/Typography';
import Container from '@/components/atoms/Container';
import Arrow from '@/components/atoms/Arrow';

import mq from '@/styles/mq';

import { ImageType } from '@/types/image';
import LinkType from '@/types/link';

interface ProductProps {
  image?: ImageType;
  link?: LinkType;
  name?: string | null;
}

interface Props {
  title?: React.ReactNode;
  text?: React.ReactNode;
  products?: ProductProps[];
}

const Root = styled(Container)<Props>`
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.content};
  margin-top: ${({ theme }) => theme.spacing(5)};
  text-align: center;

  ${mq('lg')} {
    margin-top: ${({ theme }) => theme.spacing(25)};
    text-align: left;
  }
`;
const ProductsText = styled(Typography)`
  display: none;
  ${mq('lg')} {
    display: block;
  }
`;
const ProductsContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing(2)};
  padding-left: ${({ theme }) => theme.spacing(2)};
  padding-right: ${({ theme }) => theme.spacing(2)};

  ${mq('lg')} {
    margin-top: ${({ theme }) => theme.spacing(3)};
    padding-left: 0;
    padding-right: 0;
  }
`;
const ProductLink = styled(Link)`
  display: block;
`;
const ProductImage = styled(Img)`
  display: block;
  margin: auto;
`;
const ProductName = styled.p`
  font-size: 1.8rem;
  font-weight: 800;
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing(2)};
`;
const ArrowStyled = styled(Arrow)`
  width: 50px;
  position: absolute;
  top: 100px;
  left: -5%;

  ${mq('lg')} {
    display: none;
  }
`;
const ArrowNextStyled = styled(ArrowStyled)`
  left: initial;
  right: -5%;
`;

const Product = ({ image, link, name }: ProductProps): JSX.Element => {
  if (!link?.url) return <div />;

  return (
    <ProductLink to={link.url} target={link?.target || '_blank'}>
      <ProductImage
        src={image?.url}
        alt={image?.alt}
        height={200}
        width={220}
        sizes="220px"
      />
      <ProductName>{name}</ProductName>
    </ProductLink>
  );
};

const HomeProducts = ({ title, text, products }: Props): JSX.Element => {
  const { breakpoints } = useTheme();

  const Products = products?.map((product, index) => (
    <Product key={index.toString()} {...product} />
  ));

  const carouselResponsive = {
    0: {
      items: 1,
    },
    [breakpoints.sm]: {
      items: 3,
    },
    [breakpoints.lg]: {
      items: 5,
    },
  };

  return (
    <Root>
      <Typography variant="h2">{title}</Typography>
      <ProductsText variant="textMd">{text}</ProductsText>
      <ProductsContainer>
        <AliceCarousel
          mouseTracking
          disableDotsControls
          infinite
          responsive={carouselResponsive}
          renderPrevButton={() => <ArrowStyled type="prev" />}
          renderNextButton={() => <ArrowNextStyled type="next" />}
          items={Products}
        />
      </ProductsContainer>
    </Root>
  );
};

export const query = graphql`
  fragment HomeProducts on PrismicHomePageDataType {
    product_section_title {
      raw
    }
    product_section_text {
      raw
    }
    products {
      image {
        url
        alt
      }
      name
      link {
        url
        target
      }
    }
  }
`;

export default HomeProducts;
