import React from "react";
import Nick from "../../assets/img/IMG_7344.JPG"
// import "./style.css"


function AboutContainer() {
return (
  
  <div className="container">
  <div className="row row1">
    <div className="col-md-12 col-xs-12 col-sm-12">
      <h1>About Me</h1>
    </div>
  </div>

  <div className="row row2">
      <div className="col-md-12 col-xs-12 col-sm-12">
        <img alt="Nick Guimarais" src={Nick}/>
        <p>Hello, my name is Nick Guimarais and I am a Web Developer. I have a Bachelor’s Degree in Accounting, and a Bachelor’s Degree in Finance from the University of San Diego. Previously, I worked in Public Accounting over the last four years doing Auditing and Consulting.</p>
      </div>
    </div>
  
    <div className="row row3">
      <div className="col-md-12 col-xs-12 col-sm-12">
        <p>My programming experience includes HTML, CSS, Bootstrap, JavaScript, and JQuery</p>
      </div>
    </div>
</div>

)
}

export default AboutContainer;
