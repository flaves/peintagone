import React from 'react';
import styled from '@emotion/styled';

import mq from '@/styles/mq';

import setSize from '@/utils/setSize';

import SizeType from '@/types/size';

interface Props {
  className?: string;
  maxWidth?: SizeType;
  children: React.ReactNode;
}

const Root = styled.div<Props>`
  margin: auto;
  padding: 0 2rem;

  max-width: ${({ maxWidth = 'md' }) => setSize(maxWidth)}px;

  ${mq('md')} {
    padding: 0 3rem;
  }
`;

const Container = ({ children, ...rest }: Props): JSX.Element => {
  return <Root {...rest}>{children}</Root>;
};

export default Container;
