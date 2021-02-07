import React, { ForwardedRef } from 'react';
import styled from '@emotion/styled';

import Label from '@/components/atoms/Form/Label';

import InputProps from '@/types/input';
import { SerializedStyles, Theme } from '@emotion/react';

interface ClassesProps {
  label?: (theme: Theme) => SerializedStyles;
}

interface Props extends InputProps {
  classes?: ClassesProps;
}

const Root = styled.input`
  padding: ${({ theme }) => theme.spacing(1.5)};
  border: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.secondary.dark};
  width: 100%;

  &::placeholder {
    color: #c5c5c5;
    font-size: 1.4rem;
    font-weight: 600;
  }
`;

const Input = React.forwardRef(
  (
    { label, classes, ...props }: Props,
    ref: ForwardedRef<HTMLInputElement>,
  ): JSX.Element => {
    const labelClassName = classes?.label;

    return (
      <>
        {label && (
          <Label htmlFor={props.name} css={labelClassName}>
            {label}
          </Label>
        )}
        <Root ref={ref} id={props.name} {...props} />
      </>
    );
  },
);

export default Input;
