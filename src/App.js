import "./App.css";
import Navigation from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Navigation />
      <Hero />
      <About />
    </div>
  );
}

export default App;
