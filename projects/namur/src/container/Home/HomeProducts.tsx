import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from '@emotion/styled';
import { v4 } from 'uuid';
import Image, { FluidObject } from 'gatsby-image';

import Typography from '@/components/atoms/Typography';
import Container from '@/components/atoms/Layout/Container';

import mq from '@/styles/mq';

import { ImageType } from '@/types/image';

interface ProductProps {
  uid?: string;
  category_name?: string;
  category_image?: ImageType | undefined | null;
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
  display: none;

  ${mq('lg')} {
    margin-top: ${({ theme }) => theme.spacing(10)};
    text-align: left;
  }
`;

const ProductsText = styled(Typography)`
  display: none;
  ${mq('lg')} {
    display: block;
  }
`;

const ProductsContainer = styled.ul`
  margin-top: ${({ theme }) => theme.spacing(2)};
  padding-left: ${({ theme }) => theme.spacing(2)};
  padding-right: ${({ theme }) => theme.spacing(2)};
  list-style: none;

  ${mq('lg')} {
    margin: ${({ theme }) => theme.spacing(3)} -1rem 0;
    padding-left: 0;
    padding-right: 0;
    display: flex;
  }
`;

const ProductItem = styled.li`
  ${mq(`lg`)} {
    flex: 0 0 20%;
    max-width: 20%;
    padding: 0 1rem;
  }
`;

const ProductContainer = styled(Link)`
  display: block;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;
  text-align: center;
`;

const ProductImg = styled(Image)`
  width: 100%;
  max-height: 220px;
  object-fit: cover;
`;

const ProductName = styled.p`
  font-size: 1.75rem;
  font-weight: 800;
  margin-top: ${({ theme }) => theme.spacing(1)};
`;

const Product = ({
  uid,
  category_name,
  category_image,
}: ProductProps): JSX.Element => {
  return (
    <ProductContainer to={`/categorie/${uid}`}>
      <ProductImg fluid={category_image?.fluid as FluidObject} />
      <ProductName>{category_name}</ProductName>
    </ProductContainer>
  );
};

const HomeProducts = ({ title, text, products }: Props): JSX.Element => {
  const Products = products?.map((product) => (
    <ProductItem key={v4()}>
      <Product {...product} />
    </ProductItem>
  ));

  return (
    <Root>
      <Typography variant="h2">{title}</Typography>
      <ProductsText variant="textMd">{text}</ProductsText>
      <ProductsContainer>{Products}</ProductsContainer>
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
      product_category {
        uid
        document {
          ... on PrismicProductCategory {
            ...Product
          }
        }
      }
    }
  }
`;

export default HomeProducts;
