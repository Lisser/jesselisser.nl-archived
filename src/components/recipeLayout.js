import React from 'react'
import { graphql } from 'gatsby';

import Layout from './layout';
import Hero from './hero';
import { FaList } from 'react-icons/fa';

export const query = graphql`
  query recipe_query($slug: String) {
    markdownRemark(frontmatter: {
      slug: {
        eq: $slug
      }
    }) {
        excerpt
        html
        frontmatter {
          title
          ingredients
          slug
          date(formatString: "MMMM DD, YYYY")
        }
    }
  }
`;

const postLayout = ({data: {markdownRemark}}) => 
  <Layout>
    <Hero title={markdownRemark.frontmatter.title} subtitle="-"></Hero>
    <section className="section">
      <div className="container">
        
        <div className="level">
          <div className="level-left">
            <h1 className="title is-3">{markdownRemark.frontmatter.title}</h1>
          </div>
          <div className="level-right">
            <button type="button" className="button">
              <span className="icon is-small">
                <FaList />
              </span>
              <span>Shopping List</span>
            </button>
          </div>
        </div>
        
        <div className="content" dangerouslySetInnerHTML={{__html: markdownRemark.html}}></div>
      </div>
    </section>
  </Layout>

export default postLayout;
