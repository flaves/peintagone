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
    image: {
      url: hero_image?.url,
      alt: hero_image?.alt,
    },
  };

  const ProductsProps = {
    title: <RichText render={product_section_title?.raw} />,
    text: <RichText render={product_section_text?.raw} />,
    products: products?.map((product: any) => ({
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
        image: {
          url: category_image?.url,
          alt: category_image?.alt,
        },
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
      image: {
        url: trend?.trend_image?.url,
        alt: trend?.trend_image?.alt,
      },
    })),
  };

  const WhyProps = {
    title: <RichText render={why_section_title?.raw} />,
    list: why_section_list?.map((item: any) => ({
      item: <RichText render={item?.list_item?.raw} />,
    })),
    sideImage: {
      url: why_section_side_image?.url,
      alt: why_section_side_image?.alt,
    },
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
    image: {
      url: team_section_side_image?.url,
      alt: team_section_side_image?.alt,
    },
    members: team_members?.map((member: any) => ({
      image_1: {
        url: member?.image_1?.url,
        alt: member?.image_1?.alt,
      },
      image_2: {
        url: member?.image_2?.url,
        alt: member?.image_2?.alt,
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
      <Section id="products">
        <HomeProducts {...ProductsProps} />
      </Section>
      <Section id="painting">
        <HomePainting {...PaintingProps} />
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
      <Section id="question">
        <HomeQuestion {...QuestionProps} />
      </Section>
    </>
  );
};

export default HomeContainer;
