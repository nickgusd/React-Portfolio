
import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

import Card from "../Card/index"

import "./style.css";

import { content } from "./projects";

const projectInfo = content.map((item) => {
  const { projects, deployed, description, github, image } = item;
  return (
    <Row className="first-row">
    {projects.map((project, idx) => {
      return (
      <Col xs={12} md={6} sm={12} className="grid-col">
        <Card description={description[idx]} projects={projects[idx]} github={github[idx]} deployed={deployed[idx]} image={image[idx]}></Card>
      </Col>
      )})}
      </Row>
  )
})

function PortfolioGrid() {
  return (
    <Container className="portfolio-container">
      <Row className="portfolio-header"  >
        <Col xs={12} md={12} sm={12} lg={12} xl={12} id="portfolio-header" >
          <h1 id="portfolio">Nick's Portfolio</h1>
        </Col>
      </Row>
      {projectInfo}
    </Container>
  )
}

export default PortfolioGrid;

