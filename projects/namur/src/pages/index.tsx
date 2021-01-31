import React from 'react';
import { graphql } from 'gatsby';

import PrimaryLayout from '@/components/organisms/layout/PrimaryLayout';
import SEO from '@/components/atoms/Seo';
import HomeContainer from '@/container/Home/HomeContainer';

import { HomePageQuery } from '../../graphql-types';

interface Props {
  data: HomePageQuery;
}

export const query = graphql`
  query HomePage {
    prismicHomePage {
      data {
        ...HomeHero
        ...HomeProducts
        ...HomeQuestion
      }
    }
  }
`;

const Home = ({ data }: Props): JSX.Element => (
  <PrimaryLayout>
    <SEO title="Home" />
    <HomeContainer data={data} />
  </PrimaryLayout>
);

export default Home;
