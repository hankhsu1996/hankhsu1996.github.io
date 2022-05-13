import React from "react";
import { Link } from "react-router-dom";

import "./style.scss";

const Logo = (props) => {
  let fullClassName = `logo logo-${props.color} logo-${props.size}`;
  if (props.clickable === "true") {
    return (
      <Link to={"/"} className={fullClassName}>
        <span className="logo-text">
          <i>
            &lt;SLH<span>/</span>&gt;
          </i>
        </span>
      </Link>
    );
  } else {
    return (
      <div className={fullClassName}>
        <span className="logo-text">
          <i>
            &lt;SLH<span>/</span>&gt;
          </i>
        </span>
      </div>
    );
  }
};

export default Logo;
