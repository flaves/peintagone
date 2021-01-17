import React from 'react';

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  name: string;
}

const Textarea = ({ label, ...props }: TextareaProps): JSX.Element => {
  return (
    <div>
      {label && <label htmlFor={props.name}>{label}</label>}
      <textarea {...props} id={props.name} />
    </div>
  );
};

export default Textarea;
