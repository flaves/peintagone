import React from 'react';
import styled from '@emotion/styled';

interface Props {
  children: React.ReactNode;
  htmlFor: string;
}

const Root = styled.label<Props>`
  display: block;
  font-size: 1.6rem;
  font-weight: 800;
`;

const Label = ({ children, htmlFor, ...rest }: Props): JSX.Element => {
  return (
    <Root htmlFor={htmlFor} {...rest}>
      {children}
    </Root>
  );
};

export default Label;
