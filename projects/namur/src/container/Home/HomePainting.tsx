import React, { useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';

import Container from '@/components/atoms/Layout/Container';
import Typography from '@/components/atoms/Typography';
import Grid from '@/components/atoms/Layout/Grid';
import Img from '@/components/atoms/Img';
import Button from '@/components/atoms/Button';

import {
  renderCategoryBackgroundDesktop,
  renderCategoryBackgroundMobile,
} from '@/utils/categories/renderCategoryBackground';
import renderCategoriesButtons from '@/utils/categories/renderCategoriesButtons';

import mq from '@/styles/mq';

import { ImageType } from '@/types/image';
import Link from '@/components/atoms/Link';
import { css, useTheme } from '@emotion/react';

export type CategoryUid = 'wall' | 'wood' | 'natural' | 'metal' | 'ground';

interface RootProps {
  activeCategory: CategoryProps | undefined;
}

export interface CategoryProps {
  uid: CategoryUid;
  id?: string;
  name?: string;
  backgroundColor?: string;
  image?: ImageType;
  link?: string;
}

interface Props {
  title?: React.ReactNode;
  categories?: CategoryProps[];
}

const Root = styled.div<RootProps>`
  background-color: ${({ activeCategory, theme }) =>
    activeCategory?.backgroundColor || theme.color.primary.main};
  margin-top: ${({ theme }) => theme.spacing(5)};
  padding-top: ${({ theme }) => theme.spacing(2)};
  padding-bottom: ${({ theme }) => theme.spacing(4)};

  ${mq('md')} {
    margin-top: ${({ theme }) => theme.spacing(10)};
    padding-top: ${({ theme }) => theme.spacing(4)};
    padding-bottom: ${({ theme }) => theme.spacing(8)};
  }
`;
const RootContainer = styled(Container)`
  position: relative;
`;
const Title = styled(Typography)`
  text-align: center;
`;
const MainGrid = styled(Grid)`
  flex-direction: column;
  margin-top: ${({ theme }) => theme.spacing(1.5)};

  ${mq('md')} {
    flex-direction: row;
    align-items: center;
    margin-top: ${({ theme }) => theme.spacing(4)};
  }
`;
const CategoriesButtonsContainer = styled(Grid)`
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.content};
  display: flex;
  align-items: center;
  order: 3;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing(6)};
  min-height: 60px;

  ${mq('md')} {
    flex-direction: column;
    align-items: flex-start;
    order: 1;
    margin-top: 0;
    min-height: initial;
  }
`;
const SvgBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: ${({ theme }) => theme.zIndex.default};
  opacity: 0.1;

  svg {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  svg * {
    fill: white !important;
  }
`;
const SvgBackgroundDesktop = styled(SvgBackground)`
  display: none;
  ${mq('md')} {
    display: block;
  }
`;
const SvgBackgroundMobile = styled(SvgBackground)`
  display: block;
  ${mq('md')} {
    display: none;
  }
`;
const ImageGrid = styled(Grid)`
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.content};
  display: flex;
  flex-direction: column;
  justify-content: center;
  order: 2;
  margin-top: ${({ theme }) => theme.spacing(7)};

  ${mq('md')} {
    margin-top: 0;
  }
`;
const CategoryImage = styled(Img)`
  width: 150px;
  margin-left: auto;
  margin-right: auto;

  ${mq('md')} {
    width: 250px;
  }
`;
const ButtonContainer = styled(Grid)`
  display: none;
  ${mq('md')} {
    display: flex;
    margin-top: ${({ theme }) => theme.spacing(6)};
  }
`;
const ButtonStyled = styled(Button)`
  background-color: ${({ theme }) => theme.color.white.main};
`;

// const CategoryButton = styled(Button)`
//   border-width: 2px;
//   border-style: solid;
//   border-color: transparent;
//   color: ${({ theme }) => theme.color.primary.main};
//
//   &:hover {
//     border-color: ${({ theme }) => theme.color.white.main};
//   }
// `;
const NameGrid = styled(Grid)`
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.content};
  color: ${({ theme }) => theme.color.white.main};
  font-size: 1.8rem;
  font-weight: 800;
  order: 1;
  justify-content: center;

  ${mq('md')} {
    order: 3;
    font-size: 3.6rem;
    writing-mode: vertical-rl;
    cursor: default;
  }
`;

const Category = ({
  name,
  image,
  link,
  backgroundColor,
}: CategoryProps): JSX.Element => {
  const theme = useTheme();

  return (
    <>
      <ImageGrid container md={8} xxs={12}>
        <CategoryImage
          src={image?.url}
          alt={image?.alt}
          sizes="(min-width: 1240px) 250px, 150px"
        />
        <ButtonContainer container justifyContent="center">
          <ButtonStyled
            as={Link}
            variant="contained"
            css={css`
              background-color: transparent;
              color: ${theme.color.white.main};
              border: 2px solid ${theme.color.white.main};

              &:hover {
                background-color: ${theme.color.white.main};
                color: ${backgroundColor};
              }
            `}
            {...{ to: link || ``, target: `_blank` }}
          >
            Découvrir la gamme
          </ButtonStyled>
        </ButtonContainer>
      </ImageGrid>
      <NameGrid container md={2} xxs={12}>
        {name}
      </NameGrid>
    </>
  );
};

const HomePainting = ({ title, categories }: Props): JSX.Element => {
  const [activeCategory, setActiveCategory] = useState<CategoryProps>();
  console.log(categories);

  // Set default
  useEffect(() => categories && setActiveCategory(categories[0]), []);

  // SVG background
  const SVGDesktop = renderCategoryBackgroundDesktop(activeCategory?.uid);
  const SVGMobile = renderCategoryBackgroundMobile(activeCategory?.uid);

  const ShownCategory = (
    <Category uid={activeCategory?.uid || 'wall'} {...activeCategory} />
  );

  const CategoriesButtons =
    categories &&
    renderCategoriesButtons(categories, activeCategory?.uid, setActiveCategory);

  return (
    <Root activeCategory={activeCategory}>
      <RootContainer>
        <Title variant="h2" color="white">
          {title}
        </Title>
        <SvgBackgroundDesktop>{SVGDesktop}</SvgBackgroundDesktop>
        <SvgBackgroundMobile>{SVGMobile}</SvgBackgroundMobile>
        <MainGrid container>
          <CategoriesButtonsContainer container md={2} xxs={12}>
            {CategoriesButtons}
          </CategoriesButtonsContainer>
          {ShownCategory || (
            <Typography variant="h1">
              Aucune Catégories pour le moment
            </Typography>
          )}
        </MainGrid>
      </RootContainer>
    </Root>
  );
};

export const query = graphql`
  fragment HomePainting on PrismicHomePageDataType {
    painting_section_title {
      raw
    }
    paintings {
      painting_category {
        document {
          ... on PrismicPaintingCategory {
            ...Painting
          }
        }
      }
    }
  }
`;

export default HomePainting;
