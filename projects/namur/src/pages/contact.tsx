import React from 'react';
import { graphql } from 'gatsby';

import PrimaryLayout from '@/components/organisms/layout/PrimaryLayout';
import SEO from '@/components/atoms/Seo';
import ContactContainer from '@/container/Contact/ContactContainer';

import { ContactPageQuery } from '@/../graphql-types';

interface Props {
  data: ContactPageQuery;
}

export const query = graphql`
  query ContactPage {
    prismicContactPage {
      data {
        meta_title
        meta_description
        ...ContactHeader
        body {
          ...SliceInputText
          ...SliceInputTextArea
          ...SliceInputRadio
        }
      }
    }
  }
`;

const Contact = ({ data }: Props): JSX.Element => (
  <PrimaryLayout hideNav>
    <SEO
      title={data?.prismicContactPage?.data?.meta_title as string}
      description={data?.prismicContactPage?.data?.meta_description as string}
    />
    <ContactContainer data={data} />
  </PrimaryLayout>
);

export default Contact;
