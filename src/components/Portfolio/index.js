
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Bubble from "../../assets/img/rsz_analysis-blackboard-board-bubble-355952.JPG"
import Apple from "../../assets/img/rsz_apple-applications-apps-cell-phone-607812.jpg"
import Quiz from "../../assets/img/rsz_black-flat-screen-computer-monitor-1714208.jpg"
import Tinder from "../../assets/img/rsz_business-code-coding-computer-270360.jpg"
import Laptop from "../../assets/img/rsz_computer-desk-hand-laptop-374631.jpg"
import Ipad from "../../assets/img/rsz_space-grey-ipad-air-with-graph-on-brown-wooden-table-187041.jpg"
import Projects from "./projects";
import "./style.css";
import Card from "../Card/index"


function PortfolioGrid() {
  return (
    <Container className="portfolio-container">
      <Row className="portfolio-header"  >
        <Col xs={12} md={12} sm={12} lg={12} xl={12} id="portfolio-header" >
          <h1 id="portfolio">Nick's Portfolio</h1>
        </Col>
      </Row>

      <Row className="first-row">
        <Col xs={12} md={6} sm={12} className="grid-col">
          <Card description={Projects[3].description7} projects={Projects[0].project7} github={Projects[1].github7} deployed={Projects[2].deployed7} image={Bubble}></Card>
        </Col>
        <Col xs={12} md={6} sm={12} className="grid-col">
          <Card description={Projects[3].description5} projects={Projects[0].project5} github={Projects[1].github5} deployed={Projects[2].deployed5} image={Apple}></Card>
        </Col>
      </Row>

      <Row className="second-row">
        <Col xs={12} md={6} sm={12} className="grid-col" >
          <Card description={Projects[3].description3} projects={Projects[0].project3} github={Projects[1].github3} deployed={Projects[2].deployed3} image={Quiz}></Card>
        </Col>
        <Col xs={12} md={6} sm={12} className="grid-col" >
          <Card description={Projects[3].description4} projects={Projects[0].project4} github={Projects[1].github4} deployed={Projects[2].deployed4} image={Tinder}></Card>
        </Col>
      </Row>

      <Row className="third-row">
        <Col xs={12} md={6} sm={12} className="grid-col">
          <Card description={Projects[3].description2} projects={Projects[0].project2} github={Projects[1].github2} deployed={Projects[2].deployed2} image={Laptop}></Card>
        </Col>
        <Col xs={12} md={6} sm={12} className="grid-col">
          <Card description={Projects[3].description1} projects={Projects[0].project1} github={Projects[1].github1} deployed={Projects[2].deployed1} image={Ipad}></Card>
        </Col>
      </Row>
    </Container>
  )
}

export default PortfolioGrid;

