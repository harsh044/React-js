import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    let button;
    if (this.props.mode === 'light') {
      button = <label className="form-check-label" htmlFor="mode">Dark Mode</label>
    } else {
      button = <label className="form-check-label" htmlFor="mode">Light Mode</label>
    }
    return (
      <div>
        <nav className={`navbar navbar-expand-lg navbar-${this.props.mode} text-${this.props.mode === 'light' ? 'dark' : 'light'} bg-${this.props.mode} fixed-top`}>
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              DigitalMedia
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbar"
              aria-controls="navbarContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="bi bi-list"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbar">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/business">
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/entertainment">
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/health">
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/science">
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sports">
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/technology">
                    Technology
                  </Link>
                </li>
                </ul>
              <div className={`form-check form-switch text-${this.props.mode === 'light' ? 'dark' : 'light'}`}>
                <input className="form-check-input" onClick={this.props.toggle} type="checkbox" id="mode" />
                {button}
              </div>

            </div>
          </div>
        </nav>
      </div>
    );
  }
}