import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/pro-solid-svg-icons';
import { css, Theme } from '@emotion/react';

import setColor from '@/utils/style/setColor';

import ColorType from '@/types/color';

type VariantType = 'default' | 'primary';

interface Props {
  className?: string;
  type?: 'prev' | 'next';
  color?: ColorType;
  variant?: VariantType;
}

const renderVariantStyle = (variant: VariantType, theme: Theme) => {
  switch (variant) {
    case 'primary':
      return css`
        background-color: ${theme.color.primary.main};
        color: ${theme.color.white.main};
        padding: ${theme.spacing(1)};

        &:hover {
          background-color: ${theme.color.primary.dark};
        }
      `;
    default:
      return css``;
  }
};

const Root = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  ${({ variant = `default`, theme }) => renderVariantStyle(variant, theme)}
`;
const ArrowIcon = styled(FontAwesomeIcon)<Props>`
  ${({ color }) =>
    color &&
    css`
      color: ${setColor(color)};
    `};
`;

const Arrow = ({
  type = 'prev',
  variant,
  color,
  className,
}: Props): JSX.Element => {
  return (
    <Root variant={variant} className={className}>
      <ArrowIcon
        color={color}
        icon={type === 'prev' ? faArrowLeft : faArrowRight}
      />
    </Root>
  );
};

export default Arrow;
