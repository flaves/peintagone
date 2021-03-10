const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const res = await graphql(`
    {
      allPrismicProductCategory {
        edges {
          node {
            uid
          }
        }
      }
    }
  `);

  res.data.allPrismicProductCategory.edges.forEach(({ node }) => {
    createPage({
      path: `/categorie/${node.uid}`,
      component: path.resolve(`./src/templates/category.tsx`),
      context: {
        uid: node.uid,
      },
    });
  });
};
