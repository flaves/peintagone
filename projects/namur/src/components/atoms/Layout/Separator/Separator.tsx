import React from 'react';
import styled from '@emotion/styled';

interface Props {
  className?: string;
}

const Root = styled.div<Props>`
  width: 100%;
  height: 1px;
  background-color: #efefef;
`;

const Separator = ({ className }: Props): JSX.Element => {
  return <Root className={className} />;
};

export default Separator;
