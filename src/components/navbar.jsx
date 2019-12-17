import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <link rel="stylesheet" href="navbar.css" />
        <nav class="navbar navbar-default topNav">
          <div class="container-fluid">
            <ul class="nav navbar-nav">
              <li>
                <Link to="/">Katherine Wong</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/work">Work</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}
export default Navbar;
