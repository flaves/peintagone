import React from 'react';
import styled from '@emotion/styled';

import theme from '@/styles/theme';

import setColor from '@/utils/setColor';
import setSpacing from '@/utils/setSpacing';

import UtilityProps from '@/types/utility';

interface Props extends UtilityProps {
  children: React.ReactNode;
}

const { textPrimary } = theme.color;

const Root = styled.div<Props>`
  ${({ m, mt, mr, ml, mb, mx, my, p, pt, pr, pl, pb, px, py }) =>
    setSpacing(m, mt, mr, ml, mb, mx, my, p, pt, pr, pl, pb, px, py)}
  color: ${({ color }) => (color ? setColor(color) : textPrimary)};
`;

const Box = ({ children, ...rest }: Props): JSX.Element => {
  return <Root {...rest}>{children}</Root>;
};

export default Box;
