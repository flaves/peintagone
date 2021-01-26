import React from 'react';
import styled from '@emotion/styled';
import theme from '@/styles/theme';

import ColorType from '@/types/color';

interface Props {
  children: React.ReactNode;
  color: ColorType;
}

const { textPrimary } = theme.color;

const Root = styled.div`
  font-size: 6.4rem;
  font-weight: bold;
  color: ${textPrimary};
`;

const H1 = ({ children, color }: Props): JSX.Element => {
  return <Root color={color}>{children}</Root>;
};

export default H1;
