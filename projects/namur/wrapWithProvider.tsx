import React from 'react';
import { Global, ThemeProvider } from '@emotion/react';
import { ScrollingProvider } from 'react-scroll-section';

import reset from './src/styles/reset';
import theme from './src/styles/theme';

interface WrapWithProviderProps {
  element: HTMLElement;
}

const WrapWithProvider: React.FC<WrapWithProviderProps> = ({ element }) => (
  <ScrollingProvider offset={-100}>
    <Global styles={reset} />
    <ThemeProvider theme={theme}>{element}</ThemeProvider>
  </ScrollingProvider>
);

export default WrapWithProvider;
