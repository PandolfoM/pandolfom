import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import About from "./components/About";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Work from "./components/Work";

function App() {

  return (
    <div>
      <Nav />
      <Hero />
      <Work />
      <About />
    </div>
  );
}

export default App;
