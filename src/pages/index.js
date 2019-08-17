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
      allInstaNode(
        sort: {
          fields: [timestamp]
          order: DESC
        }
      ) {
        edges {
          node {
            id
            preview
            username
            timestamp
            localFile {
              relativePath
              childImageSharp {
                fixed(width: 400, height: 400) {
                  src
                }
              }
            }
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
        <div className="card">

          <header class="card-header">
            
            <p class="card-header-title">
              <a className="u-url is-link" href="https://www.instagram.com/messy_.jesse" aria-label="Instagram" rel="me">
                messy_.jesse
              </a>
            </p>

            <a className="card-header-icon u-url" href="https://www.instagram.com/messy_.jesse" aria-label="Instagram" rel="me">
              <span className="icon">
                <i className="fab fa-instagram"></i>
              </span>
            </a>
          </header>

          <div className="columns is-multiline is-mobile is-tiny is-variable insta-columns">
            {data.allInstaNode.edges.map(edge => (
              <div className="column is-one-third " key={edge.node.id}>
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
                        src={edge.node.localFile.childImageSharp.fixed.src}
                        alt="Placeholder"
                      ></img>
                    </figure>
                  </div>
                </a>
              </div>
            ))}
          </div>

        </div>
      </div>
      </section>
    </Layout>
  );
};
export default IndexPage;
