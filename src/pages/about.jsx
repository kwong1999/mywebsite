import React, { Component } from "react";
import "./about.css";
class About extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div class="mainDiv">
          <link rel="stylesheet" href="about.css" />
          <div class="container">
            <div class="row">
              <div class="col-sm-8 bio">
                <br />I am a sophomore studying computer science at USC!
              </div>
              <div class="col-sm-4">
                <a href="https://viterbischool.usc.edu">
                  <img class="img" src="USC-Logo.jpg" />{" "}
                </a>
              </div>
            </div>
            <br />
            <div class="row">
              <div class="col-sm-8 bio">
                <br />I am the Lead Director of Hacker Experience at HackSC!
              </div>
              <div class="col-sm-4">
                <a href="https://hacksc.com">
                  <img class="img" src="hacksc.jpg" />{" "}
                </a>
              </div>
            </div>
            <br />
            <br />
            <br />
            <div class="row">
              <div class="col-sm-8 bio">
                <br /> I created my own all-female hackathon, HackLikeAGirl!
              </div>
              <div class="col-sm-4">
                <a href="https://hacklikeagirl.weebly.com">
                  <img class="img" src="hacklikeagirl.jpg" />{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default About;
