import "./App.css";
import { Home } from "./components/Home";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Languages } from "./components/Languages";
import { Contact } from "./components/Contact";

function App() {
  return (
    <div>
      <Home />
      <Skills />
      <Experience />
      <Projects />
      <Languages />
      <Contact />
    </div>
  );
}

export default App;
