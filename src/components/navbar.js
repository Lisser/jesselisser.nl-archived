import React, { useState } from "react"
import { Link } from "gatsby";

const Navbar = () => {

  const [active, setActive] = useState(false);

  const toggleHamburger = () => setActive(!active);

  const activeClass = active ? 'is-active' : '';

  return (
    <nav className="navbar has-shadow is-spaced" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item u-url u-uid p-name">
            <h1 className="title brand is-4">
              Jesse Lisser
            </h1>
          </Link>
          
          {/* eslint-disable-next-line */}
          <a role="button" onClick={() => toggleHamburger()} className={`navbar-burger burger ${activeClass}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
  
        <div className={`navbar-menu ${activeClass}`}>
          <div className="navbar-start">
            <Link to="/" className="navbar-item">
              <span className="icon has-text-primary">
                <i className="fas fa-home"></i>
              </span>
              <span>Home</span>
            </Link>
  
            <Link to="/recipes"  className="navbar-item">
              <span className="icon has-text-book">
                <i className="fas fa-book"></i>
              </span>
              <span>Recipes</span>
            </Link>
  
            <Link to="/toolbox"  className="navbar-item">
              <span className="icon has-text-info">
                <i className="fas fa-tools"></i>
              </span>
              <span>Toolbox</span>
            </Link>
  
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;