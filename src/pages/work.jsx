import React, { Component } from "react";
import "./work.css";
import att from "./attlogo.png";
import microsoft from "./microsoft.jpg";
import med from "./med.png";
import find from "./find.png";
import inn from "./in.png";
import lang from "./lang.jpeg";
import prism from "./prism.jpg";
import game from "./video.png";
import homeless from "./homeless.png";
import iron from "./ironridge.png";
import Popup from "reactjs-popup";
class Work extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div class="mainDiv">
          <link rel="stylesheet" href="work.css" />
          <h1>
            Learn more about my projects and work by clicking on the images!
          </h1>
          <div class="row">
            <div class="column">
              <Popup
                trigger={
                  <button className="button">
                    {" "}
                    <img class="img-circle imgW" src={att} />{" "}
                  </button>
                }
                modal
              >
                {close => (
                  <div>
                    <div className="content">
                      <img class="img" src={att} />
                      <br />
                      At ATT, I worked on the personalization data team working
                      on increasing data retrieval efficiency for internal
                      configuration tools by implementing new GraphQL,
                      interservice/database communication metadata microservices
                      in the Java Springboot Framework. I tested my new micro
                      services using J-Unit/Mockito/SonarQube for optimal code
                      coverage and efficiency. On this team, I worked
                      effectively in the Agile Software Environment. At ATT, I
                      delved deep into the culture as I served as Girls Who Code
                      Panelist for ATT, supporting diversity in computer science
                      through tech talks.
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
            <div class="column">
              <Popup
                trigger={
                  <button className="button">
                    {" "}
                    <img class="img-circle imgW" src={microsoft} />{" "}
                  </button>
                }
                modal
              >
                {close => (
                  <div>
                    <div className="content">
                      <img class="img" src={microsoft} />
                      <br />
                      This summer I will be working at Microsoft under the
                      Digital Security and Risk Engineering Team. I am so
                      excited to have this opportunity!
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
            <div class="column">
              <Popup
                trigger={
                  <button className="button">
                    {" "}
                    <img class="img-circle imgW" src={med} />{" "}
                  </button>
                }
                modal
              >
                {close => (
                  <div>
                    <div className="content">
                      <img class="img" src={med} />
                      <br />
                      MedWeb is an application I developed at LAHacks. I worked
                      as the machine learning lead. MedWeb detects for
                      cancerous, malignant skin cancer and carcinomas with
                      convolutional neural networks with TensorFlow and
                      Stochastic Gradient Descent to classify whether skin
                      lesions are malignant or benign, the app classifies
                      various medical conditions. We used Python and TensorFlow.
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
          <br /> <br />
          <div class="row">
            <div class="column">
              <Popup
                trigger={
                  <button className="button">
                    {" "}
                    <img class="img-circle imgW" src={find} />{" "}
                  </button>
                }
                modal
              >
                {close => (
                  <div>
                    <div className="content">
                      <img class="img" src={find} />
                      <br />
                      Find My Service is an AR application to direct users to
                      the nearest cellular service using a distance/signal
                      strength algorithm and crowdsourced data. This app
                      enhanced ATTT wireless customer experience. In the future,
                      this app's data will optimize cell tower placement and
                      provide emergency response data, detecting which cell
                      towers are down. Used Android Studio, Google AR Core,
                      Google Firebase. Worked as the lead AR programmer.
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
            <div class="column">
              <Popup
                trigger={
                  <button className="button">
                    {" "}
                    <img class="img-circle imgW" src={inn} />{" "}
                  </button>
                }
                modal
              >
                {close => (
                  <div>
                    <div className="content">
                      <img class="img" src={inn} />
                      <br />
                      In-Or-Out is a dynamic web application that allows users
                      search for restaurants and recipes. The application
                      recommends the user other food based on their past
                      searches. The application has full login/register
                      capabilities. I worked on the front-end for this project
                      working with HTML, CSS, Javascript, JSP files, AJAX,
                      Bootstrap, and SQL. You can check out our application
                      here:
                      <a href="https://in-or-out201.herokuapp.com/">
                        {" "}
                        In-or-out
                      </a>
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
            <div class="column">
              {" "}
              <Popup
                trigger={
                  <button className="button">
                    {" "}
                    <img class="img-circle imgW" src={lang} />{" "}
                  </button>
                }
                modal
              >
                {close => (
                  <div>
                    <div className="content">
                      <img class="img" src={lang} />
                      <br />
                      Languages known: C++ (proficient), Java (proficient),
                      HTML/CSS (proficient), Javascript (intermediate), Python
                      (intermediate), C# (proficient), SQL (proficient) Tools
                      Used: JDBC, AJAX, TensorFlow, Google Firebase, Google
                      Cloud SQL, GraphQL, Java Springboot, Mockito, J-Unit,
                      Android, Unity
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
          <br /> <br /> <br />
          <div class="row">
            <div class="column">
              <Popup
                trigger={
                  <button className="button">
                    {" "}
                    <img class="img-circle imgW" src={prism} />{" "}
                  </button>
                }
                modal
              >
                {close => (
                  <div>
                    <div className="content">
                      <img class="img" src={prism} />
                      <br />I created an Arduino LED Spectrophotometer with $50
                      comparable to the ones on the market for $1000. I worked
                      as the programmer on this project. We achieved a 70%
                      accuracy. This project will hopefully be used to test for
                      water quality. We were awarded the Gordon Research
                      Fellowship for our project.
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
            <div class="column">
              <Popup
                trigger={
                  <button className="button">
                    {" "}
                    <img class="img-circle imgW" src={game} />{" "}
                  </button>
                }
                modal
              >
                {close => (
                  <div>
                    <div className="content">
                      <img class="img" src={game} />
                      <br />I created a Unity game: Quantum Shattered. Quantum
                      Shattered is a 2D side-scrolling RPG game where a
                      character must defeat monsters on the way to finding out
                      who destroyed her planet. To defeat the monsters, she
                      battles them, gaining power through excellency in typing
                      sequences rapidly.
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
            <div class="column">
              {" "}
              <Popup
                trigger={
                  <button className="button">
                    {" "}
                    <img class="img-circle imgW" src={homeless} />{" "}
                  </button>
                }
                modal
              >
                {close => (
                  <div>
                    <div className="content">
                      <img class="img" src={homeless} />
                      <br />
                      CS Majors like to write too! I wrote an article in the USC
                      Academic Journal on the homeless issue in Los Angeles.
                      <a href="http://scribe.usc.edu/the-homeless-drug-addled-indolence-or-unfortunate-disadvantages/">
                        {" "}
                        Article
                      </a>
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
          <br /> <br /> <br />
          <div class="row">
            <div class="column">
              <Popup
                trigger={
                  <button className="button">
                    {" "}
                    <img class="img-circle imgW" src={iron} />{" "}
                  </button>
                }
                modal
              >
                {close => (
                  <div>
                    <div className="content">
                      <img class="img" src={iron} />
                      <br />I worked at Ironridge as a mechanical engineering
                      intern. I tested solar mounting products for durability
                      and environmental conditions using Instron and Skidmore.
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
        </div>
      </React.Fragment>
    );
  }
}
export default Work;
