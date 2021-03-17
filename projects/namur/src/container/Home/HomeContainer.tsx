import React from 'react';
import { RichText } from 'prismic-reactjs';
import { Section } from 'react-scroll-section';

import HomeHero from '@/container/Home/HomeHero';
import HomeProducts from '@/container/Home/HomeProducts';
import HomePainting from '@/container/Home/HomePainting';
import HomeTrends from '@/container/Home/HomeTrends';
import HomeWhy from '@/container/Home/HomeWhy';
import HomePartners from '@/container/Home/HomePartners';
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
    painting_section_title,
    paintings,
    trends_section_title,
    trends_section_text,
    trends_button_label,
    trends_button_link,
    trends,
    why_section_title,
    why_section_list,
    why_section_side_image,
    partners_section_title,
    partners,
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
    image: hero_image,
  };

  const ProductsProps = {
    title: <RichText render={product_section_title?.raw} />,
    text: <RichText render={product_section_text?.raw} />,
    products: products?.map((p: any) => {
      const { data: productData } = p?.product_category?.document || {};

      const { category_name, category_image } = productData || {};

      return {
        uid: p?.product_category?.uid,
        category_name,
        category_image,
      };
    }),
  };

  const PaintingProps = {
    title: <RichText render={painting_section_title?.raw} />,
    categories: paintings?.map((painting: any) => {
      const { id, data: paintingData, uid } =
        painting?.painting_category?.document || {};
      const {
        category_background_color,
        category_name,
        category_image,
        category_link,
      } = paintingData || {};

      return {
        id,
        uid,
        name: category_name,
        backgroundColor: category_background_color,
        image: category_image,
        link: category_link?.url,
      };
    }),
  };

  const TrendsProps = {
    title: <RichText render={trends_section_title?.raw} />,
    text: <RichText render={trends_section_text?.raw} />,
    button: {
      label: trends_button_label,
      link: trends_button_link?.url,
      target: trends_button_link?.target,
    },
    trends: trends?.map((trend: any) => ({
      name: trend?.trend_name,
      color: trend?.trend_color,
      image: trend?.trend_image,
    })),
  };

  const WhyProps = {
    title: <RichText render={why_section_title?.raw} />,
    list: why_section_list?.map((item: any) => ({
      item: <RichText render={item?.list_item?.raw} />,
    })),
    sideImage: why_section_side_image,
  };

  const PartnersProps = {
    title: <RichText render={partners_section_title?.raw} />,
    partners: partners?.map((partner: any) => ({
      name: partner?.name,
      link: partner?.link?.url,
      target: partner?.link?.target,
    })),
  };

  const TeamProps = {
    title: <RichText render={team_section_title?.raw} />,
    text: <RichText render={team_section_text?.raw} />,
    image: team_section_side_image,
    members: team_members?.map((member: any) => ({
      image_1: member?.image_1,
      image_2: member?.image_2,
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
      desktop: question_background,
      mobile: question_mobile_background,
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
      <HomePainting {...PaintingProps} />
      <Section id="products">
        <HomeProducts {...ProductsProps} />
      </Section>
      <Section id="trends">
        <HomeTrends {...TrendsProps} />
      </Section>
      <Section id="why">
        <HomeWhy {...WhyProps} />
      </Section>
      <Section id="partners">
        <HomePartners {...PartnersProps} />
      </Section>
      <Section id="team">
        <HomeTeam {...TeamProps} />
      </Section>
      <Section id="map">
        <HomeMap {...MapProps} />
      </Section>
      <HomeQuestion {...QuestionProps} />
    </>
  );
};

export default HomeContainer;
