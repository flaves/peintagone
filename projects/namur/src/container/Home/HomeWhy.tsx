import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';

import Grid from '@/components/atoms/Layout/Grid';
import Img from '@/components/atoms/Img';
import Typography from '@/components/atoms/Typography';

import { ImageType } from '@/types/image';
import mq from '@/styles/mq';

interface ListItemProps {
  item?: React.ReactNode;
  index?: number;
}

interface Props {
  title?: React.ReactNode;
  list?: ListItemProps[];
  sideImage?: ImageType;
}

const Root = styled(Grid)<Props>`
  margin-top: ${({ theme }) => theme.spacing(10)};
  align-items: stretch;
`;
const GridText = styled(Grid)`
  background-color: ${({ theme }) => theme.color.secondary.main};
  padding-top: ${({ theme }) => theme.spacing(4)};
  padding-bottom: ${({ theme }) => theme.spacing(4)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  ${mq('md')} {
    padding-top: ${({ theme }) => theme.spacing(7)};
    padding-bottom: ${({ theme }) => theme.spacing(7)};
    padding-left: ${({ theme }) => theme.spacing(4)};
    padding-right: ${({ theme }) => theme.spacing(4)};
  }

  ${mq('lg')} {
    padding-left: ${({ theme }) => theme.spacing(10)};
    padding-right: ${({ theme }) => theme.spacing(10)};
  }
`;
const Title = styled(Typography)`
  text-align: center;
  max-width: 20ch;
  margin-left: auto;
  margin-right: auto;

  ${mq('md')} {
    text-align: left;
    margin-left: initial;
    margin-right: initial;
  }
`;
const ListContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing(4)};
  width: 100%;
`;
const ListItemContainer = styled.div`
  display: flex;
  margin-bottom: ${({ theme }) => theme.spacing(4.5)};
  flex-direction: column;
  align-items: center;

  ${mq('md')} {
    flex-direction: row;
  }
`;
const Index = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) => theme.color.primary.main};
  color: ${({ theme }) => theme.color.white.main};
  font-weight: 800;
  font-size: 2.4rem;

  ${mq('md')} {
    border-radius: 12px;
    margin-right: ${({ theme }) => theme.spacing(2)};
  }
`;
const ListItemText = styled(Typography)`
  margin-top: ${({ theme }) => theme.spacing(1)};
  text-align: center;

  ${mq('md')} {
    text-align: left;
  }
`;
const GridImage = styled(Grid)`
  padding-top: 50%;
  position: relative;
`;
const SideImage = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ListItem = ({ index, item }: ListItemProps): JSX.Element => {
  return (
    <ListItemContainer>
      <Index>{index !== undefined ? index + 1 : 0}</Index>
      <ListItemText variant="h3">{item}</ListItemText>
    </ListItemContainer>
  );
};

const HomeWhy = ({ title, list, sideImage }: Props): JSX.Element => {
  const List = list?.map((item, index) => (
    <ListItem key={index.toString()} index={index} {...item} />
  ));

  return (
    <Root container>
      <GridText xxs={12} md={6}>
        <Title variant="h2">{title}</Title>
        <ListContainer>{List}</ListContainer>
      </GridText>
      <GridImage xxs={12} md={6}>
        <SideImage
          src={sideImage?.url}
          alt={sideImage?.alt}
          sizes="(min-width: 980px) 50vw, 100vw"
        />
      </GridImage>
    </Root>
  );
};

export const query = graphql`
  fragment HomeWhy on PrismicHomePageDataType {
    why_section_title {
      raw
    }
    why_section_list {
      list_item {
        raw
      }
    }
    why_section_side_image {
      url
      alt
    }
  }
`;

export default HomeWhy;
