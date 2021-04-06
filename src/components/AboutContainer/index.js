import React from "react";
import Linkedin from "../../assets/img/LinkedinSoft.png"
import { Container, Row, Col } from 'react-bootstrap';
import "./style.css"


function AboutContainer() {
  return (
    <Container className="about-container" >
      <Row className="row " id="about-row">
        <Col xs={12} md={12} sm={12} id="about-col">
          <h1 id="about-header">About Me</h1>
        </Col>
      </Row>
      <Row className="row " id="Nick-row">
        <Col xs={12} md={12} sm={12} id="nick-col">
          <img alt="Nick Guimarais" src={Linkedin} id="nick-pic" />
        </Col>
      </Row>
      <Row className="row " id="description">
        <Col xs={12} md={12} sm={12} id="description-row">
          <p className="about-content" style={{ fontSize: "12px", }}> My name is Nick Guimarais, and I am a Web Developer who completed the University of California, Los Angeles Coding Bootcamp for Full Stack Web Development! I have also have earned a Bachelor’s Degree in Accounting, as well as a Bachelor’s Degree in Finance from the University of San Diego. My professional experience consists of working in Public Accounting over the last four years doing Auditing and Consulting.</p>
        </Col>
      </Row>
      <Row className="row" id="experience">
        <Col xs={12} md={12} sm={12} id="experience-col">
          <p className="experience-content" style={{ fontSize: "12px" }}>My programming experience includes: JavaScript, HTML, CSS, JQuery, React.js, Bootstrap, APIs, AJAX, Axios, Node.js, Express.js, DOM, MySQL, MongoDB, Mongoose, Sequelize, Heroku, Git, GitHub, Algorithms, Data Structures, Postman, and Visual Studio Code.</p>
        </Col>
      </Row>
    </Container>
  )
}

export default AboutContainer;
