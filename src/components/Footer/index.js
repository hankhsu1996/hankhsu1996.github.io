import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="site-footer container medium">
      <div className="subscribe">
        <a
          href="https://github.com/hankhsu1996/"
          target="_blank"
          className="subscribe-link"
        >
          <FontAwesomeIcon icon={faGithub} className="icon icon-github" />
          <span className="subscribe-text">GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/hankhsu1996/"
          target="_blank"
          className="subscribe-link"
        >
          <FontAwesomeIcon icon={faLinkedin} className="icon icon-linkedin" />
          <span className="subscribe-text">LinkedIn</span>
        </a>
        <a
          href="mailto:hankhsu@umich.edu"
          target="_blank"
          className="subscribe-link"
        >
          <FontAwesomeIcon icon={faAt} className="icon icon-email" />
          <span className="subscribe-text">Email</span>
        </a>
      </div>
      <div className="copyright">
        <p>Shou-Li Hsu © 2022</p>
        <p>
          Theme by{" "}
          <a href="https://github.com/TryGhost/Wave" target="_blank">
            Ghost
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
