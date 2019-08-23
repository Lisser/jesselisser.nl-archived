import React, { useState } from "react"
import { Link } from "gatsby";
import { FaHome, FaBook, FaTools } from "react-icons/fa";

const Navbar = () => {

  const [active, setActive] = useState(false);

  const toggleHamburger = () => setActive(!active);

  const activeClass = active ? 'is-active' : '';

  return (
    <header className="header">
      <nav className="navbar is-spaced" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item has-text-white is-size-4 has-text-weight-bold u-url u-uid p-name">
                jesselisser.nl
            </Link>
            <a role="button" onClick={() => toggleHamburger()} className={`navbar-burger burger ${activeClass}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div className={`navbar-menu ${activeClass}`}>
            <div className="navbar-start">
              <Link to="/recipes"  className="navbar-item">
                <span>#recipes</span>
              </Link>
              <Link to="/toolbox"  className="navbar-item">
                <span>#toolbox</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar;