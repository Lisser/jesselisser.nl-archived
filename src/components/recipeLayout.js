import React from 'react'
import { graphql } from 'gatsby';
import { FaList } from 'react-icons/fa';
import Img from "gatsby-image"

import Layout from './layout';
import Hero from './hero';

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
          featuredImage  {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
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
        <h1 className="title is-3">{markdownRemark.frontmatter.title}</h1>
          <div className="box">
            <div className="columns">
              <div className="column">
                <Img fluid={{...markdownRemark.frontmatter.featuredImage.childImageSharp.fluid, aspectRatio: 1}} />
              </div>
              <div className="column">
                <p className="title is-4">
                  Ingredients
                </p>
                <ul>
                  {markdownRemark.frontmatter.ingredients.map((ingredient, i) => (
                    <li key={i}>{ingredient}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        <div className="content" dangerouslySetInnerHTML={{__html: markdownRemark.html}}></div>
      </div>
    </section>
  </Layout>

export default postLayout;
