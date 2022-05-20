import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

import Home from "./layouts/Home";
import Projects from "./layouts/Projects";
import Tag from "./layouts/Tag";
import Contact from "./layouts/Contact";
import PageNotFound from "./layouts/PageNotFound";

import "./style.scss";

library.add(fab);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/contact" element={<PageNotFound />} />
        <Route exact path="/tag/:tag" element={<Tag />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
