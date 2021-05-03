/* eslint-disable */

import wrapWithProvider from './wrapWithProvider';
import CompanyInfosProvider from './src/contexts/companyInfosContext';

export const wrapPageElement = ({ element, props }) => {
  return <CompanyInfosProvider {...props}>{element}</CompanyInfosProvider>;
};

export const wrapRootElement = wrapWithProvider;

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="google-tag-manager"
      async
      src="https://www.googletagmanager.com/gtag/js?id=AW-458385190"
    />,
    <script
      key="gtag"
      dangerouslySetInnerHTML={{
        __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-458385190');`,
      }}
    />,
  ]);
};
