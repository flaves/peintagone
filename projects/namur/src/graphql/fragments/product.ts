import { graphql } from 'gatsby';

// eslint-disable-next-line import/prefer-default-export
export const ProductFragment = graphql`
  fragment Product on PrismicProductCategory {
    id
    data {
      category_name
      category_image {
        url
      }
    }
  }
`;
