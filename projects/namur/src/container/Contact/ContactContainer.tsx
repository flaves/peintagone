import React from 'react';

import { RichText } from 'prismic-reactjs';

import ContactHeader from '@/container/Contact/ContactHeader';
import ContactForm from '@/container/Contact/ContactForm';

import { ContactPageQuery } from '@/../graphql-types';

interface Props {
  data: ContactPageQuery;
}

const ContactContainer = ({ data }: Props): JSX.Element => {
  const { title, text, body } = data?.prismicContactPage?.data || {};

  const HeaderProps = {
    title: <RichText render={title?.raw} />,
    text: <RichText render={text?.raw} />,
  };

  return (
    <>
      <ContactHeader {...HeaderProps} />
      <ContactForm body={body} />
    </>
  );
};

export default ContactContainer;
