import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import Logo from "../Logo";

import "./style.scss";

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
          <nav className="main-nav hidden-xs hidden-sm ">
            <MenuItem to="/">Home</MenuItem>
            <MenuItem to="/projects">Projects</MenuItem>
            <MenuItem to="/contact">Contact</MenuItem>
          </nav>
          <div
            className={
              (this.state.isToggleOn ? "popup-opened" : "") +
              " header-menu hidden-md hidden-lg hidden-xl"
            }
          >
            <button
              className="button header-button header-button-menu js-popup"
              onClick={this.handleClick}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
            <div className="popup">
              <div className="mobile-menu">
                <MenuItem to="/">Home</MenuItem>
                <MenuItem to="/projects">Projects</MenuItem>
                <MenuItem to="/contact">Contact</MenuItem>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

const MenuItem = (props) => {
  console.log(window.location.pathname);
  console.log(props.to);
  const isActive = props.to === window.location.pathname;
  console.log(isActive);
  return (
    <Link
      to={props.to}
      className={isActive ? "menu-item menu-item-current" : "menu-item"}
    >
      {props.children}
    </Link>
  );
};

export default Header;
