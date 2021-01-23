import React from 'react';
import Header from '@/components/organisms/layout/Header';

interface LayoutProps {
  children: React.ReactNode;
}

const PrimaryLayout = ({ children }: LayoutProps): JSX.Element => (
  <>
    <Header />
    <main role="main">{children}</main>
  </>
);

export default PrimaryLayout;
