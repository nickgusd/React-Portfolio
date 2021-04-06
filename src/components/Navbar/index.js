import React from "react";
import { Link } from "react-router-dom";
import { useState } from 'react'
import "./style.css"

const Navbar = (props) => {

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed)
  };

  return (

    <nav className="navbar navbar-expand-lg navbar-light text-left" id="nav-color">
      <Link className="navbar-brand" to="/React-Portfolio" id="navbar-text">
        Nick Guimarais
      </Link>
      <button className="custom-toggler navbar-toggler" style={{ background: "white" }} type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
        <span className="navbar-toggler-icon"></span>
      </button>
      
      <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} >
        <ul className="navbar-nav">
          <li className="nav-item" style={`${isNavCollapsed}` ? { width: "30%", display: "block", margin: "0 auto" } : ""}>
            <Link id="about-text"
              to="/React-Portfolio"
              className={
                window.location.pathname === "/React-Portfolio" || window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About
            </Link>
          </li>
          <li className="nav-item" style={`${isNavCollapsed}` ? { width: "30%", display: "block", margin: "0 auto" } : ""}>
            <Link id="portfolio-text"
              to="/React-Portfolio/portfolio"
              className={window.location.pathname === "/React-Portfolio/portfolio" ? "nav-link active" : "nav-link"}
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item" style={`${isNavCollapsed}` ? { width: "30%", display: "block", margin: "0 auto" } : ""}>
            <Link id="contact-text"
              to="/React-Portfolio/contact"
              className={window.location.pathname === "/React-Portfolio/contact" ? "nav-link active" : "nav-link"}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;