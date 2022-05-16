import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import Logo from "../Logo";

import "./style.scss";

// The width is the placeholder for the width of the desktop menu.
// It's the width when the item is of font size TODO:size and font weight 500.
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
                width: item.width,
              }
            : {}
        }
        // style={{ width: `${item.width}px` }}
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

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    return (
      <header className="site-header container">
        <div className="header-left">
          <Logo clickable color="dark" size="sm">
            SLH
          </Logo>
        </div>
        <div className="header-right">
          <MainNav />
          <MobileMenu
            isToggleOn={this.state.isToggleOn}
            handleClick={this.handleClick}
          />
        </div>
      </header>
    );
  }
}

export default Header;
