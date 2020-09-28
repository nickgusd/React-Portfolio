import React, { Component } from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PortfolioPage from "./pages/Portfolio";
import Navbar from "./Navbar";

class Portfolio extends Component {
  state = {
    currentPage: "About"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "About") {
      return <About />;
    } else if (this.state.currentPage === "Portfolio") {
      return <PortfolioPage />;
    } else if (this.state.currentPage === "Contact") {
      return <Contact />;
    } else {
      return <About />;
    }
  };

  render() {
    return (
      <div>
        <Navbar
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
      </div>
    );
  }
}

export default Portfolio;
