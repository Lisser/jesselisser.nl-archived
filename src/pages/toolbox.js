import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero";

const ToolboxPage = () => (
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
      <h2 className="title is-2">Learning rust:</h2>
      <ul>
        <li><a href="https://www.youtube.com/watch?v=s19G6n0UjsM">YouTube Demo: Rust at speed — building a fast concurrent database</a></li>
        <li><a href="https://doc.rust-lang.org/book/ch02-00-guessing-game-tutorial.html">Rust tutorial: Guessing game</a></li>
        <li><a href="https://github.com/cis198-2016s/homework/tree/master/hw00">University of Pennsylvania: Rust programming course</a></li>
        <li><a href="https://github.com/ctjhoa/rust-learning">Rust learning: A bunch of links to blog posts, articles, videos, etc for learning Rust</a></li>
        <li><a href="https://github.com/brson/rust-anthology/blob/master/master-list.md">Rust anthology: This is a collection of substantial blog posts about Rust.</a></li>
        <li><a href="https://www.oreilly.com/library/view/programming-rust/9781491927274/">Programming rust e-book</a></li>
      </ul>
    </section>
  </Layout>
)

export default ToolboxPage
