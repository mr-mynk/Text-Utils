import React from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";

export default function Navbar(
  props,
  option1 = "EnterSomevalue",
  option3 = "EnterSomeValue"
) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.theme} bg-${props.theme}`}
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/home"
                >
                  {props.option1}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.option2}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  {props.option3}
                </Link>
              </li>
            </ul>
            <div className="form-check form-switch">
              {/* <input className="form-check-input" type="checkbox" onClick={props.toggleTheme}/> */}
              <button
                type="button"
                className="btn btn-primary mx-5"
                onClick={props.toggleTheme}
              >
                {props.btnText}
              </button>
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              ></label>
            </div>
            
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

// Navbar.propTypes = {
//   title: PropTypes.string.isRequired,
//   option1: PropTypes.string,
//   option2: PropTypes.string,
//   option3: PropTypes.string,
// };

// Navbar.defaultProps = {
//     option1: 'Home',
//     option3:10
// }
