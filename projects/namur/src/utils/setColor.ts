import ColorType from '@/types/color';
import theme from '@/styles/theme';

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
} = theme.color;

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
