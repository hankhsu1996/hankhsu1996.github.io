import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

import HomePage from "./layouts/HomePage";
import ProjectsPage from "./layouts/ProjectsPage";
import TagPage from "./layouts/TagPage";
import ContactPage from "./layouts/ContactPage";
import NotFoundPage from "./layouts/NotFoundPage";

import "./style.scss";

library.add(fab, far);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/projects" element={<ProjectsPage />} />
        <Route exact path="/contact" element={<ContactPage />} />
        <Route exact path="/tag/:tag" element={<TagPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
