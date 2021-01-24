import React from 'react';
import { Global, ThemeProvider } from '@emotion/react';

import CompanyInfosProvider from '@/contexts/companyInfosContext';

// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = false; /* eslint-disable import/first */

import reset from '@/styles/reset';
import theme from '@/styles/theme';

interface Props {
  children: React.ReactNode;
}

const RootElement = ({ children }: Props): JSX.Element => {
  return (
    <>
      <Global styles={reset} />
      <ThemeProvider theme={theme}>
        <CompanyInfosProvider>{children}</CompanyInfosProvider>
      </ThemeProvider>
    </>
  );
};

export default RootElement;
