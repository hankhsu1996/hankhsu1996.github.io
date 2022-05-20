import React from "react";

import Header from "../components/Header";
import Author from "../components/Author";
import ProjectItem from "../components/ProjectItem";
import Footer from "../components/Footer";

import projects from "../data/projects.json";

const Projects = () => {
  let termName, termDescription;

  termName = "Projects";
  termDescription = "Here are some of the projects I've worked on.";

  return (
    <>
      <Header />
      <div className="site-content">
        <div className="content-area">
          <main className="site-main container medium">
            {/* <section className="term">
              <h1 className="term-name">{termName}</h1>
              <div className="term-description">{termDescription}</div>
            </section> */}
            <Author />
            <div className="post-feed">
              {projects
                .sort((a, b) => {
                  return new Date(b.date) - new Date(a.date);
                })
                .map((post) => {
                  return <ProjectItem data={post} key={post.title} />;
                })}
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Projects;
