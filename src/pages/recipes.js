import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';

const IndexPage = () => {
  const data = useStaticQuery(
    graphql`
      query list_recipes_query {
        allMarkdownRemark(limit: 5, sort: {
          order: DESC,
          fields: [frontmatter___date]
        }) {
          edges {
            node {
              excerpt
              frontmatter {
                title
                slug
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `
  );
  return (
    <Layout>
      <SEO title="Recipes" />
      <Hero title="Recipes" subtitle="🍴🍜 - Gathered on-line, in-person or created by myself. Treasured here"></Hero>
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {data.allMarkdownRemark.edges.map((edge) => (
              <div className="column is-one-third" key={edge.node.frontmatter.slug}>
                <Link to={`/recipes${edge.node.frontmatter.slug}`}>
                  <div className="card">
                    <div className="card-image">
                      <figure className="image is-4by3">
                        <img
                          src="https://bulma.io/images/placeholders/1280x960.png"
                          alt="Placeholder"
                        ></img>
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="media">
                        <div className="media-content">
                          <p className="title is-4">
                            {edge.node.frontmatter.title}
                          </p>
                        </div>
                      </div>
                      <div className="content">
                        {edge.node.excerpt}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;
