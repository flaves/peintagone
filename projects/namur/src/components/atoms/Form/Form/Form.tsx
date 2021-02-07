import React, { FormHTMLAttributes } from 'react';

interface Props extends FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
  name: string;
}

const Form = ({ children, name, ...rest }: Props): JSX.Element => {
  return (
    <form
      name={name}
      netlify-honeypot="bot-field"
      data-netlify="true"
      {...rest}
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value={name} />
      {children}
    </form>
  );
};

export default Form;
