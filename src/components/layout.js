import React from "react"
import Navbar from "./navbar";

const Layout = ({ children }) => (
  <div className="site">
    <Navbar></Navbar>
    <div className="site-content">
      { children }
    </div>
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>Built</strong> by <a href="https://lisser.tech">Jesse Lisser</a>.
        </p>
      </div>
    </footer>
  </div>
)

export default Layout;