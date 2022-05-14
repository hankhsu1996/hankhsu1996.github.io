import React from "react";

import "./style.scss";

const PageNotFound = () => {
  return (
    <div className="site-content">
      <div className="content-area">
        <main className="site-main">
          <article className="post no-image page single">
            <header className="post-header container medium">
              <h1 className="post-title">OPPS! PAGE NOT FOUND</h1>
            </header>
            <div className="post-content gh-content kg-canvas">
              <p>
                Sorry, the page you’re looking for doesn’t exist. Maybe the
                author doesn’t want to implement this page. Try again later.
              </p>
            </div>
          </article>
        </main>
      </div>
    </div>
  );
};

export default PageNotFound;
