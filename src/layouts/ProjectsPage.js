import React from "react";

import Header from "../components/Header";
import Author from "../components/Author";
import ProjectItem from "../components/ProjectItem";
import Footer from "../components/Footer";

import projects from "../data/projects.json";

const ProjectsPage = () => {
  return (
    <>
      <Header />
      <div className="site-content">
        <div className="content-area">
          <main className="site-main container medium">
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

export default ProjectsPage;
