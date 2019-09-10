import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Hero = ({ title, subtitle }) => {

  const data = useStaticQuery(graphql`
    query layout_query {
      placeholderImage: file(relativePath: { eq: "background.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <section id="hero" className="hero background-img is-large">
      <Img style={{position: 'absolute', width: '100%', height: '100%'}} fluid={data.placeholderImage.childImageSharp.fluid} />
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title has-text-white is-size-1 has-text-weight-bold">
            {title}
          </h1>
          <h2 className="subtitle has-text-light">
            {subtitle}
          </h2>
        </div>
      </div>
    </section>
  )
}
export default Hero;