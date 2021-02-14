import React, { FormHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';

interface Props extends FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
  name: string;
}

const Form = ({ children, name, ...rest }: Props): JSX.Element => {
  const { register } = useFormContext();

  return (
    <form
      name={name}
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      {...rest}
    >
      <input type="hidden" name="bot-field" />
      <input
        type="hidden"
        name="form-name"
        value={name}
        ref={register({ required: true })}
      />
      {children}
    </form>
  );
};

export default Form;
