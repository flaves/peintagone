import React from 'react';
import { RichText } from 'prismic-reactjs';

import HomeHero from '@/container/Home/HomeHero';
import HomeProducts from '@/container/Home/HomeProducts';
import HomeTeam from '@/container/Home/HomeTeam';
import HomeMap from '@/container/Home/HomeMap';
import HomeQuestion from '@/container/Home/HomeQuestion';

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
    team_section_title,
    team_section_text,
    team_section_side_image,
    team_members,
    map_section_title,
    question_background,
    question_mobile_background,
    question_section_title,
    question_section_text,
    question_button_label,
    question_button_link,
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

  const TeamProps = {
    title: <RichText render={team_section_title?.raw} />,
    text: <RichText render={team_section_text?.raw} />,
    image: {
      url: team_section_side_image?.url,
      alt: team_section_side_image?.alt,
    },
    members: team_members?.map((member: any) => ({
      image: {
        url: member?.image?.url,
        alt: member?.image?.alt,
      },
      role: <RichText render={member?.role?.raw} />,
      name: <RichText render={member?.name?.raw} />,
      description: <RichText render={member?.description?.raw} />,
    })),
  };

  const MapProps = {
    title: <RichText render={map_section_title?.raw} />,
  };

  const QuestionProps = {
    background: {
      backgroundUrl: question_background?.url,
      backgroundAlt: question_background?.alt,
      mobileUrl: question_mobile_background?.url,
      mobileAlt: question_mobile_background?.alt,
    },
    title: <RichText render={question_section_title?.raw} />,
    text: <RichText render={question_section_text?.raw} />,
    button: {
      label: question_button_label,
      link: question_button_link?.url,
      target: question_button_link?.target,
    },
  };

  return (
    <>
      <HomeHero {...HeroProps} />
      <HomeProducts {...ProductsProps} />
      <HomeTeam {...TeamProps} />
      <HomeMap {...MapProps} />
      <HomeQuestion {...QuestionProps} />
    </>
  );
};

export default HomeContainer;
