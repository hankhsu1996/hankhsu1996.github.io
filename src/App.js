import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./layouts/Home";
import Projects from "./layouts/Projects";
import Contact from "./layouts/Contact";
import PageNotFound from "./layouts/PageNotFound";

import "./style.scss";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<PageNotFound />} />
        <Route path="/contact" element={<PageNotFound />} />
        <Route path="/404" element={<PageNotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
