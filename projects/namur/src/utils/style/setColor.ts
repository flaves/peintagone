import { color as themeColors } from '@/styles/theme';

import ColorType from '@/types/color';

const {
  primary,
  secondary,
  textPrimary,
  textSecondary,
  success,
  warning,
  error,
  black,
  white,
} = themeColors;

const colorsMap: Record<ColorType, string> = {
  primary: primary.main,
  secondary: secondary.main,
  textPrimary: textPrimary.main,
  textSecondary: textSecondary.main,
  success: success.main,
  warning: warning.main,
  error: error.main,
  black: black.main,
  white: white.main,
};

const colorsLightMap: Record<ColorType, string> = {
  primary: primary.light,
  secondary: secondary.light,
  textPrimary: textPrimary.light,
  textSecondary: textSecondary.light,
  success: success.light,
  warning: warning.light,
  error: error.light,
  black: black.light,
  white: white.light,
};

const colorsDarkMap: Record<ColorType, string> = {
  primary: primary.dark,
  secondary: secondary.dark,
  textPrimary: textPrimary.dark,
  textSecondary: textSecondary.dark,
  success: success.dark,
  warning: warning.dark,
  error: error.dark,
  black: black.dark,
  white: white.dark,
};

const setColor = (color: ColorType, modifier?: 'light' | 'dark'): string => {
  // Light version (color.light)
  if (modifier === 'light') return colorsLightMap[color];

  // Dark version (color.dark)
  if (modifier === 'dark') return colorsDarkMap[color];

  // Base color (color.main)
  return colorsMap[color];
};

export default setColor;
