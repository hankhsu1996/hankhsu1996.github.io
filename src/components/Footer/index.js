import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import subscribes from "../../data/subscribes.json";

import "./style.scss";

const Subscribe = () => {
  const subscribeItems = subscribes.map((sub) => {
    return (
      <a
        key={sub.name}
        href={sub.href}
        target="_blank"
        className="subscribe-link"
      >
        <FontAwesomeIcon
          icon={["fa-brands", sub.icon]}
          className={`icon icon-${sub.name}`}
          style={{
            fontSize: sub.iconSize,
            paddingBottom: sub.iconPaddingBottom,
            color: sub.iconColor,
          }}
        />
        <span
          className="subscribe-text"
          style={{
            marginLeft: sub.iconTextSpacing,
          }}
        >
          {sub.title}
        </span>
      </a>
    );
  });

  return <div className="subscribe">{subscribeItems}</div>;
};

const Copyright = () => {
  return (
    <div className="copyright">
      <p>Shou-Li Hsu © 2022</p>
      <p>
        Theme by{" "}
        <a href="https://github.com/TryGhost/Wave" target="_blank">
          Ghost
        </a>
      </p>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="site-footer container medium">
      <Subscribe />
      <Copyright />
    </footer>
  );
};

export default Footer;
