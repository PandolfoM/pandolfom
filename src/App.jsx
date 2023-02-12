import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./utils/store";

import Home from "./pages/Home";
import Contact from "./pages/Contact";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <div>
          <Nav />
          <Routes>
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/" element={<Home />} />
          </Routes>
          <Footer />
        </div>
      </Provider>
    </Router>
  );
}

export default App;
