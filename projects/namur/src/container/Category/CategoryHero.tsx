import React from 'react';
import styled from '@emotion/styled';

import Typography from '@/components/atoms/Typography';

import mq from '@/styles/mq';

import { CategoryPageQuery } from '../../../graphql-types';

const TextContainer = styled.div`
  padding-left: ${({ theme }) => theme.spacing(3)};
  padding-right: ${({ theme }) => theme.spacing(3)};
`;

const Paragraph = styled(Typography)`
  margin-top: ${({ theme }) => theme.spacing(1)};

  ${mq(`lg`)} {
    margin-top: 0;
  }
`;

interface Props {
  data: CategoryPageQuery;
}

const CategoryHero = ({ data }: Props): JSX.Element => {
  return (
    <section>
      <TextContainer>
        <Typography variant="h1">
          {data.prismicProductCategory?.data?.category_name}
        </Typography>
        <Paragraph as="p">
          {data.prismicProductCategory?.data?.category_description}
        </Paragraph>
      </TextContainer>
    </section>
  );
};

export default CategoryHero;
