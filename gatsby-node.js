const path = require('path');

exports.createPages = ({ graphql, actions   }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(`
      query create_recipe_pages_query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                slug
              }
            }
          }
        }
      }    
    `).then(results => {
      results.data.allMarkdownRemark.edges.forEach(({node}) => {
        createPage({
          path: `/recipes${node.frontmatter.slug}`,
          component: path.resolve('./src/components/recipeLayout.js'),
          context: {
            slug: node.frontmatter.slug,
          }
        });
      })
      resolve();
    })
  });
}