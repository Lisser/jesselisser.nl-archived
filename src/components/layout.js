import React from 'react';
import Navbar from './navbar';
import Footer from './footer';

const Layout = ({ children }) => (
  <div className="site">
    <Navbar></Navbar>
    <div className="site-content">{children}</div>
    <Footer></Footer>
  </div>
);

export default Layout;
