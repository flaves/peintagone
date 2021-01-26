import { FluidObject } from 'gatsby-image';

export interface ImageType {
  url: string;
  alt: string;
}

export interface GatsbyImageType {
  childImageSharp: {
    id: string;
    fluid: FluidObject;
  };
}
