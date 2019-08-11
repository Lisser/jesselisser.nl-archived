import React from "react"


import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <Hero title="Home" subtitle="-"></Hero>
      <section className="section">
        <div className="container">
          <p>Hi people</p>
          <p>My name is Jesse Lisser.</p>
          <p>I like shiny things.</p>
        </div>
      </section>
  </Layout>
)

export default IndexPage
