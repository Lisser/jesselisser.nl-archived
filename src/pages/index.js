import React from "react"
import { Link } from "gatsby"

import "../index.scss";

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container">
      <h1>Hi people</h1>
      <p>My name is Jesse Lisser.</p>
      <p>I like shiny things.</p>
      <Link to="/page-2/">Go to page 2</Link>
    </div>
  </Layout>
)

export default IndexPage
