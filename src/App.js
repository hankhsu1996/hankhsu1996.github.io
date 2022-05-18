import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./layouts/Home";
import Projects from "./layouts/Projects";
import Contact from "./layouts/Contact";
import PageNotFound from "./layouts/PageNotFound";

import "./style.scss";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/contact" element={<PageNotFound />} />
        <Route exact path="/tag/:tag" element={<Projects />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
