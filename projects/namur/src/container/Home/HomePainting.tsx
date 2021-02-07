import React from 'react';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';

interface Props {
  title?: React.ReactNode;
}

const Root = styled.div<Props>``;

const HomePainting = ({ title }: Props): JSX.Element => {
  return <Root>{title}</Root>;
};

export const query = graphql`
  fragment HomePainting on PrismicHomePageDataType {
    painting_section_title {
      raw
    }
  }
`;

export default HomePainting;
