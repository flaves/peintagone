import React from 'react';
import styled from '@emotion/styled';

interface Props {
  children: React.ReactNode;
}

const Root = styled.div<Props>``;

const Footer = ({ children }: Props): JSX.Element => {
  return <Root>{children}</Root>;
};

export default Footer;
