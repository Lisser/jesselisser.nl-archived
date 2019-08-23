import React from "react"

const Hero = ({ title, subtitle }) => (
  <section className="hero background-img is-large" style={{backgroundImage: `url('')`}}>
    <div className="hero-body">
      <div className="container has-text-centered">
        <h1 className="title has-text-white is-size-1 has-text-weight-bold">
          {title}
        </h1>
        <h2 class="subtitle has-text-light">
          {subtitle}
        </h2>
      </div>
    </div>
  </section>
)

export default Hero;