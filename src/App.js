import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./layouts/Home";
import Projects from "./layouts/Projects";
import Contact from "./layouts/Contact";

import "./style.scss";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
