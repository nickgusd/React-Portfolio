import React from "react";
import Navbar from "./components/Navbar/index";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/pages/About";
import PortfolioPage from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer/index";

function App() {
    return (
        <Router>
        <Navbar />
            <Route exact path="/React-Portfolio" component={About} />
            <Route exact path="/React-Portfolio/about" component={About} />
            <Route exact path="/React-Portfolio/portfolio" component={PortfolioPage} />
            <Route exact path="/React-Portfolio/contact" component={Contact} />
          <Footer />
      </Router>
    );
  }
export default App;
