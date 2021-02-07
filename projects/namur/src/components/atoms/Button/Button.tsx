import React from 'react';
import styled from '@emotion/styled';
import { css, Theme } from '@emotion/react';

import setColor from '@/utils/style/setColor';

import { ButtonType } from '@/types/button';
import ColorType from '@/types/color';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonType;
  color?: ColorType;
  as?: React.ElementType;
}

const renderButtonStyle = (
  variant: ButtonType,
  color: ColorType,
  theme: Theme,
) => {
  let style = '';

  switch (variant) {
    case 'outlined':
      // Specific color style
      if (color === 'primary') {
        style += `
          color: ${theme.color.primary.main};
          &:hover {
            color: ${theme.color.white.main};
          }
        `;
      }
      if (color === 'white') {
        style += `
          color: ${theme.color.white.main};
          &:hover {
            color: ${theme.color.textPrimary.main};
          }
        `;
      }
      if (color === 'black') {
        style += `
          color: ${theme.color.black.main};
          &:hover {
            color: ${theme.color.white.main};
          }
        `;
      }

      style += `
        background: transparent;
        border-width: 2px;
        border-style: solid;
        padding: 1rem 3.2rem;
        border-color: ${setColor(color)};

        &:hover {
          background-color: ${setColor(color)};
        }
      `;

      return css`
        ${style}
      `;
    case 'text':
      return css`
        background: none;
        padding: 0;
        color: ${setColor(color)};
      `;
    default:
      if (color === 'primary') {
        style += `
          color: ${theme.color.white.main};
          &:hover {
            color: ${theme.color.white.main};
            background-color: ${theme.color.primary.dark};
          }
        `;
      }
      if (color === 'white') {
        style += `
          color: ${theme.color.primary.main};
          &:hover {
            color: ${theme.color.white.main};
            background-color: ${theme.color.primary.main};
          }
        `;
      }
      if (color === 'black') {
        style += `
          color: ${theme.color.white.main};
          &:hover {
            color: ${theme.color.black.main};
            background-color: ${theme.color.white.main};
          }
        `;
      }

      style += `
        padding: 1rem 3.2rem;
        border: none;
        background-color: ${setColor(color)};
      `;

      return css`
        ${style}
      `;
  }
};

const Root = styled.button<Props>`
  cursor: pointer;
  display: inline-block;
  ${({ variant = 'contained', color = 'primary', theme }) =>
    renderButtonStyle(variant, color, theme)}
  transition: all .3s ease;
  font-size: 2rem;
  font-weight: 800;
`;

const Button = ({ children, as = 'button', ...props }: Props): JSX.Element => {
  return (
    <Root as={as} {...props}>
      {children}
    </Root>
  );
};

export default Button;
