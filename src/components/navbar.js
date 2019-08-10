import React, { useState } from "react"
import { Link } from "gatsby";

const Navbar = () => {

  const [active, setActive] = useState(false);

  const toggleHamburger = () => setActive(!active);

  const activeClass = active ? 'is-active' : '';

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item" >
          <h1 className="title is-4">
            Jesse Lisser
          </h1>
        </Link>

        <a role="button" onClick={() => toggleHamburger()} className={`navbar-burger burger ${activeClass}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className={`navbar-menu ${activeClass}`}>
        <div className="navbar-start">
          <Link to="/"  className="navbar-item">
            <span className="icon">
              <i class="fas fa-home"></i>
            </span>
            <span>Home</span>
          </Link>

          <Link to="/recipes"  className="navbar-item">
            <span className="icon">
              <i class="fas fa-book"></i>
            </span>
            <span>Recipes</span>
          </Link>

          <Link to="/toolbox"  className="navbar-item">
            <span className="icon">
              <i class="fas fa-tools"></i>
            </span>
            <span>Toolbox</span>
          </Link>

        </div>
      </div>
    </nav>
  )
}

export default Navbar;