import React from 'react';
import styled from '@emotion/styled';

interface Props {
  children: React.ReactNode;
}

const Root = styled.div``;

const H2 = ({ children }: Props): JSX.Element => {
  return <Root>{children}</Root>;
};

export default H2;
