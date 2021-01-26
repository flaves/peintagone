import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Property } from 'csstype';

import mq from '@/styles/mq';
import theme from '@/styles/theme';

import setSpacing from '@/utils/setSpacing';

import { UtilityResponsiveProps } from '@/types/utility';

interface Props extends UtilityResponsiveProps {
  className?: string;
  children: React.ReactNode;
  // Flex
  container?: boolean;
  flexDirection?: Property.FlexDirection;
  flexWrap?: Property.FlexWrap;
  justifyContent?: Property.JustifyContent;
  alignItems?: Property.AlignItems;
}

const { columns } = theme.grid;

const renderContainerSize = (divider: number) => css`
  flex-grow: 0;
  max-width: calc(100% / (${columns} / ${divider}));
  flex-basis: calc(100% / (${columns} / ${divider}));
`;

const Root = styled.div<Props>`
  ${({ m, mt, mr, ml, mb, mx, my, p, pt, pr, pl, pb, px, py }) =>
    setSpacing(m, mt, mr, ml, mb, mx, my, p, pt, pr, pl, pb, px, py)}

  ${({
    container,
    flexDirection = 'row',
    flexWrap = 'wrap',
    justifyContent = 'flex-start',
    alignItems = 'flex-start',
  }) =>
    container &&
    css`
      width: 100%;
      display: flex;
      flex-direction: ${flexDirection};
      flex-wrap: ${flexWrap};
      justify-content: ${justifyContent};
      align-items: ${alignItems};
    `}

  ${({ xs }) => xs && renderContainerSize(xs)}

  ${mq('sm')} {
    ${({ sm }) => sm && renderContainerSize(sm)}
  }

  ${mq('md')} {
    ${({ md }) => md && renderContainerSize(md)}
  }

  ${mq('lg')} {
    ${({ lg }) => lg && renderContainerSize(lg)}
  }

  ${mq('xl')} {
    ${({ xl }) => xl && renderContainerSize(xl)}
  }
`;

const Grid = ({ children, ...rest }: Props): JSX.Element => {
  return <Root {...rest}>{children}</Root>;
};

export default Grid;
