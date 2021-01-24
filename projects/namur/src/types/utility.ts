import ColorType from '@/types/color';
import SizeType from '@/types/size';

export interface UtilityProps {
  m?: number;
  mt?: number;
  mr?: number;
  ml?: number;
  mb?: number;
  mx?: number;
  my?: number;
  p?: number;
  pt?: number;
  pr?: number;
  pl?: number;
  pb?: number;
  px?: number;
  py?: number;
  color?: ColorType;
  size?: SizeType;
}

export interface UtilityResponsiveProps extends UtilityProps {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

export default UtilityProps;
