import React from "react";
import { Link, useLocation } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import Logo from "../Logo";

import "./style.scss";

// The width is the placeholder for the width of the desktop menu.
// It's the width when the item is of font size 14px and font weight 500.
const data = [
  {
    to: "/",
    title: "Home",
    width: 38.55,
  },
  {
    to: "/projects",
    title: "Projects",
    width: 53.45,
  },
  {
    to: "/contact",
    title: "Contact",
    width: 51.1,
  },
];

const MenuItems = (props) => {
  const menuItems = data.map((item) => {
    const isActive = item.to === window.location.pathname;
    const className = isActive ? "menu-item menu-item-current" : "menu-item";
    return (
      <Link
        key={item.to}
        to={item.to}
        className={className}
        style={
          props.fixWidth
            ? {
                width: item.width + 1, // Avoid overflow
              }
            : {}
        }
      >
        {item.title}
      </Link>
    );
  });
  return <>{menuItems}</>;
};

const MainNav = () => {
  return (
    <nav className="main-nav hidden-xs hidden-sm ">
      <MenuItems fixWidth />
    </nav>
  );
};

const MobileMenu = (props) => {
  const className = props.isToggleOn
    ? "popup-opened header-menu hidden-md hidden-lg hidden-xl"
    : "header-menu hidden-md hidden-lg hidden-xl";

  return (
    <div className={className}>
      <button
        className="button header-button header-button-menu js-popup"
        onClick={props.handleClick}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div className="popup">
        <div className="mobile-menu">
          <MenuItems />
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  const [isToggleOn, setToggleOn] = React.useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setToggleOn(!isToggleOn);
  };

  const closeMenu = () => {
    setToggleOn(false);
  };

  React.useEffect(() => {
    setToggleOn(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  React.useEffect(() => {
    const handleClick = (event) => {
      if (event.target.closest(".header-button")) {
        toggleMenu();
      } else if (!event.target.closest(".popup")) {
        closeMenu();
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });

  return (
    <header className="site-header container">
      <div className="header-left">
        <Logo clickable color="dark" size="sm">
          SLH
        </Logo>
      </div>
      <div className="header-right">
        <MainNav />
        <MobileMenu isToggleOn={isToggleOn} />
      </div>
    </header>
  );
};

export default Header;
