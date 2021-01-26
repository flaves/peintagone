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
  fontSize?: number;
  fontWeight?: number;
  variant?: TypoType;
  color?: ColorType;
  opacity?: number;
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
    case 'p':
      return css`
        font-size: 2rem;
        font-weight: 500;

        ${mq('md')} {
          font-size: 2.4rem;
        }
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
  opacity: ${({ opacity = 1 }) => opacity};
`;

const Typography = ({ children, as = 'div', ...rest }: Props): JSX.Element => {
  return (
    <Root as={as} {...rest}>
      {children}
    </Root>
  );
};

export default Typography;
