import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import "./style.scss";

const Subscribe = () => {
  const data = [
    {
      name: "github",
      icon: faGithub,
      href: "https://github.com/hankhsu1996/",
      title: "Github",
    },
    {
      name: "linkedin",
      icon: faLinkedin,
      href: "https://www.linkedin.com/in/hankhsu1996/",
      title: "LinkedIn",
    },
    {
      name: "email",
      icon: faAt,
      href: "mailto:hankhsu@umich.edu",
      title: "Email",
    },
  ];

  const subscribeItems = data.map((item) => {
    return (
      <a
        key={item.name}
        href={item.href}
        target="_blank"
        className="subscribe-link"
      >
        <FontAwesomeIcon
          icon={item.icon}
          className={`icon icon-${item.name}`}
        />
        <span className="subscribe-text">{item.title}</span>
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
