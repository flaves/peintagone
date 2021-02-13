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
        meta_title
        meta_description
        ...HomeHero
        ...HomeProducts
        ...HomePainting
        ...HomeTrends
        ...HomeWhy
        ...HomePartners
        ...HomeTeam
        ...HomeMap
        ...HomeQuestion
      }
    }
  }
`;

const Home = ({ data }: Props): JSX.Element => (
  <PrimaryLayout>
    <SEO
      title={data?.prismicHomePage?.data?.meta_title as string}
      description={data?.prismicHomePage?.data?.meta_description as string}
    />
    <HomeContainer data={data} />
  </PrimaryLayout>
);

export default Home;
