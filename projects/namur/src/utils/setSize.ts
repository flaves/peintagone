import SizeType from '@/types/size';
import theme from '@/styles/theme';

const { xs, sm, md, lg, xl } = theme.breakpoints;

const sizesMap: Record<SizeType, number> = {
  xs,
  sm,
  md,
  lg,
  xl,
};

const setSize = (size: SizeType): number => sizesMap[size];

export default setSize;
