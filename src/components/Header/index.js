import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import Logo from "../Logo";

import "./style.scss";

const data = [
  {
    to: "/",
    title: "Home",
  },
  {
    to: "/projects",
    title: "Projects",
  },
  {
    to: "/contact",
    title: "Contact",
  },
];

const MenuItems = () => {
  const menuItems = data.map((item) => {
    const isActive = item.to === window.location.pathname;
    const className = isActive ? "menu-item menu-item-current" : "menu-item";
    return (
      <Link key={item.to} to={item.to} className={className}>
        {item.title}
      </Link>
    );
  });
  return <>{menuItems}</>;
};

const MainNav = () => {
  return (
    <nav className="main-nav hidden-xs hidden-sm ">
      <MenuItems />
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
          <Logo clickable="true" color="dark" size="sm" />
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
