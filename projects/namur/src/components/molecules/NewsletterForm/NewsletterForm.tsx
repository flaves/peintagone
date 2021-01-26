import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/pro-solid-svg-icons';
import { useForm } from 'react-hook-form';

import Input from '@/components/atoms/Input';
import FormError from '@/components/atoms/FormError/Error';
import Grid from '@/components/atoms/Grid';

interface FormData {
  email: string;
}

interface Props {
  onSubmit: any;
}

const InputContainer = styled(Grid)`
  width: 26rem;
  position: relative;
`;
const SubmitButton = styled.button`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  padding: ${({ theme }) => theme.spacing(1)};
  cursor: pointer;
  background-color: #efefef;
  border: none;
`;

const NewsletterForm = ({ onSubmit }: Props): JSX.Element => {
  const { register, handleSubmit, errors, clearErrors } = useForm<FormData>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputContainer mt={1} container flexWrap="nowrap">
        <Input
          required
          onChange={() => clearErrors()}
          type="email"
          name="email"
          placeholder="Votre adresse e-mail"
          ref={register({
            required: 'Required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'invalid email address',
            },
          })}
        />
        <SubmitButton type="submit">
          <FontAwesomeIcon icon={faPaperPlane} />
        </SubmitButton>
      </InputContainer>
      {errors.email && <FormError>{errors.email.message}</FormError>}
    </form>
  );
};

export default NewsletterForm;
