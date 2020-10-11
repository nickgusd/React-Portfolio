import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Bubble from "../../assets/img/rsz_analysis-blackboard-board-bubble-355952.JPG"
import Apple from "../../assets/img/rsz_apple-applications-apps-cell-phone-607812.jpg"
import Quiz from "../../assets/img/rsz_black-flat-screen-computer-monitor-1714208.jpg"
import Tinder from "../../assets/img/rsz_business-code-coding-computer-270360.jpg"
import Laptop from "../../assets/img/rsz_computer-desk-hand-laptop-374631.jpg"
import Ipad from "../../assets/img/rsz_space-grey-ipad-air-with-graph-on-brown-wooden-table-187041.jpg"


import "./style.css"

function PortfolioGrid() {
    return (



<Container  className="portfolio-container">

<Row className="portfolio-header" >
    <Col xs={12} md={6} sm={12}  >
    <h1 id="portfolio">Portfolio</h1>
      </Col>
  </Row>


  <Row className="first-row">
    <Col xs={12} md={6} sm={12} className="grid-col">
    <img src={Bubble} alt="Project 1"/>
    <a href="https://edwardreyes29.github.io/project-1/" target="blank"><p>Secure Travel App</p></a>
      </Col>
      <Col xs={12} md={6} sm={12} className="grid-col">
      <img src={Apple} alt="Password Generator"/>
      <a href="https://nickgusd.github.io/Password-Generator/" target="blank"><p>Password Generator</p></a>
      </Col>

  </Row>

  <Row className="second-row">
    <Col xs={12} md={6} sm={12} className="grid-col" >
    <img src={Quiz} alt="Code Quiz"/>
    <a href="https://nickgusd.github.io/Code-Quiz-Repo/" target="blank"><p>Code Quiz</p></a>
      </Col>
      <Col xs={12} md={6} sm={12} className="grid-col" >
      <img src={Tinder} alt="Tinder for Restaurants"/>
        <a href="https://vast-lowlands-43566.herokuapp.com/" target="blank"><p>Tinder for Restaurants</p></a>

      </Col>
  </Row>


  <Row className="third-row">
    <Col xs={12} md={6} sm={12} className="grid-col">
    <img src={Laptop} alt="Weather Dashboard"/>
    <a href="https://nickgusd.github.io/Weather-Dashboard/"><p>Weather Dashboard</p></a>
    
      </Col>
      <Col xs={12} md={6} sm={12} className="grid-col">
      <img src={Ipad} alt="Code Refactor"/>
      <a href="https://nickgusd.github.io/Homework-1/" target="blank"><p>Code Refactor</p></a>
      </Col>

  </Row>
</Container>









    //     <div className="container">

    //     <div className="row">
    //         <div className="col-md-12 col-xs-12 col-sm-12">
    //             <h1>Portfolio</h1>
    //         </div>
    //     </div>


    //     <div className="row">
    //         <div className="col-md-6 col-xs-12 col-sm-12">
    //             <img src="Secure Travel App.jpg" alt="Project 1"/>
    //             <a href="https://edwardreyes29.github.io/project-1/" target="blank"><p>Secure Travel App</p></a>
    //         </div>
    //         <div className="col-md-6 col-xs-12 col-sm-12">
    //             <img src="password-generator.jpg" alt="Password Generator"/>
    //             <a href="https://nickgusd.github.io/Password-Generator/" target="blank"><p>Password Generator</p></a>
    //         </div>
    //       </div>
        

    //     <div className="row">
    //         <div className="col-md-6 col-xs-12 col-sm-12">
    //             <img src="code-quiz.jpg" alt="Code Quiz"/>
    //             <a href="https://nickgusd.github.io/Code-Quiz-Repo/" target="blank"><p>Code Quiz</p></a>
    //         </div>
    //         <div className="col-md-6 col-xs-12 col-sm-12">
    //             <img src="./rsz_tinderforrestaurants.jpg" alt="Tinder for Restaurants"/>
    //             <a href="https://vast-lowlands-43566.herokuapp.com/" target="blank"><p>Tinder for Restaurants</p></a>
    //         </div>
    //       </div>
        

    //   <div className="row">
    //     <div className="col-md-6 col-xs-12 col-sm-12">
    //         <img src="weather-dashboard.jpg" alt="Weather Dashboard"/>
    //         <a href="https://nickgusd.github.io/Weather-Dashboard/"><p>Weather Dashboard</p></a>
    //     </div>
    //     <div className="col-md-6 col-xs-12 col-sm-12">
    //         <img src="code-refactor.jpg" alt="Code Refactor"/>
    //         <a href="https://nickgusd.github.io/Homework-1/" target="blank"><p>Code Refactor</p></a>
    //     </div>
    //   </div>
    // </div>

    )
}

export default PortfolioGrid;