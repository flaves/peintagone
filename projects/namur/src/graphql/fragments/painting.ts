import { graphql } from 'gatsby';

// eslint-disable-next-line import/prefer-default-export
export const PaintingFragment = graphql`
  fragment Painting on PrismicPaintingCategory {
    id
    uid
    data {
      category_background_color
      category_name
      category_image {
        alt
        url
      }
      category_link {
        url
      }
    }
  }
`;
