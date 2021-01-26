import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import Company from '@/domain/entities/Company';

export interface CompanyInfosContextType {
  companyInfos: Company;
  setCompanyInfos: Dispatch<SetStateAction<Company>>;
}

interface ProviderProps {
  children: React.ReactNode;
}

const initialCompany = {
  address: '',
  phone: '',
  email: '',
  schedule: '',
};

const initialValue: CompanyInfosContextType = {
  companyInfos: initialCompany,
  setCompanyInfos: () => null,
};

export const CompanyInfosContext = createContext<CompanyInfosContextType>(
  initialValue,
);

const CompanyInfosProvider = ({ children }: ProviderProps): JSX.Element => {
  const [companyInfos, setCompanyInfos] = useState<Company>(initialCompany);

  useEffect(() => console.log(companyInfos), [companyInfos]);

  const value = useMemo(() => ({ companyInfos, setCompanyInfos }), [
    companyInfos,
    setCompanyInfos,
  ]);

  return (
    <CompanyInfosContext.Provider value={value}>
      {children}
    </CompanyInfosContext.Provider>
  );
};

export const useCompanyInfosContext = (): CompanyInfosContextType =>
  useContext(CompanyInfosContext);

export default CompanyInfosProvider;
