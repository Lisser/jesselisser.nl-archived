import React from "react"

const Footer = () => (
  <footer className="footer">
    <div className="content has-text-centered">
      <p>
        <strong>Built</strong> by{' '}
        <a href="https://lisser.tech">Jesse Lisser</a>.
      </p>
      <p class="buttons is-centered">
        <a class="u-email button" href="mailto:jesselisser@gmail.com" aria-label="Email" rel="me">
          <span className="icon">
            <i class="fas fa-envelope"></i>
          </span>
        </a>
        <a class="u-url button" href="https://github.com/Lisser" aria-label="Github" rel="me">
          <span className="icon">
            <i class="fab fa-github"></i>
          </span>
        </a>
        <a class="u-url button" href="https://www.linkedin.com/in/jesse-lisser-422b0625" aria-label="LinkedIn" rel="me">
          <span className="icon">
            <i class="fab fa-linkedin"></i>
          </span>
        </a>
        <a class="u-url button" href="https://www.instagram.com/messy_.jesse" aria-label="Instagram" rel="me">
          <span className="icon">
            <i class="fab fa-instagram"></i>
          </span>
        </a>
        <a class="u-url button" href="https://www.facebook.com/jesse.lisser" aria-label="Facebook" rel="me">
          <span className="icon">
            <i class="fab fa-facebook-square"></i>
          </span>
        </a>
      </p>
    </div>
  </footer>
)

export default Footer;