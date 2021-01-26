import React, { ForwardedRef } from 'react';
import styled from '@emotion/styled';
import theme from '@/styles/theme';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  name: string;
}

const Root = styled.input`
  padding: ${theme.spacing(1.5)};
  border: none;
  border-radius: 5px;
  background-color: #efefef;
  width: 100%;

  &::placeholder {
    color: #c5c5c5;
    font-size: 1.4rem;
    font-weight: 600;
  }
`;

const Input = React.forwardRef(
  (
    { label, ...props }: InputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ): JSX.Element => {
    return (
      <>
        {label && <label htmlFor={props.name}>{label}</label>}
        <Root ref={ref} {...props} id={props.name} />
      </>
    );
  },
);

export default Input;
