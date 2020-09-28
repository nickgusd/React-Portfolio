import React from "react";
// import Portfolio from "./components/PortfolioContainer";
import Navbar from "./components/Navbar/index";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/pages/About";
import PortfolioPage from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer/index";
import "./assets/css/contact.css"
import "./assets/css/index.css"
import "./assets/css/portfolio.css"

// const App = () => <Portfolio />;
function App() {
    return (
        <Router>
        <Navbar />
            <Route exact path="/" component={About} />
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={PortfolioPage} />
            <Route exact path="/contact" component={Contact} />
          <Footer />
      </Router>
    );
  }
export default App;
