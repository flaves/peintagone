import React from 'react';

import PrimaryLayout from '@/components/organisms/layout/PrimaryLayout';
import SEO from '@/components/atoms/Seo';

const Home: React.FC = () => (
  <PrimaryLayout>
    <SEO title="Home" />
    <h1>Gatsby Starter Flaves</h1>
  </PrimaryLayout>
);

export default Home;
