import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import Typist from "react-typist";
class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div class="mainDiv" align="center">
          <link rel="stylesheet" href="home.css" />
          <br /> <br /> <br /> <br /> <br />
          <Typist>
            <p class="bio">
              Hi! My name is Katherine Wong and I am a software engineer in the
              San Francisco Area.
            </p>
          </Typist>
        </div>
      </React.Fragment>
    );
  }
}
export default Home;
