import React from 'react';

// Desktop SVGS
import WallLg from '@/svg/categories/big/Wall.svg';
import WoodLg from '@/svg/categories/big/Wood.svg';
import NaturalLg from '@/svg/categories/big/Natural.svg';
import MetalLg from '@/svg/categories/big/Metal.svg';
import GroundLg from '@/svg/categories/big/Ground.svg';

// Mobile SVGS
import WallSm from '@/svg/categories/small/Wall.svg';
import WoodSm from '@/svg/categories/small/Wood.svg';
import NaturalSm from '@/svg/categories/small/Natural.svg';
import MetalSm from '@/svg/categories/small/Metal.svg';
import GroundSm from '@/svg/categories/small/Ground.svg';

export const renderCategoryBackgroundDesktop = (
  categoryUid?: string,
): JSX.Element => {
  switch (categoryUid) {
    case 'wall':
      return <WallLg />;
    case 'wood':
      return <WoodLg />;
    case 'natural':
      return <NaturalLg />;
    case 'metal':
      return <MetalLg />;
    case 'ground':
      return <GroundLg />;
    default:
      return <WallLg />;
  }
};

export const renderCategoryBackgroundMobile = (
  categoryUid?: string,
): JSX.Element => {
  switch (categoryUid) {
    case 'wall':
      return <WallSm />;
    case 'wood':
      return <WoodSm />;
    case 'natural':
      return <NaturalSm />;
    case 'metal':
      return <MetalSm />;
    case 'ground':
      return <GroundSm />;
    default:
      return <WallSm />;
  }
};
