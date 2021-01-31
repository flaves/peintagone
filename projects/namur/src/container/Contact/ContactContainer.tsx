import React from 'react';

import { ContactPageQuery } from '@/../graphql-types';

interface Props {
  data: ContactPageQuery;
}

const ContactContainer = ({ data }: Props): JSX.Element => {
  const { title, text } = data?.prismicContactPage?.data || {};

  return <div>Contact</div>;
};

export default ContactContainer;