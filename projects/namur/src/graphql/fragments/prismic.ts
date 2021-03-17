import { graphql } from 'gatsby';

// eslint-disable-next-line import/prefer-default-export
export const GatsbyPrismicImageFluid = graphql`
  fragment GatsbyPrismicImageFluid on PrismicImageFluidType {
    base64
    aspectRatio
    src
    srcSet
    sizes
  }
`;
