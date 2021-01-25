import React from 'react';
import { RichText } from 'prismic-reactjs';

import HomeHero from '@/container/Home/HomeHero';

import { HomePageQuery } from '../../../graphql-types';

interface Props {
  data: HomePageQuery;
}

const HomeContainer = ({ data }: Props): JSX.Element => {
  const { hero_title, hero_text, hero_text_mobile, hero_image } =
    data?.prismicHomePage?.data || {};

  const HeroProps = {
    title: <RichText render={hero_title?.raw} />,
    text: <RichText render={hero_text?.raw} />,
    textMobile: <RichText render={hero_text_mobile?.raw} />,
    image: {
      url: hero_image?.url,
      alt: hero_image?.alt,
    },
  };

  return (
    <>
      <HomeHero {...HeroProps} />
    </>
  );
};

export default HomeContainer;
