import React from "react"
import { useStaticQuery, graphql } from 'gatsby';

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero";

const IndexPage = () => {
  const data = useStaticQuery(
    graphql`
      query get_insta_feed {
        allInstaNode {
          edges {
            node {
              id
              preview
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
            <p>Here is where I host my personal content. Such as my latest Instagram posts</p>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="columns is-multiline">
              {data.allInstaNode.edges.map((edge, index) => (
                <div className="column is-one-third" key={index}>
                  <img src={edge.node.preview} alt=""/>
                </div>
              ))}
            </div>
          </div>
        </section>
    </Layout>
  )
}
export default IndexPage
