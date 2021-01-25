import React, { useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { RichText } from 'prismic-reactjs';

import Header from '@/components/organisms/layout/Header';
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
          link {
            url
            target
          }
        }
      }
    }
    prismicCompanyInfos {
      data {
        address {
          raw
        }
        email
        phone_number
        schedule {
          raw
        }
      }
    }
    prismicFooter {
      data {
        social_media {
          icon {
            alt
            url
          }
          link {
            url
            target
          }
        }
        legal_links {
          label
          link {
            url
            target
          }
        }
      }
    }
  }
`;

const PrimaryLayout = ({ children }: LayoutProps): JSX.Element | null => {
  const data: LayoutQuery = useStaticQuery(query);
  const { setCompanyInfos } = useCompanyInfosContext();

  const { links } = data?.prismicNavigation?.data || {};

  const { address, email, phone_number, schedule } =
    data?.prismicCompanyInfos?.data || {};

  const { social_media, legal_links } = data?.prismicFooter?.data || {};

  const companyData = {
    address: <RichText render={address?.raw} />,
    email,
    phone: phone_number,
    schedule: <RichText render={schedule?.raw} />,
  };

  useEffect(() => {
    setCompanyInfos(companyData);
  }, []);

  const navLinks = links?.map((link: any) => ({
    label: link.label,
    url: link.link.url,
    target: link.link.target,
  }));

  const HeaderProps = {
    links: navLinks,
  };

  const FooterProps = {
    links: navLinks,
    socials: social_media?.map((media: any) => ({
      link: media.link,
      icon: media.icon,
    })),
    legals: legal_links?.map((link: any) => ({
      label: link.label,
      url: link.link.url,
      target: link.link.target,
    })),
  };

  return (
    <>
      <Header {...HeaderProps} />
      <main role="main">{children}</main>
      <Footer {...FooterProps} />
    </>
  );
};

export default PrimaryLayout;
