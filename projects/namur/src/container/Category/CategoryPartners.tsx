import React from 'react';
import { v4 } from 'uuid';
import styled from '@emotion/styled';
import ReactAliceCarousel from 'react-alice-carousel';

import Typography from '@/components/atoms/Typography';

import mq from '@/styles/mq';

import { CategoryPageQuery } from '../../../graphql-types';

const Root = styled.section`
  margin-top: ${({ theme }) => theme.spacing(5)};
  padding-left: ${({ theme }) => theme.spacing(3)};
  padding-right: ${({ theme }) => theme.spacing(3)};
`;

const Partner = styled(Typography)`
  display: block;
  text-align: center;
  width: 100%;
  font-size: 2.4rem;
  font-weight: 700;
  color: #bec4c6;

  ${mq('md')} {
    font-size: 3.6rem;
  }
`;

interface Props {
  data: CategoryPageQuery;
}

const CategoryPartners = ({ data }: Props) => {
  const partners = data.prismicProductCategory?.data?.category_partners;

  const renderPartners = () => (
    <ReactAliceCarousel
      mouseTracking
      disableDotsControls
      infinite
      responsive={{ 0: { items: 4 } }}
      disableButtonsControls
      autoPlay={partners ? partners.length > 1 : false}
      autoPlayInterval={1000}
    >
      {data.prismicProductCategory?.data?.category_partners?.map((partner) => (
        <div key={v4()}>
          <Partner>{partner?.partner_name}</Partner>
        </div>
      ))}
    </ReactAliceCarousel>
  );

  return <Root>{renderPartners()}</Root>;
};

export default CategoryPartners;
