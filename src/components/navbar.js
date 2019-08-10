import React from "react"
import { Link } from "gatsby";

const Navbar = () => {

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a href="/" className="navbar-item" >
          <h1 className="title is-4">
            Jesse Lisser
          </h1>
        </a>

        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link to="/"  className="navbar-item">
            <span className="icon">
              <i class="fas fa-home"></i>
            </span>
            <span>Home</span>
          </Link>

          <Link to="/recipes"  className="navbar-item">
            Recipes
          </Link>

          <Link to="/toolbox"  className="navbar-item">
            Toolbox
          </Link>

        </div>
      </div>
    </nav>
  )
}

export default Navbar;