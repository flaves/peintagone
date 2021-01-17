import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
}

const Input = ({ label, ...props }: InputProps): JSX.Element => {
  return (
    <div>
      {label && <label htmlFor={props.name}>{label}</label>}
      <input {...props} id={props.name} />
    </div>
  );
};

export default Input;
