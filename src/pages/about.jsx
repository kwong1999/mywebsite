import React, { Component } from "react";
import "./about.css";
import Popup from "reactjs-popup";

class About extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div class="mainDiv">
          <link rel="stylesheet" href="about.css" />
          <br /> <br />
          <h5>SCROLL SIDEWAYS AND CLICK TO LEARN MORE</h5>
          <div class="scrollmenu" align="center">
            <Popup
              trigger={
                <button className="button">
                  {" "}
                  <img class="img-circle hacksc" src="hacksc.jpg" />{" "}
                </button>
              }
              modal
            >
              {close => (
                <div>
                  <div className="content">
                    <img class="hackfam" src="hackfam.jpg" />
                    <br />
                    <pre>
                      HackSC is USC's premiere hackathon organization. We create
                      hackathons of 800+ of the top computer science students
                      from around the nation. As the Lead Director of Hacker
                      Experience, I lead the creativity team of the hackathon.
                      We work to ideate the themes, the workshops, the guest
                      speakers, anything to create an innovative space for the
                      hackers. This year, we are going where no hackathon has
                      gone before, bringing in non-profit companies to inspire
                      hackers to create for social good:{" "}
                      <a href="https://hacksc.com">HackSC</a>
                    </pre>
                  </div>
                  <button
                    className="closeButton"
                    onClick={() => {
                      console.log("modal closed ");
                      close();
                    }}
                  >
                    <img class="closeButtonImage" src="close.png" />
                  </button>
                </div>
              )}
            </Popup>
            <Popup
              trigger={
                <button className="button">
                  {" "}
                  <img class="img-circle hack" src="hackg.jpg" />{" "}
                </button>
              }
              modal
            >
              {close => (
                <div>
                  <div className="content">
                    <img class="hackfam" src="hacklikeagirl.jpg" />
                    <br />
                    <pre>
                      In high school, I encountered gender discrimination in
                      technology from my peers and sometimes my superiors.
                      Seeing this, I decided to run my own all-female hackathon
                      to inspire female students in the East Bay Area to pursue
                      technology. I taught a C# workshop and led a discussion on
                      the bias in the technology world. I also brought in the
                      WikiHow CEO as a guest speaker. In the end, we were able
                      to inspire 100 women and give them exposure to technology:
                      <a href="https://hacklikeagirl.weebly.com">
                        HackLikeAGirl
                      </a>
                    </pre>
                  </div>
                  <button
                    className="closeButton"
                    onClick={() => {
                      console.log("modal closed ");
                      close();
                    }}
                  >
                    <img class="closeButtonImage" src="close.png" />
                  </button>
                </div>
              )}
            </Popup>
            <Popup
              trigger={
                <button className="button">
                  {" "}
                  <img class="img-circle usc" src="USC-Logo.jpg" />{" "}
                </button>
              }
              modal
            >
              {close => (
                <div>
                  <div className="content">
                    <img class="hackfam" src="uscbanner.jpg" />
                    <br />
                    <pre>
                      I am currently a sophomore at USC, studying computer
                      science. I am a Presidential Scholar, Edison Company
                      Scholar, and a Viterbi Scholar for my academic success and
                      leadership in the community. On campus, I am a course
                      producer (undergraduate TA) for the CSCI 103 class, an
                      introduction to C++. I really enjoy USC because of its
                      passionate, driven students and interdisciplinary
                      collaboration; I am able to work with not only computer
                      science students but also artists, business students, and
                      athletes.
                    </pre>
                  </div>
                  <button
                    className="closeButton"
                    onClick={() => {
                      console.log("modal closed ");
                      close();
                    }}
                  >
                    <img class="closeButtonImage" src="close.png" />
                  </button>
                </div>
              )}
            </Popup>
            <Popup
              trigger={
                <button className="button">
                  {" "}
                  <img class="img-circle hawaii" src="hawaii.jpg" />{" "}
                </button>
              }
              modal
            >
              {close => (
                <div>
                  <div className="content">
                    <img class="hackfam" src="hikecollage.jpg" />
                    <br />
                    <pre>
                      Whenever I get the chance, I love to hike and explore
                      nature. Some of my favorite hikes include the Grouse Grind
                      (Vancouver, CA), Olympic National Park (WA), and Koko Head
                      (HI).
                    </pre>
                  </div>
                  <button
                    className="closeButton"
                    onClick={() => {
                      console.log("modal closed ");
                      close();
                    }}
                  >
                    <img class="closeButtonImage" src="close.png" />
                  </button>
                </div>
              )}
            </Popup>

            <Popup
              trigger={
                <button className="button">
                  {" "}
                  <img class="img-circle food" src="food.jpg" />{" "}
                </button>
              }
              modal
            >
              {close => (
                <div>
                  <div className="content">
                    <img class="hackfam" src="foodcollage.jpg" />
                    <br />
                    <pre>
                      FOODIE! I love to explore new cities' foods with friends
                      and discover different types of food. I have a food social
                      media account if you want to check out some good eats:
                      <a href="https://www.instagram.com/katie_eats_food_sometimes/">
                        foodieaccount
                      </a>
                    </pre>
                  </div>
                  <button
                    className="closeButton"
                    onClick={() => {
                      console.log("modal closed ");
                      close();
                    }}
                  >
                    <img class="closeButtonImage" src="close.png" />
                  </button>
                </div>
              )}
            </Popup>

            <Popup
              trigger={
                <button className="button">
                  {" "}
                  <img class="img-circle concert" src="concert.jpg" />{" "}
                </button>
              }
              modal
            >
              {close => (
                <div>
                  <div className="content">
                    <img class="hackfam" src="mymusic.jpg" />
                    <br />
                    <pre>
                      One of my favorite things to do is to go to indie rock
                      concerts. I love finding smaller indie bands' concerts in
                      San Francisco. Those small bands definitely had an
                      influence on my taste in music. Now, I love listenting to
                      and cultivating my playlists on Spotify:{" "}
                      <a href="https://open.spotify.com/user/katie_wong?si=rKgJIg8gSYGhD5mHeIMttQ">
                        {" "}
                        Spotify{" "}
                      </a>
                    </pre>
                  </div>
                  <button
                    className="closeButton"
                    onClick={() => {
                      console.log("modal closed ");
                      close();
                    }}
                  >
                    <img class="closeButtonImage" src="close.png" />
                  </button>
                </div>
              )}
            </Popup>

            <Popup
              trigger={
                <button className="button">
                  {" "}
                  <img class="img-circle movie" src="movie.jpg" />{" "}
                </button>
              }
              modal
            >
              {close => (
                <div>
                  <div className="content">
                    <img class="hackfam" src="mymusic.jpg" />
                    <br />
                    <pre>
                      As a student at USC where there is an excellent cinema
                      school, I have had the opportunity to take film classes as
                      well as become exposed to all different types of film. My
                      favorite movie is Moonrise Kingdom! Contact me for movie
                      recommendations!
                    </pre>
                  </div>
                  <button
                    className="closeButton"
                    onClick={() => {
                      console.log("modal closed ");
                      close();
                    }}
                  >
                    <img class="closeButtonImage" src="close.png" />
                  </button>
                </div>
              )}
            </Popup>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default About;
