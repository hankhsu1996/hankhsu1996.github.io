import React from "react";
import Wave from "../../assets/images/milo-mcdowell-3027-unsplash.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";

import Logo from "../Logo";

import "./style.scss";

const HomeCover = () => {
  return (
    <div className="home-cover container">
      <div className="site-cover u-overlay">
        <LazyLoadImage
          className="cover-image jarallax-img u-object-fit"
          src={Wave}
          alt="Wave"
          width="1920px"
          height="1080px"
          afterLoad={() => {
            document.querySelector(".site-cover").classList.add("initialized");
          }}
        />
        <div className="cover-content">
          <div className="cover-logo">
            <Logo clickable="false" color="light" size="lg" />
          </div>
          <div className="cover-description">
            Shou-Li Hsu's personal website. A place to introduce myself and
            share my thoughts.
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCover;
