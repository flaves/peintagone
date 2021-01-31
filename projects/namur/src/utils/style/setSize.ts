import { breakpoints } from '@/styles/theme';

import SizeType from '@/types/size';

const { xs, sm, md, lg, xl } = breakpoints;

const sizesMap: Record<SizeType, number> = {
  xs,
  sm,
  md,
  lg,
  xl,
};

const setSize = (size: SizeType): number => sizesMap[size];

export default setSize;
