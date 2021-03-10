import React from 'react';
import { v4 } from 'uuid';
import styled from '@emotion/styled';
import ReactAliceCarousel from 'react-alice-carousel';

import Grid from '@/components/atoms/Layout/Grid';
import Img from '@/components/atoms/Img';

import mq from '@/styles/mq';

import { CategoryPageQuery } from '../../../graphql-types';

const Root = styled.section`
  margin-top: ${({ theme }) => theme.spacing(3)};
  padding-left: ${({ theme }) => theme.spacing(3)};
  padding-right: ${({ theme }) => theme.spacing(3)};
`;

const List = styled(Grid)`
  margin: 0 -1rem;
`;

const Item = styled(Grid)`
  margin-bottom: ${({ theme }) => theme.spacing(4)};
  text-align: center;

  ${mq(`sm`)} {
    flex: 0 0 50%;
    max-width: 50%;
    padding: 0 1rem;
  }

  ${mq(`lg`)} {
    flex: 0 0 25%;
    max-width: 25%;
    padding: 0 1rem;
  }
`;

const TypeImg = styled(Img)`
  width: 100%;
  max-height: 280px;
  object-fit: cover;
`;

const TypeText = styled.p`
  font-size: 1.75rem;
  font-weight: 800;
  margin-top: ${({ theme }) => theme.spacing(1)};
`;

interface Props {
  data: CategoryPageQuery;
}

const CategoryList = ({ data }: Props) => {
  const types = data.prismicProductCategory?.data?.product_types?.map(
    (product_type) => ({
      name: product_type?.product_type?.document?.data?.type_name,
      images: product_type?.product_type?.document?.data?.type_images?.map(
        (image) => ({
          url: image?.type_image?.url,
        }),
      ),
    }),
  );

  const renderTypes = () => (
    <List container>
      {types?.map((type) => (
        <Item key={v4()}>
          <ReactAliceCarousel
            disableButtonsControls
            disableDotsControls
            infinite
            autoPlay={type?.images?.length ? type?.images?.length > 1 : false}
            autoPlayInterval={1500}
          >
            {type?.images?.map((image) => (
              <TypeImg src={image?.url} />
            ))}
          </ReactAliceCarousel>
          <TypeText>{type?.name}</TypeText>
        </Item>
      ))}
    </List>
  );

  return <Root>{renderTypes()}</Root>;
};

export default CategoryList;
