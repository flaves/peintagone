import React from 'react';
import { RichText } from 'prismic-reactjs';

import HomeHero from '@/container/Home/HomeHero';
import HomeProducts from '@/container/Home/HomeProducts';

import { HomePageQuery } from '../../../graphql-types';

interface Props {
  data: HomePageQuery;
}

const HomeContainer = ({ data }: Props): JSX.Element => {
  const {
    hero_title,
    hero_text,
    hero_text_mobile,
    hero_image,
    product_section_title,
    product_section_text,
    products,
  } = data?.prismicHomePage?.data || {};

  const HeroProps = {
    title: <RichText render={hero_title?.raw} />,
    text: <RichText render={hero_text?.raw} />,
    textMobile: <RichText render={hero_text_mobile?.raw} />,
    image: {
      url: hero_image?.url,
      alt: hero_image?.alt,
    },
  };

  const ProductsProps = {
    title: <RichText render={product_section_title?.raw} />,
    text: <RichText render={product_section_text?.raw} />,
    products: products?.map((product) => ({
      image: {
        url: product?.image?.url,
        alt: product?.image?.alt,
      },
      name: product?.name,
      link: {
        url: product?.link?.url,
        target: product?.link?.target,
      },
    })),
  };

  return (
    <>
      <HomeHero {...HeroProps} />
      <HomeProducts {...ProductsProps} />
    </>
  );
};

export default HomeContainer;
