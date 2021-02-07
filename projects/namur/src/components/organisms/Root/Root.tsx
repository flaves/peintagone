import React from 'react';
import CompanyInfosProvider from '@/contexts/companyInfosContext';
import NotifContextProvider from '@/contexts/notificationsContext';

const Root = (element: any, props: any): JSX.Element => {
  return (
    <CompanyInfosProvider {...props}>
      <NotifContextProvider>{element.children}</NotifContextProvider>
    </CompanyInfosProvider>
  );
};

export default Root;
