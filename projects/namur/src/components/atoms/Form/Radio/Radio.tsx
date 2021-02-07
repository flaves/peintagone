import React, { ForwardedRef } from 'react';
import styled from '@emotion/styled';

import Typography from '@/components/atoms/Typography';

import { RadioProps } from '@/types/input';

const RadioButton = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const Round = styled.span`
  display: inline-block;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.secondary.dark};
  margin-right: ${({ theme }) => theme.spacing(1)};
  position: relative;

  &:after {
    opacity: 0;
    transition: opacity 0.3s ease;
    display: block;
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color.primary.main};
  }
`;
const Value = styled(Typography)`
  font-weight: 800;
`;
const Input = styled.input`
  display: none;

  &:checked ~ ${RadioButton} > ${Round}:after {
    opacity: 1;
  }
`;

const Radio = (
  { id, name, value, label, checked, ...rest }: RadioProps,
  ref: ForwardedRef<HTMLInputElement>,
): JSX.Element => {
  return (
    <div {...rest}>
      <Input
        ref={ref}
        defaultChecked={checked}
        type="radio"
        name={name}
        value={value}
        id={id}
      />
      <RadioButton htmlFor={id}>
        <Round />
        <Value variant="textDefault">{label}</Value>
      </RadioButton>
    </div>
  );
};

export default React.forwardRef(Radio);
