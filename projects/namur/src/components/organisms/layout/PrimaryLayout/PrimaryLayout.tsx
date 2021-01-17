import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const PrimaryLayout = ({ children }: LayoutProps): JSX.Element => (
  <main role="main">{children}</main>
);

export default PrimaryLayout;
