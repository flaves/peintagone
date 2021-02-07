import React, { Dispatch } from 'react';
import { css, Theme } from '@emotion/react';

import Wall from '@/svg/categories/small/Wall.svg';
import Wood from '@/svg/categories/small/Wood.svg';
import Natural from '@/svg/categories/small/Natural.svg';
import Metal from '@/svg/categories/small/Metal.svg';
import Ground from '@/svg/categories/small/Ground.svg';

import mq from '@/styles/mq';

import { CategoryProps, CategoryUid } from '@/container/Home/HomePainting';
import Button from '@/components/atoms/Button';
import styled from '@emotion/styled';

const ButtonText = styled(Button)`
  width: 20px;
  height: 20px;
  margin-right: ${({ theme }) => theme.spacing(3)};
  cursor: pointer;

  ${mq('md')} {
    width: 40px;
    height: 40px;
    margin-right: 0;
    margin-bottom: ${({ theme }) => theme.spacing(5)};
  }
`;
const active = (theme: Theme) => css`
  width: 30px;
  height: 30px;

  svg {
    fill: ${theme.color.white.main};
  }

  ${mq('md')} {
    width: 60px;
    height: 60px;
  }
`;
const svg = css`
  width: 100%;
  height: 100%;
`;

/**
 * Render the products categories buttons
 * Clicking those switch the active category
 * @param {CategoryProps[]} categories - All the products' categories
 * @param {CategoryUid | undefined} activeCategory - The current active category to style the active button
 * @param {Dispatch<React.SetStateAction<CategoryProps| undefined>>} setCategory - the fct to switch category
 * @return {JSX.Element[]} - An array containing all the buttons
 */
const renderCategoriesButtons = (
  categories: CategoryProps[],
  activeCategory: CategoryUid | undefined,
  setCategory: Dispatch<React.SetStateAction<CategoryProps | undefined>>,
): JSX.Element[] => {
  return categories.map((category: CategoryProps, index: number) => {
    switch (category?.uid) {
      case 'wall':
        return (
          <ButtonText
            css={activeCategory === 'wall' && active}
            key={index.toString()}
            variant="text"
          >
            <Wall css={svg} onClick={() => setCategory(category)} />
          </ButtonText>
        );
      case 'wood':
        return (
          <ButtonText
            css={activeCategory === 'wood' && active}
            key={index.toString()}
            variant="text"
          >
            <Wood css={svg} onClick={() => setCategory(category)} />
          </ButtonText>
        );
      case 'natural':
        return (
          <ButtonText
            css={activeCategory === 'natural' && active}
            key={index.toString()}
            variant="text"
          >
            <Natural css={svg} onClick={() => setCategory(category)} />
          </ButtonText>
        );
      case 'metal':
        return (
          <ButtonText
            css={activeCategory === 'metal' && active}
            key={index.toString()}
            variant="text"
          >
            <Metal css={svg} onClick={() => setCategory(category)} />
          </ButtonText>
        );
      case 'ground':
        return (
          <ButtonText
            css={activeCategory === 'ground' && active}
            key={index.toString()}
            variant="text"
          >
            <Ground css={svg} onClick={() => setCategory(category)} />
          </ButtonText>
        );
      default:
        return (
          <ButtonText key={index.toString()} variant="text">
            <Wall css={svg} key={index.toString()} />
          </ButtonText>
        );
    }
  });
};

export default renderCategoriesButtons;
