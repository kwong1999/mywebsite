import React, { Component } from "react";
import "./contact.css";
import Typist from "react-typist";
class Contact extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div class="mainDiv">
          <link rel="stylesheet" href="contact.css" />
          <Typist>
            <h5>Email me @ wongkh@usc.edu</h5>
          </Typist>
          <a href="https://www.linkedin.com/in/katherine-wong-04938216b/">
            <img class="img" src="linkedin.png" />{" "}
          </a>
          <a href="https://github.com/kwong1999">
            <img class="img" src="github.png" />{" "}
          </a>
        </div>
      </React.Fragment>
    );
  }
}
export default Contact;
