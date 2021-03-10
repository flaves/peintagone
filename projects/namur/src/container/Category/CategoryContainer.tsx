import React from 'react';
import styled from '@emotion/styled';
import Link from '@/components/atoms/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/pro-solid-svg-icons';

import CategoryHero from '@/container/Category/CategoryHero';
import CategoryList from '@/container/Category/CategoryList';
import CategoryPartners from '@/container/Category/CategoryPartners';

import mq from '@/styles/mq';

import { CategoryPageQuery } from '../../../graphql-types';

interface Props {
  data: CategoryPageQuery;
}

const Root = styled.section`
  margin-top: ${({ theme }) => theme.spacing(3)};
`;

const ContentContainer = styled.div`
  text-align: center;
  max-width: 100vw;
  padding: 0;

  ${mq('md')} {
    text-align: left;
    margin-top: ${({ theme }) => theme.spacing(8)};
  }

  ${mq('lg')} {
    max-width: ${({ theme }) => theme.breakpoints.lg}px;
    margin: ${({ theme }) => theme.spacing(10)} auto auto;
  }
`;

const Header = styled.div`
  padding-left: ${({ theme }) => theme.spacing(3)};
  padding-right: ${({ theme }) => theme.spacing(3)};
`;

const Back = styled(Link)`
  color: ${({ theme }) => theme.color.primary.main};
  display: none;

  ${mq('lg')} {
    display: block;
  }
`;

const BackArrow = styled(FontAwesomeIcon)`
  margin-right: ${({ theme }) => theme.spacing(1)};
`;

const CategoryContainer = ({ data }: Props) => {
  return (
    <Root>
      <ContentContainer>
        <Header>
          <Back to="/">
            <BackArrow icon={faArrowLeft} />
            Revenir à la page d&apos;accueil
          </Back>
        </Header>
        <CategoryHero data={data} />
        <CategoryList data={data} />
        <CategoryPartners data={data} />
      </ContentContainer>
    </Root>
  );
};

export default CategoryContainer;
