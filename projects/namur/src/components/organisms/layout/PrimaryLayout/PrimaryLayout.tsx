import React, { useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { RichText } from 'prismic-reactjs';

import Header from '@/components/organisms/layout/Header';
import Footer from '@/components/organisms/layout/Footer';
import Notifications from '@/components/molecules/Notifications';

import { useCompanyInfosContext } from '@/contexts/companyInfosContext';

import LinkType from '@/types/link';

import { LayoutQuery } from '../../../../../graphql-types';

interface LayoutProps {
  children: React.ReactNode;
  hideNav?: boolean;
}

export const query = graphql`
  query Layout {
    prismicNavigation {
      ...Navigation
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
      ...Footer
    }
  }
`;

const navLinks: LinkType[] = [
  {
    label: `Produits`,
    target: `products`,
  },
  {
    label: `Tendances`,
    target: `trends`,
  },
  {
    label: `Partenaires`,
    target: `partners`,
  },
  {
    label: `Équipe`,
    target: `team`,
  },
  {
    label: `Nous trouver`,
    target: `map`,
  },
  // {
  //   label: `Contactez-nous`,
  //   url: `/contact`,
  // },
];

const PrimaryLayout = ({
  children,
  hideNav = false,
}: LayoutProps): JSX.Element | null => {
  const data: LayoutQuery = useStaticQuery(query);
  const { setCompanyInfos } = useCompanyInfosContext();

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
      <Header hideNav={hideNav} {...HeaderProps} />
      <main role="main">{children}</main>
      <Footer {...FooterProps} />
      <Notifications />
    </>
  );
};

export default PrimaryLayout;
