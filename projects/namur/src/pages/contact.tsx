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
        title {
          raw
        }
        text {
          raw
        }
      }
    }
  }
`;

const Contact = ({ data }: Props): JSX.Element => (
  <PrimaryLayout>
    <SEO title="Contact" />
    <ContactContainer data={data} />
  </PrimaryLayout>
);

export default Contact;
