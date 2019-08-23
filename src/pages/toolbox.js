import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero";

const NotFoundPage = () => (
  <Layout>
    <SEO title="Toolbox" />

    <Hero title="Toolbox" subtitle="A collection of online resources to build my site"></Hero>

    <section className="section">
      <div className="container">
        <h2 className="title is-2">Tools:</h2>
        <ul>
          <li><a href="https://www.leveluptutorials.com/tutorials/pro-gatsby-2">Scott Tolinskey's Gatsby Course</a></li>
          <li><a href="https://www.udemy.com/the-gatsby-masterclass/learn/lecture/13314236#overview">Udemy Course (Gerard)</a></li>
          <li><a href="https://pwn.by/noraj/">noraj: Cool example</a></li>
          <li><a href="https://bulma.io/documentation">Bulma</a></li>
          <li><a href="https://app.netlify.com/sites/unruffled-darwin-80c673/overview">Netlify Admin</a></li>
          <li><a href="https://unruffled-darwin-80c673.netlify.com/">Netlify Deployed</a></li>
          <li><a href="https://biron.bironthemes.com/">Biron Ghost Theme</a></li>
        </ul>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
