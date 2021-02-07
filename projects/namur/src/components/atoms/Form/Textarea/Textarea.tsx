import React, { ForwardedRef } from 'react';
import Label from '@/components/atoms/Form/Label';
import styled from '@emotion/styled';

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  name: string;
}

const Root = styled.textarea`
  padding: ${({ theme }) => theme.spacing(1.5)};
  border: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.secondary.dark};
  width: 100%;
  resize: vertical;

  &::placeholder {
    color: #c5c5c5;
    font-size: 1.4rem;
    font-weight: 600;
  }
`;

const Textarea = (
  { label, ...props }: TextareaProps,
  ref: ForwardedRef<HTMLTextAreaElement>,
): JSX.Element => {
  return (
    <>
      {label && <Label htmlFor={props.name}>{label}</Label>}
      <Root ref={ref} id={props.name} {...props} />
    </>
  );
};

export default React.forwardRef(Textarea);
