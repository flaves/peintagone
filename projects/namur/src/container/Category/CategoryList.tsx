import React, { useMemo, useState } from 'react';
import { v4 } from 'uuid';
import styled from '@emotion/styled';
import ReactAliceCarousel from 'react-alice-carousel';
import Image, { FluidObject } from 'gatsby-image';

import Grid from '@/components/atoms/Layout/Grid';

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

const TypeImg = styled(Image)`
  height: 260px;
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
  const [isHovered, setIsHovered] = useState<string[]>([]);

  const types = useMemo(
    () =>
      data.prismicProductCategory?.data?.product_types?.map((product_type) => ({
        id: v4(),
        name: product_type?.product_type?.document?.data?.type_name,
        images: product_type?.product_type?.document?.data?.type_images?.map(
          (image) => ({
            // @ts-ignore
            fluid: image?.type_image?.fluid,
          }),
        ),
      })),
    [],
  );

  console.log(isHovered);

  const renderTypes = () => (
    <List container>
      {types?.map((type) => {
        const isCarouselActive = isHovered.includes(type.id);

        return (
          <Item key={type.id}>
            <div
              onMouseEnter={() => setIsHovered([type.id])}
              onMouseLeave={() => setIsHovered([])}
            >
              <ReactAliceCarousel
                disableButtonsControls
                disableDotsControls
                infinite
                autoPlay
                autoPlayStrategy="none"
                autoPlayInterval={isCarouselActive ? 1500 : 999999999}
              >
                {type?.images?.map((image) => (
                  <TypeImg fluid={image?.fluid as FluidObject} />
                ))}
              </ReactAliceCarousel>
              <TypeText>{type?.name}</TypeText>
            </div>
          </Item>
        );
      })}
    </List>
  );

  return <Root>{renderTypes()}</Root>;
};

export default CategoryList;
