import React from "react";
import Nick from "../../assets/img/IMG_7344.JPG"
import Linkedin from "../../assets/img/LinkedinSoft.png"
import { Container, Row, Col } from 'react-bootstrap';
import "./style.css"






function AboutContainer() {
return (
 
<Container className="about-container">
  <Row className="row " id="about-row">
    <Col xs={12} md={12} sm={12} id="about-col">
    <h1 id="about-header">About Me</h1>
      </Col>
  </Row>
  <Row className="row " id="Nick-row">
    <Col xs={12} md={12} sm={12} id="nick-col">
    
    <img alt="Nick Guimarais" src={Linkedin} id="nick-pic"/>
    
    
      </Col>
  </Row>
  <Row className="row " id="description">
    <Col xs={12} md={12} sm={12} id="description-row">
    <p className="about-content">Hello, my name is Nick Guimarais and I am a Web Developer. I have a Bachelor’s Degree in Accounting, and a Bachelor’s Degree in Finance from the University of San Diego. Previously, I worked in Public Accounting over the last four years doing Auditing and Consulting.</p>
      </Col>
  </Row>


  <Row className="row" id="experience">
    <Col xs={12} md={12} sm={12} id="experience-col">
    <p className="experience-content">My programming experience includes JavaScript, HTML, CSS, JQuery, React.js, Bootstrap, APIs, AJAX, Axios, Node.js, Express.js, DOM, MySQL, MongoDB, Mongoose, Sequelize, Heroku, Git, GitHub, Algorithms, Data Structures, Postman, and Visual Studio Code.</p>
      </Col>
  </Row>
</Container>


/* <Col>1 of 3</Col>
    <Col xs={6}>2 of 3 (wider)</Col>
    <Col>3 of 3</Col>


  <div className="container">
  <div className="row row1">
    <div className="col-md-12 col-xs-12 col-sm-12">
      <h1>About Me</h1>
    </div>
  </div> */
/* 
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
</div> */

)
}

export default AboutContainer;
