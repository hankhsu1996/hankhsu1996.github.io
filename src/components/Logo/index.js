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

  const _disableMobilePress = (e) => {
    e.preventDefault();
    return false;
  };

  if (props.clickable)
    return (
      <Link
        to={"/"}
        className={fullClassName}
        onTouchStart={_disableMobilePress}
        onContextMenu={_disableMobilePress}
      >
        {logoText}
      </Link>
    );
  else return <div className={fullClassName}>{logoText}</div>;
};

export default Logo;
