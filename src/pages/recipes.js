import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero";

const IndexPage = () => (
  <Layout>
    <SEO title="Recipes" />
      <Hero title="Recipes" subtitle="Yumm"></Hero>
      <section className="section">
        <div className="container">
          <p>
          Here will a nice recipe overview page.
        </p>
        </div>
      </section>
     
  </Layout>
)

export default IndexPage
