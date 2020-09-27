import React from "react";
import "../../../public/index.css"

function Footer() {
    return (
        <footer>
        <a href="https://www.linkedin.com/in/nick-guimarais-5b1b6249/" target="blank">
          <i className="fa fa-linkedin-square" id="linked-in" aria-hidden="true"></i>
        </a>
        <a href="https://github.com/nickgusd" target="blank">
          <i className="fa fa-github" id="github" aria-hidden="true"></i>
        </a>

        <a href="https://www.facebook.com/nick.guimarais/" target="blank">
          <i className="fa fa-facebook-official" id ="facebook" aria-hidden="true"></i>
        </a>
      </footer>

    )
}

export default Footer;