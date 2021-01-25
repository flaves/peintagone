import { FluidObject } from 'gatsby-image';

export interface ImageType {
  url?: string | null;
  alt?: string | null;
}

export interface GatsbyImageType {
  childImageSharp: {
    id: string;
    fluid: FluidObject;
  };
}
