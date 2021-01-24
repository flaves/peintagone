import React, { useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Header from '@/components/organisms/layout/Header';
import RootElement from '@/components/organisms/RootElement';
import Footer from '@/components/organisms/layout/Footer';

import { useCompanyInfosContext } from '@/contexts/companyInfosContext';

import { LayoutQuery } from '../../../../../graphql-types';

interface LayoutProps {
  children: React.ReactNode;
}

export const query = graphql`
  query Layout {
    prismicNavigation {
      data {
        links {
          label
          path {
            url
            target
          }
        }
      }
    }
    prismicCompanyInfos {
      data {
        address
        email
        phone_number
      }
    }
  }
`;

const PrimaryLayout = ({ children }: LayoutProps): JSX.Element => {
  const data: LayoutQuery = useStaticQuery(query);
  const { setCompanyInfos } = useCompanyInfosContext();

  // @ts-ignore
  const { links } =
    data && data.prismicNavigation && data.prismicNavigation.data;

  // @ts-ignore
  const { address, email, phone_number } =
    data && data.prismicCompanyInfos && data.prismicCompanyInfos.data;

  useEffect(() => {
    const companyInfos = {
      address,
      email,
      phone: phone_number,
    };

    setCompanyInfos(companyInfos);
  }, []);

  const HeaderProps = {
    links: links.map((link: any) => ({
      label: link.label,
      path: link.path.url,
      target: link.path.target,
    })),
  };

  const FooterProps = {};

  return (
    <RootElement>
      <Header {...HeaderProps} />
      <main role="main">{children}</main>
      <Footer {...FooterProps} />
    </RootElement>
  );
};

export default PrimaryLayout;
