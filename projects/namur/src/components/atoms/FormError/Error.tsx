import React from 'react';
import styled from '@emotion/styled';

interface Props {
  children: React.ReactNode;
}

const Root = styled.p`
  color: ${({ theme }) => theme.color.error};
  font-size: 1.4rem;
`;

const Error = ({ children }: Props): JSX.Element => {
  return <Root>{children}</Root>;
};

export default Error;
