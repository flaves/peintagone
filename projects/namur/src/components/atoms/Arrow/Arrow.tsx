import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/pro-solid-svg-icons';

import setColor from '@/utils/setColor';

import ColorType from '@/types/color';

interface Props {
  className?: string;
  type?: 'prev' | 'next';
  color?: ColorType;
}

const Root = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ArrowIcon = styled(FontAwesomeIcon)<Props>`
  color: ${({ color = `textPrimary` }) => setColor(color)};
  cursor: pointer;
`;

const Arrow = ({ type = 'prev', color, className }: Props): JSX.Element => {
  return (
    <Root className={className}>
      <ArrowIcon
        color={color}
        icon={type === 'prev' ? faArrowLeft : faArrowRight}
      />
    </Root>
  );
};

export default Arrow;
