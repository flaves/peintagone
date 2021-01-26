import theme from '@/styles/theme';
import SizeType from '@/types/size';

const { breakpoints }: { breakpoints: Record<string, number> } = theme;

const mq = (value: SizeType): string | number => {
  const bpArray = Object.keys(breakpoints).map((key) => [
    key,
    breakpoints[key],
  ]);

  const [result] = bpArray.reduce((acc, [name, size]) => {
    if (value === name) return [...acc, `@media (min-width: ${size}px)`];
    return acc;
  }, []);

  return result;
};

export default mq;
