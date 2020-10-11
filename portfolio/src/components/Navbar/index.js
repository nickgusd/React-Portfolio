import React from "react";
import { Link } from "react-router-dom";
import "./style.css"
// import { BrowserRouter as Router} from "react-router-dom";
// import "./index.css";


function Navbar() {

    return (
     
      <nav className="navbar navbar-expand-lg navbar-light text-left" id="nav-color">
      <Link className="navbar-brand" to="/React-Portfolio" id="navbar-text">
        Navbar
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
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
          <li className="nav-item">
            <Link id="portfolio-text"
              to="/portfolio"
              className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
            >
             Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link id="contact-text"
              to="/contact"
              className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
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