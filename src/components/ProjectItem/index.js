import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import MyLazyLoadImage from "../MyLazyLoadImage";

import "./style.scss";

const ProjectItem = (props) => {
  const { title, excerpt, date, tag, img_src, link } = props.data;

  return (
    <article className={"post tag-technology"}>
      <div className="post-media js-play">
        <div className="u-placeholder square">
          <MyLazyLoadImage
            className="post-image u-object-fit lazyautosizes ls-is-cached"
            src={img_src}
            alt={title}
            minDelay={50}
          />
        </div>
      </div>
      <div className="post-wrapper">
        <header className="post-header">
          <h2 className="post-title">
            <Link className="post-title-link" to={link}>
              {title}
            </Link>
          </h2>
          <div className="post-meta">
            <span className="post-meta-item post-meta-date">
              <time dateTime={date}>
                {new Date(date).toLocaleString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </time>
            </span>
            <span className="post-meta-item post-meta-tags">
              <Link
                className="post-tag post-tag-technology"
                to={`/tag/${tag.toLowerCase()}`}
                title={tag}
              >
                {tag}
              </Link>
            </span>
          </div>
        </header>
        <div className="post-excerpt">{excerpt}</div>
        <footer className="post-footer">
          <Link className="button-text post-footer-more" to={link}>
            <FontAwesomeIcon
              icon={faChevronRight}
              className="icon icon-chevron-right"
            />
            Read more NYI
          </Link>
        </footer>
      </div>
    </article>
  );
};

export default ProjectItem;
