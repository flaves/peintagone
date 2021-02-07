import React from 'react';
import { useFormContext } from 'react-hook-form';

interface Props {
  children: React.ReactNode;
}

const ConnectForm = ({ children }: Props) => {
  const methods = useFormContext();

  // @ts-ignore
  return children({ ...methods });
};

export default ConnectForm;
