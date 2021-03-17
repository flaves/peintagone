import React from 'react';
import { graphql } from 'gatsby';

import PrimaryLayout from '@/components/organisms/layout/PrimaryLayout';
import CategoryContainer from '@/container/Category/CategoryContainer';
import SEO from '@/components/atoms/Seo';

import { CategoryPageQuery } from '../../graphql-types';

interface Props {
  data: CategoryPageQuery;
}

const CategoryPage = ({ data }: Props) => {
  return (
    <PrimaryLayout hideNav>
      <SEO
        title={data.prismicProductCategory?.data?.category_name as string}
        description={
          data?.prismicProductCategory?.data?.category_description as string
        }
      />
      <CategoryContainer data={data} />
    </PrimaryLayout>
  );
};

export const query = graphql`
  query CategoryPage($uid: String) {
    prismicProductCategory(uid: { eq: $uid }) {
      data {
        category_name
        category_description
        category_image {
          fluid {
            ...GatsbyPrismicImageFluid
          }
        }
        product_types {
          product_type {
            document {
              ... on PrismicProductType {
                id
                data {
                  type_name
                  type_images {
                    type_image {
                      fluid {
                        ...GatsbyPrismicImageFluid
                      }
                    }
                  }
                }
              }
            }
          }
        }
        category_partners {
          partner_name
        }
      }
    }
  }
`;

export default CategoryPage;
