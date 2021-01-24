import { FluidObject } from 'gatsby-image';

export interface ImageProps {
  url: string;
  alt: string;
}

export interface GatsbyImageType {
  childImageSharp: {
    id: string;
    fluid: FluidObject;
  };
}
