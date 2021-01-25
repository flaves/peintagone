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
  primary,
  secondary,
  textPrimary,
  textSecondary,
  success,
  warning,
  error,
  black,
  white,
};

const setColor = (color: ColorType): string => colorsMap[color];

export default setColor;
