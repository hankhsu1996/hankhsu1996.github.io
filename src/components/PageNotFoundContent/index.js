import React from "react";

import Logo from "../Logo";
import "./style.scss";

const PageNotFoundContent = () => {
  return (
    <div className="container u-flex1 u-align-vertical">
      <div className="site-cover-404">
        <div className="cover-content">
          <div className="cover-logo">
            <Logo clickable="false" color="dark" size="lg">
              404
            </Logo>
          </div>
          <div className="cover-description">
            <h2>Page Not Found</h2>
            <p>Sorry, the page you are looking for does not exist.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFoundContent;
