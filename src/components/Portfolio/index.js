
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Bubble from "../../assets/img/rsz_analysis-blackboard-board-bubble-355952.JPG"
import Apple from "../../assets/img/rsz_apple-applications-apps-cell-phone-607812.jpg"
import Quiz from "../../assets/img/rsz_black-flat-screen-computer-monitor-1714208.jpg"
import Tinder from "../../assets/img/rsz_business-code-coding-computer-270360.jpg"
import Laptop from "../../assets/img/rsz_computer-desk-hand-laptop-374631.jpg"
import Ipad from "../../assets/img/rsz_space-grey-ipad-air-with-graph-on-brown-wooden-table-187041.jpg"
import SimpleModal from "../Modal/index";
import Projects from "./projects";
import "./style.css"

function PortfolioGrid() {


    return (


<Container  className="portfolio-container">

<Row className="portfolio-header"  >
    <Col xs={12} md={6} sm={12} id="portfolio-header" >
    <h1 id="portfolio">Portfolio</h1>
      </Col>
  </Row>


  <Row className="first-row">
    <Col xs={12} md={6} sm={12} className="grid-col">
    <a href="https://edwardreyes29.github.io/project-1/" target="blank"> <img src={Bubble} alt="Project 1" id="project1"/><p className="portfolio-text">Secure Travel App</p></a>
    <SimpleModal  projects={Projects[0].project1} github={Projects[1].github1} deployed={Projects[2].deployed1}/>
      </Col>
      <Col xs={12} md={6} sm={12} className="grid-col">
      <a href="https://nickgusd.github.io/Password-Generator/" target="blank"><img src={Apple} alt="Password Generator" id="project2"/><p className="portfolio-text">Password Generator</p></a>
      <SimpleModal  projects={Projects[0].project2} github={Projects[1].github2} deployed={Projects[2].deployed2}/>
      </Col>
  </Row>

  <Row className="second-row">
    <Col xs={12} md={6} sm={12} className="grid-col" >
    <a href="https://protected-shore-03622.herokuapp.com/" target="blank"><img src={Quiz} alt="Note Taker" id="project3"/><p className="portfolio-text">Note-Taker</p></a>
    <SimpleModal projects={Projects[0].project3} github={Projects[1].github3} deployed={Projects[2].deployed3}/>
      </Col>
      <Col xs={12} md={6} sm={12} className="grid-col" >
        <a href="https://vast-lowlands-43566.herokuapp.com/" target="blank"><img src={Tinder} alt="Tinder for Restaurants" id="project4"/><p className="portfolio-text">Tinder for Restaurants</p></a>
        <SimpleModal projects={Projects[0].project4} github={Projects[1].github4} deployed={Projects[2].deployed4}/>
      </Col>
  </Row>


  <Row className="third-row">
    <Col xs={12} md={6} sm={12} className="grid-col">
    <a href="https://arcane-everglades-49918.herokuapp.com/"> <img src={Laptop} alt="Weather Dashboard" id="project5"/><p className="portfolio-text">Music eXchange</p></a>
    <SimpleModal projects={Projects[0].project5} github={Projects[1].github5} deployed={Projects[2].deployed5}/>
      </Col>
      <Col xs={12} md={6} sm={12} className="grid-col">
      <a href="https://damp-waters-57453.herokuapp.com/" target="blank"><img src={Ipad} alt="Code Refactor" id="project6"/><p className="portfolio-text">Google Book Search</p></a>
      <SimpleModal  projects={Projects[0].project6} github={Projects[1].github6} deployed={Projects[2].deployed6}/>
      </Col>

  </Row>
</Container>


    )
}

export default PortfolioGrid;

