import React from "react";

import MyLazyLoadImage from "../MyLazyLoadImage";
import AuthorImage from "../../assets/images/author.jpg";

import "./style.scss";

const Author = () => {
  return (
    <div className="term-author">
      <section className="author">
        <div className="author-image-placeholder u-placeholder">
          <MyLazyLoadImage
            className="author-image u-object-fit ls-is-cached"
            src={AuthorImage}
            alt="Shou-Li Hsu"
            minDelay={300}
          />
        </div>
        <div className="author-wrapper">
          <header className="author-header">
            <h4 className="author-name">Shou-Li Hsu</h4>
          </header>
          <span className="author-meta">Intel CPU Design Engineer </span>
          <div className="author-bio">
            Here are some of the projects I've worked on.
          </div>
        </div>
      </section>
    </div>
  );
};

export default Author;
