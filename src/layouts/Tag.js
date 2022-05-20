import React from "react";
import { useParams } from "react-router-dom";

import Header from "../components/Header";
import ProjectItem from "../components/ProjectItem";
import Footer from "../components/Footer";

import projects from "../data/projects.json";

const Tag = () => {
  const params = useParams();
  const _projects = projects.filter(
    (proj) => proj.tag.toLowerCase() === params.tag
  );
  const termName = `Tag: ${params.tag}`;
  const termDescription =
    _projects.length === 0
      ? `There are no projects with the tag ${params.tag}.`
      : `All projects tagged with ${params.tag}.`;

  return (
    <>
      <Header />
      <div className="site-content">
        <div className="content-area">
          <main className="site-main container medium">
            <section className="term">
              <h1 className="term-name">{termName}</h1>
              <div className="term-description">{termDescription}</div>
            </section>
            <div className="post-feed">
              {_projects
                .sort((a, b) => {
                  return new Date(b.date) - new Date(a.date);
                })
                .map((proj) => {
                  return <ProjectItem data={proj} key={proj.title} />;
                })}
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Tag;
