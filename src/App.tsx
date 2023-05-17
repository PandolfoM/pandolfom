import { Component } from "solid-js";

import styles from "./App.module.css";
import Hero from "./components/Hero";
import CursorTrail from "./components/CursorTrail";

const App: Component = () => {
  return (
    <div>
      <CursorTrail />
      <Hero />
    </div>
  );
};

export default App;
