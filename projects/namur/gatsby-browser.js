/* eslint-disable */

import wrapWithProvider from './wrapWithProvider';
import CompanyInfosProvider from './src/contexts/companyInfosContext';

export const wrapPageElement = ({ element, props }) => {
  return <CompanyInfosProvider {...props}>{element}</CompanyInfosProvider>;
};

export const wrapRootElement = wrapWithProvider;
