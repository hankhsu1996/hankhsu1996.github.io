import React from "react";
import { Link } from "react-router-dom";

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
            <Link to="/" className="menu-item menu-item-current">
              Home
            </Link>
            <Link to="projects" className="menu-item">
              Projects
            </Link>
            <Link to="contact" className="menu-item">
              Contact
            </Link>
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
                <Link to="/" className="menu-item menu-item-current">
                  Home
                </Link>
                <Link to="projects" className="menu-item">
                  Projects
                </Link>
                <Link to="contact" className="menu-item">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

// const Header = () => {
//   popup(e) {
//     e.preventDefault();
//     console.log("popup");
//   };

// };

export default Header;
