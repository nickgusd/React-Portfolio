import React from "react";
import { Link } from "react-router-dom";
// import { BrowserRouter as Router} from "react-router-dom";
// import "./index.css";


function Navbar() {

    return (
     
      <nav className="navbar navbar-expand-lg navbar-light text-left" >
      <Link className="navbar-brand" to="/">
        Navbar
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/portfolio"
              className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
            >
             Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>

   


      //   <nav className="navbar navbar-expand-lg navbar-light bg-light">
      //   <a className="navbar-brand" href="#">Navbar</a>
      //   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      //     <span className="navbar-toggler-icon"></span>
      //   </button>
      //   <div className="collapse navbar-collapse" id="navbarNav">
      //     <ul className="navbar-nav">
      //       <li className="nav-item active">
      //         <a className="nav-link" href="index.html">About <span className="sr-only">(current)</span></a>
      //       </li>
      //       <li className="nav-item">
      //         <a className="nav-link" href="portfolio.html">Portfolio</a>
      //       </li>
      //       <li className="nav-item">
      //         <a className="nav-link" href="contact.html">Contact</a>
      //       </li>
      //     </ul>
      //   </div>
      // </nav>

    )
}

export default Navbar;