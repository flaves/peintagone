import React from 'react';
import styled from '@emotion/styled';

import setColor from '@/utils/style/setColor';

import ColorType from '@/types/color';

interface Props {
  children: React.ReactNode;
  bgColor?: ColorType;
  color?: ColorType;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Root = styled.button<Props>`
  background-color: ${({ bgColor = 'primary' }) => setColor(bgColor)};
  color: ${({ color = 'textPrimary' }) => setColor(color)};
  border-radius: 50%;
  border: none;
  height: 55px;
  width: 55px;
  cursor: pointer;
`;

const FabButton = ({ children, ...rest }: Props): JSX.Element => {
  return <Root {...rest}>{children}</Root>;
};

export default FabButton;
