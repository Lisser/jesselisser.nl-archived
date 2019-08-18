import React from "react"

import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram, FaFacebookSquare } from 'react-icons/fa';

const Footer = () => (
  <footer className="footer">
    <div className="content has-text-centered">
      <p>
        <strong>Built</strong> by{' '}
        <a href="https://lisser.tech">Jesse Lisser</a>.
      </p>
      <p className="buttons is-centered">
        <a className="u-email button" href="mailto:jesselisser@gmail.com" aria-label="Email" rel="me">
          <span className="icon">
            <FaEnvelope />
          </span>
        </a>
        <a className="u-url button" href="https://github.com/Lisser" aria-label="Github" rel="me">
          <span className="icon">
            <FaGithub />
          </span>
        </a>
        <a className="u-url button" href="https://www.linkedin.com/in/jesse-lisser-422b0625" aria-label="LinkedIn" rel="me">
          <span className="icon">
             <FaLinkedin />
          </span>
        </a>
        <a className="u-url button" href="https://www.instagram.com/messy_.jesse" aria-label="Instagram" rel="me">
          <span className="icon">
             <FaInstagram />
          </span>
        </a>
        <a className="u-url button" href="https://www.facebook.com/jesse.lisser" aria-label="Facebook" rel="me">
          <span className="icon">
             <FaFacebookSquare />
          </span>
        </a>
      </p>
    </div>
  </footer>
)

export default Footer;