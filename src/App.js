import "./App.css";
import Navigation from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Scroll from "./components/Scroll";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Navigation />
      <Hero />
      <About />
      <Work />
      <Scroll />
    </div>
  );
}

export default App;
