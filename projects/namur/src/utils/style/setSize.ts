import { breakpoints } from '@/styles/theme';

import SizeType from '@/types/size';

const { xxs, xs, sm, md, lg, xl, xxl } = breakpoints;

const sizesMap: Record<SizeType, number> = {
  xxs,
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
};

const setSize = (size: SizeType): number => sizesMap[size];

export default setSize;
