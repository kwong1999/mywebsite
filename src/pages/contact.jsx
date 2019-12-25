import React, { Component } from "react";
import "./contact.css";
import Typist from "react-typist";
import ReactContactForm from "react-mail-form";
class Contact extends Component {
  state = {};
  sendEmail() {
    const hash = "subject=some_text&body=some_text";
    const example =
      "mailto:wongkh@usc.edu?subject=" +
      document.getElementById("subject").value +
      "&body=" +
      document.getElementById("body").value;
    window.location.href = example;
  }
  render() {
    return (
      <React.Fragment>
        <div class="mainDiv">
          <link rel="stylesheet" href="contact.css" />
          <div class="email">
            <p>
              Subject
              <br />
              <input name="subject" id="subject" />
            </p>
            <br />
            <p>
              Body
              <br />
              <input name="body" id="body" />
            </p>
            <button
              type="button"
              class="btn btn-secondary"
              onClick={this.sendEmail}
              id="sendEmailButton"
            >
              {" "}
              Send Email
            </button>
          </div>
          <Typist>
            <h5>Email me @ wongkh@usc.edu ^</h5>
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
