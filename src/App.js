import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/Aboutus/About";
import Projects from "./components/Projects/Project";
import Cartificate from "./components/Cartificats/Cartifates";
import Contact from "./components/Contact/Contact";
import { Helmet } from 'react-helmet';

function App() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Web Development & Mobile Developer Portfolio | Asit singh</title>
        <meta property="og:title" content="Potfolio: Web Development & Mobile Developer Portfolio | Projects" />
        <meta property="og:description" content="Explore our collection of hash and RGB colors. Simply click on any color to copy its code instantly. Discover the perfect color for your projects with ease. Start creating stunning designs now! | RGB color codes, HTML color picker, Color conversion" />
        <meta property="og:image" content="potfolio.png" />
      </Helmet>
      <div className="App">
        <Home />
        <About />
        <Cartificate />
        <Projects />
        <Contact />
      </div>
    </React.Fragment>
  );
}

export default App;
