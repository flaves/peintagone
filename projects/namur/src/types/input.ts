import { HTMLAttributes } from 'react';

export type InputType = 'text' | 'email' | 'tel' | 'textarea' | 'radio';

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
  name: string;
  placeholder?: string;
  label?: string;
  required?: boolean;
  type?: InputType;
  rules?: Record<string, any>;
}

export interface TextAreaProps extends InputProps {
  rows?: number;
}

export interface RadioProps extends InputProps {
  id: string;
  value: string;
  checked?: boolean;
}

export default InputProps;
