import React from 'react';
import PrimaryLayout from '@/components/organisms/layout/PrimaryLayout';
import SEO from '@/components/atoms/Seo';

const NotFound = (): JSX.Element => (
  <PrimaryLayout>
    <SEO title="404: Not found" />
    <h1>Page not found</h1>
  </PrimaryLayout>
);

export default NotFound;
