import React from "react";
import { Link } from "react-router-dom";

import "./style.scss";

const Logo = (props) => {
  const fullClassName = `logo logo-${props.color} logo-${props.size}`;

  const logoText = (
    <span className="logo-text">
      <i>
        &lt;{props.children}
        <span>/</span>&gt;
      </i>
    </span>
  );

  if (props.clickable === "true")
    return (
      <Link to={"/"} className={fullClassName}>
        {logoText}
      </Link>
    );
  else return <div className={fullClassName}>{logoText}</div>;
};

export default Logo;
