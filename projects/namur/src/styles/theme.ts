import '@emotion/react';

import ColorType from '@/types/color';
import SizeType from '@/types/size';
import zIndexType from '@/types/zIndex';

declare module '@emotion/react' {
  export interface Theme {
    color: {
      [key in ColorType]: string;
    };
    breakpoints: {
      [key in SizeType]: number;
    };
    grid: {
      columns: number;
    };
    spacingBase: number;
    spacing: (multiplier: number) => string;
    zIndex: {
      [key in zIndexType]: number;
    };
  }
}

export const spacingBase = 10;

export const color = {
  primary: `#7cb0c8`,
  secondary: `#f8f8f8`,
  textPrimary: `#575d5e`,
  textSecondary: `#FFF`,
  success: `hsl(145, 63%, 50%)`,
  warning: `hsl(46, 100%, 60%)`,
  error: `hsl(0, 100%, 70%)`,
  black: `hsl(0, 0%, 0%)`,
  white: `hsl(0, 0%, 100%)`,
};

export const breakpoints = { xs: 375, sm: 768, md: 1240, lg: 1440, xl: 1980 };

export const grid = {
  columns: 12,
};

export const spacing = (mutliplier: number): string =>
  `${spacingBase * mutliplier}px`;

export const zIndex = {
  default: 1,
  top: 100,
  overlay: 200,
  content: 300,
  tooltip: 400,
  dropdown: 500,
  fixed: 600,
  menu: 700,
  modal: 1000,
};

const theme = {
  color,
  breakpoints,
  grid,
  spacingBase,
  spacing,
  zIndex,
};

export default theme;
