import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';

import formatDistance from 'date-fns/formatDistance';

const IndexPage = () => {
  const data = useStaticQuery(
    graphql`
      query get_insta_feed {
        allInstaNode(sort: { fields: [timestamp], order: DESC }) {
          edges {
            node {
              id
              preview
              username
              timestamp
            }
          }
        }
      }
    `
  );
  return (
    <Layout>
      <SEO title="Home" />
      <Hero title="Home" subtitle="-"></Hero>
      <section className="section">
        <div className="container">
          <p>Hi people</p>
          <p>Welcome to jesselisser.nl</p>
          <p>
            Here is where I host my personal content. Such as my latest
            Instagram posts
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {data.allInstaNode.edges.map(edge => (
              <div className="column is-one-third" key={edge.node.id}>
                <div className="card ">
                  {/* <header className="card-header">
                    <p className="card-header-title">{formatDistance(new Date(edge.node.timestamp * 1000), new Date())} - {edge.node.username}</p>
                    <div className="card-header-icon">
                      <a href={`https://www.instagram.com/p/${edge.node.id}`}>
                        <span className="card-header-icon icon">
                          <i className="fab fa-instagram"></i>
                        </span>
                      </a>
                    </div>
                  </header> */}
                  <a href={`https://www.instagram.com/p/${edge.node.id}`}>
                    <div className="card-image">
                      <figure className="image is-1by1">
                        <img
                          style={{ objectFit: 'cover' }}
                          src={edge.node.preview}
                          alt="Placeholder"
                        ></img>
                      </figure>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default IndexPage;
