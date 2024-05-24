import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import aboutContent from "./about.md";
import workContent from "./work.md";
import educationContent from "./education.md";
import skillsContent from "./skills.md";
import projectsContent from "./projects.md";
import "./style.scss";

const HomeContent = () => {
  const [about, setAbout] = useState("");
  const [work, setWork] = useState("");
  const [education, setEducation] = useState("");
  const [skills, setSkills] = useState("");
  const [projects, setProjects] = useState("");

  useEffect(() => {
    setAbout(aboutContent);
    setWork(workContent);
    setEducation(educationContent);
    setSkills(skillsContent);
    setProjects(projectsContent);
  }, []);

  return (
    <div className="site-content">
      <main className="site-main">
        <div className="post-content gh-content kg-canvas">
          <div className="about">
            <ReactMarkdown>{about}</ReactMarkdown>
          </div>
          <div className="work">
            <ReactMarkdown>{work}</ReactMarkdown>
          </div>
          <div className="education">
            <ReactMarkdown>{education}</ReactMarkdown>
          </div>
          <div className="skills">
            <ReactMarkdown>{skills}</ReactMarkdown>
          </div>
          <div className="projects">
            <ReactMarkdown>{projects}</ReactMarkdown>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomeContent;
