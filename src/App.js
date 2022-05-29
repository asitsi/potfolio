import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/Aboutus/About";
import Projects from "./components/Projects/Project";
import Cartificate from "./components/Cartificats/Cartifates";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Cartificate />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
