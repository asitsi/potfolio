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
        <meta name="description" content="Explore a diverse portfolio showcasing web development and mobile app projects by Your Name. From responsive web designs to feature-rich mobile applications, discover my expertise in front-end, back-end, and full-stack development. Get inspired and let's bring your next project to life together." />        <meta property="og:image" content="potfolio.png" />
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
