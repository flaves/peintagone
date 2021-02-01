import '@emotion/react';

import ColorType from '@/types/color';
import SizeType from '@/types/size';
import zIndexType from '@/types/zIndex';

interface ColorPalette {
  light: string;
  main: string;
  dark: string;
}

declare module '@emotion/react' {
  export interface Theme {
    color: {
      [key in ColorType]: ColorPalette;
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
  primary: {
    light: `#7cb0c8`,
    main: `#7cb0c8`,
    dark: `#50a0c4`,
  },
  secondary: {
    light: `#f8f8f8`,
    main: `#f8f8f8`,
    dark: `#f8f8f8`,
  },
  textPrimary: {
    light: `#575d5e`,
    main: `#575d5e`,
    dark: `#575d5e`,
  },
  textSecondary: {
    light: `#FFF`,
    main: `#FFF`,
    dark: `#FFF`,
  },
  success: {
    light: `hsl(145, 63%, 50%)`,
    main: `hsl(145, 63%, 50%)`,
    dark: `hsl(145, 63%, 50%)`,
  },
  warning: {
    light: `hsl(46, 100%, 60%)`,
    main: `hsl(46, 100%, 60%)`,
    dark: `hsl(46, 100%, 60%)`,
  },
  error: {
    light: `hsl(0, 100%, 70%)`,
    main: `hsl(0, 100%, 70%)`,
    dark: `hsl(0, 100%, 70%)`,
  },
  black: {
    light: `hsl(0, 0%, 0%)`,
    main: `hsl(0, 0%, 0%)`,
    dark: `hsl(0, 0%, 0%)`,
  },
  white: {
    light: `hsl(0, 0%, 100%)`,
    main: `hsl(0, 0%, 100%)`,
    dark: `hsl(0, 0%, 100%)`,
  },
};

export const breakpoints = {
  xxs: 375,
  xs: 576,
  sm: 768,
  md: 980,
  lg: 1240,
  xl: 1440,
  xxl: 1980,
};

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
