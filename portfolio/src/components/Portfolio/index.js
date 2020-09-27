import React from "react";

function PortfolioGrid() {
    return (

        <div class="container">

        <div class="row">
            <div class="col-md-12 col-xs-12 col-sm-12">
                <h1>Portfolio</h1>
            </div>
        </div>


        <div class="row">
            <div class="col-md-6 col-xs-12 col-sm-12">
                <img src="Secure Travel App.jpg" alt="Project 1"/>
                <a href="https://edwardreyes29.github.io/project-1/" target="blank"><p>Secure Travel App</p></a>
            </div>
            <div class="col-md-6 col-xs-12 col-sm-12">
                <img src="password-generator.jpg" alt="Password Generator"/>
                <a href="https://nickgusd.github.io/Password-Generator/" target="blank"><p>Password Generator</p></a>
            </div>
          </div>
        

        <div class="row">
            <div class="col-md-6 col-xs-12 col-sm-12">
                <img src="code-quiz.jpg" alt="Code Quiz"/>
                <a href="https://nickgusd.github.io/Code-Quiz-Repo/" target="blank"><p>Code Quiz</p></a>
            </div>
            <div class="col-md-6 col-xs-12 col-sm-12">
                <img src="./rsz_tinderforrestaurants.jpg" alt="Tinder for Restaurants"/>
                <a href="https://vast-lowlands-43566.herokuapp.com/" target="blank"><p>Tinder for Restaurants</p></a>
            </div>
          </div>
        

      <div class="row">
        <div class="col-md-6 col-xs-12 col-sm-12">
            <img src="weather-dashboard.jpg" alt="Weather Dashboard"/>
            <a href="https://nickgusd.github.io/Weather-Dashboard/"><p>Weather Dashboard</p></a>
        </div>
        <div class="col-md-6 col-xs-12 col-sm-12">
            <img src="code-refactor.jpg" alt="Code Refactor"/>
            <a href="https://nickgusd.github.io/Homework-1/" target="blank"><p>Code Refactor</p></a>
        </div>
      </div>
    </div>

    )
}

export default PortfolioGrid;