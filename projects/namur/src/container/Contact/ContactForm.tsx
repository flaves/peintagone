import React from 'react';
import styled from '@emotion/styled';
import { FormProvider, useForm } from 'react-hook-form';

import ContactFormSliceZone from '@/container/Contact/ContactFormSliceZone';

import Container from '@/components/atoms/Layout/Container';
import Button from '@/components/atoms/Button';
import Form from '@/components/atoms/Form/Form';
import Loader from '@/components/atoms/Loader';

import usePostNetlifyForm from '@/hooks/usePostNetlifyForm';

import mq from '@/styles/mq';

interface Props {
  body: any;
}

const Root = styled(Container)`
  margin-top: ${({ theme }) => theme.spacing(6)};
`;
const FormContainer = styled(Container)`
  ${mq('lg')} {
    margin-right: auto;
    margin-left: 0;
    padding: 0;
  }
`;

const ContactForm = ({ body }: Props): JSX.Element => {
  const methods = useForm();
  const { executeFetch, loading } = usePostNetlifyForm('/', 'contact');

  const onSubmit = async (data: any) => {
    await executeFetch(data);

    methods.reset();
  };

  return (
    <Root>
      <FormProvider {...methods}>
        <FormContainer maxWidth="md">
          <Form
            method="POST"
            name="contact"
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            <ContactFormSliceZone body={body} />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={loading}
            >
              {loading ? <Loader /> : 'Envoyer'}
            </Button>
          </Form>
        </FormContainer>
      </FormProvider>
    </Root>
  );
};

export default ContactForm;
