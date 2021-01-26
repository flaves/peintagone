import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import mq from '@/styles/mq';
import setColor from '@/utils/setColor';

import UtilityProps from '@/types/utility';
import TypoType from '@/types/typo';
import ColorType from '@/types/color';

interface Props extends UtilityProps {
  children: React.ReactNode;
  variant?: TypoType;
  color?: ColorType;
  as?: React.ElementType;
}

const setTypoStyle = (variant?: TypoType) => {
  switch (variant) {
    case 'h1':
      return css`
        font-size: 3.6rem;
        font-weight: 800;

        ${mq('md')} {
          font-size: 6.4rem;
        }
      `;
    case 'h2':
      return css`
        font-size: 3.2rem;
        font-weight: 800;

        ${mq('md')} {
          font-size: 4.8rem;
        }
      `;
    case 'h3':
      return css`
        font-size: 1.8rem;
        font-weight: 800;

        ${mq('md')} {
          font-size: 2.4rem;
        }
      `;
    case 'textLg':
      return css`
        font-size: 2rem;
        font-weight: 500;
        opacity: 0.6;

        ${mq('md')} {
          font-size: 2.4rem;
        }
      `;
    case 'textMd':
      return css`
        font-size: 2rem;
        font-weight: 500;
        opacity: 0.6;
      `;
    case 'textSm':
      return css`
        font-size: 1.4rem;
        font-weight: 400;
        opacity: 0.6;
      `;
    default:
      return css`
        font-size: 1.6rem;
        font-weight: 500;
      `;
  }
};

const Root = styled.p<Props>`
  color: ${({ color = 'textPrimary' }) => setColor(color)};
  ${({ variant }) => setTypoStyle(variant)};
`;

const Typography = ({ children, as = 'div', ...rest }: Props): JSX.Element => {
  return (
    <Root as={as} {...rest}>
      {children}
    </Root>
  );
};

export default Typography;
