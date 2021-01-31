import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';

import Link from '@/components/atoms/Link';
import Grid from '@/components/atoms/Grid';
import Container from '@/components/atoms/Container';
import Typography from '@/components/atoms/Typography';
import Separator from '@/components/atoms/Separator';
import Socials from '@/components/molecules/Socials';
import NewsletterForm from '@/components/molecules/NewsletterForm';

import mq from '@/styles/mq';

import { useCompanyInfosContext } from '@/contexts/companyInfosContext';

import LinkType from '@/types/link';
import { SocialProps } from '@/components/molecules/Socials/Socials';

interface Props {
  links?: LinkType[];
  socials?: SocialProps[];
  legals?: LinkType[];
}

const Root = styled.div`
  margin-top: ${({ theme }) => theme.spacing(5)};
`;
const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const LinkStyled = styled(Link)`
  font-weight: 800;
  &:not(:last-of-type) {
    margin-bottom: ${({ theme }) => theme.spacing(2)};
  }
`;
const Column = styled(Grid)`
  flex-direction: column;
`;
const ColumnsContainer = styled(Grid)`
  padding-top: ${({ theme }) => theme.spacing(2)};

  ${Column}:not(:first-of-type) {
    margin-top: ${({ theme }) => theme.spacing(4)};
  }

  ${mq('sm')} {
    ${Column}:nth-of-type(2n + 1) {
      margin-top: ${({ theme }) => theme.spacing(4)};
    }

    ${Column}:nth-of-type(even) {
      align-items: flex-end;
    }
  }

  ${mq('md')} {
    justify-content: space-between;

    ${Column}:not(:first-of-type) {
      margin-top: 0;
    }
    ${Column}:nth-of-type(2n + 1) {
      margin-top: 0;
    }
    ${Column}:nth-of-type(even) {
      align-items: flex-start;
    }
  }
`;
const TypographyStyled = styled(Typography)`
  font-size: 1.6rem;
  font-weight: 800;
  max-width: 300px;
`;
const Schedule = styled(TypographyStyled)`
  margin-top: ${({ theme }) => theme.spacing(3)};
`;
const BottomContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing(4)};

  ${mq('sm')} {
    margin-top: ${({ theme }) => theme.spacing(6)};
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
const LegalsContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${mq('sm')} {
    flex-direction: row;
    align-items: center;
  }
`;
const LegalLinks = styled(Link)`
  font-weight: 800;
  &:not(:first-of-type) {
    margin-top: ${({ theme }) => theme.spacing(2)};
  }

  ${mq('sm')} {
    padding-right: ${({ theme }) => theme.spacing(2)};
    &:not(:first-of-type) {
      margin-top: 0;
    }
  }

  ${mq('md')} {
    padding-right: ${({ theme }) => theme.spacing(7)};
  }
`;
const SocialsContainer = styled(Grid)`
  display: flex;
  margin-top: ${({ theme }) => theme.spacing(1)};

  ${mq('sm')} {
    justify-content: flex-end;
  }
`;
const Copyright = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing(2)};

  ${mq('sm')} {
    margin-top: 0;
  }
`;

const Footer = ({ links, socials, legals }: Props): JSX.Element => {
  const { companyInfos } = useCompanyInfosContext();
  const { address, email, phone, schedule } = companyInfos;

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  const Links = links?.map((link, index) => (
    <LinkStyled
      key={index.toString()}
      to={link?.url || ''}
      target={link?.target || ''}
    >
      {link?.label}
    </LinkStyled>
  ));

  const Legals = legals?.map((link, index) => (
    <LegalLinks
      key={index.toString()}
      to={link?.url || ''}
      target={link?.target || ''}
    >
      {link?.label}
    </LegalLinks>
  ));

  return (
    <Root>
      <Separator />
      <Container>
        <ColumnsContainer container>
          <Column container md={2} sm={6} xs={12}>
            <LinksContainer>{Links}</LinksContainer>
          </Column>
          <Column container md={3} sm={6} xs={12}>
            <TypographyStyled as="div">{email}</TypographyStyled>
            <TypographyStyled as="div">{phone}</TypographyStyled>
          </Column>
          <Column container md={3} sm={6} xs={12}>
            <TypographyStyled as="div">{address}</TypographyStyled>
            <Schedule as="div">{schedule}</Schedule>
          </Column>
          <Column container md={3} sm={6} xs={12}>
            <TypographyStyled>
              Inscrivez-vous à notre newsletter
            </TypographyStyled>
            <NewsletterForm onSubmit={onSubmit} />
            {socials && (
              <SocialsContainer>
                <Socials socials={socials} />
              </SocialsContainer>
            )}
          </Column>
        </ColumnsContainer>
        <BottomContainer>
          <LegalsContainer>{Legals}</LegalsContainer>
          <Copyright>
            <TypographyStyled>
              © {new Date().getFullYear()} Peintagone
            </TypographyStyled>
          </Copyright>
        </BottomContainer>
      </Container>
    </Root>
  );
};

export const query = graphql`
  fragment Footer on PrismicFooter {
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
`;

export default Footer;
