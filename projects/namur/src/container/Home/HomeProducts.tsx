import React, { useEffect, useMemo, useState } from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';

import Img from '@/components/atoms/Img';
import Link from '@/components/atoms/Link';
import Typography from '@/components/atoms/Typography';
import Container from '@/components/atoms/Layout/Container';

import mq from '@/styles/mq';

import LinkType from '@/types/link';
import Grid from '@/components/atoms/Layout/Grid';

interface TypeType {
  type_name?: string;
}

interface PartnerType {
  partner_name?: string;
  partner_link?: LinkType;
}

interface ProductProps {
  id?: string;
  category_name?: string;
  category_types?: TypeType[];
  category_partners?: PartnerType[];
  setCurrentId: (id?: string) => void;
  active?: boolean;
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
const ProductContainer = styled.article<{ active?: boolean }>`
  background-color: ${({ active, theme }) =>
    active ? theme.color.primary.main : theme.color.white.main};
  text-align: center;
  padding: ${({ theme }) => theme.spacing(1)};
  color: ${({ active, theme }) =>
    active ? theme.color.white.main : theme.color.primary.main};
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;
`;
const ProductName = styled.p`
  font-size: 1.75rem;
  font-weight: 800;
`;
const ProductTypes = styled.ul`
  margin: ${({ theme }) => theme.spacing(2)} 0;

  ${mq(`lg`)} {
    display: flex;
    flex-wrap: wrap;
  }
`;
const ProductType = styled.li`
  background-color: ${({ theme }) => theme.color.secondary.main};
  margin-right: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => theme.spacing(1)};
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;
const ProductPartners = styled.ul`
  ${mq(`md`)} {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    max-height: 120px;
  }
`;
const ProductPartner = styled.li`
  margin-bottom: ${({ theme }) => theme.spacing(1)};
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.color.primary.main};
`;

const Product = ({
  id,
  category_name,
  setCurrentId,
  active,
}: ProductProps): JSX.Element => {
  return (
    <ProductContainer onClick={() => setCurrentId(id)} active={active}>
      <ProductName>{category_name}</ProductName>
    </ProductContainer>
  );
};

const Types = ({ types }: { types?: TypeType[] }) => {
  return (
    <ProductTypes>
      {types?.map((type) => (
        <ProductType>{type.type_name}</ProductType>
      ))}
    </ProductTypes>
  );
};

const Partners = ({ partners }: { partners?: PartnerType[] }) => {
  return (
    <ProductPartners>
      {partners?.map((partner) => (
        <ProductPartner>{partner.partner_name}</ProductPartner>
      ))}
    </ProductPartners>
  );
};

const HomeProducts = ({ title, text, products }: Props): JSX.Element => {
  const [currentId, setCurrentId] = useState<string>();

  useEffect(() => setCurrentId(products?.[0]?.id), []);

  const currentCategory = useMemo(
    () => products?.find((p) => p?.id === currentId),
    [currentId],
  );

  const Products = products?.map((product, index) => (
    <ProductItem>
      <Product
        {...product}
        key={index.toString()}
        setCurrentId={setCurrentId}
        active={product?.id === currentId}
      />
    </ProductItem>
  ));

  return (
    <Root>
      <Typography variant="h2">{title}</Typography>
      <ProductsText variant="textMd">{text}</ProductsText>
      <ProductsContainer>{Products}</ProductsContainer>
      <Types types={currentCategory?.category_types} />
      <Partners partners={currentCategory?.category_partners} />
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
