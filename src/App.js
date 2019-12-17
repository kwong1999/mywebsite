import React from "react";
import "./App.css";
import Navbar from "./components/navbar.jsx";
import About from "./pages/about.jsx";
import Home from "./pages/home.jsx";
import Work from "./pages/work.jsx";
import Contact from "./pages/contact.jsx";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
        <div>
          <Route
            exact={true}
            path="/"
            render={() => (
              <div className="App">
                <Navbar />
                <Home />
              </div>
            )}
          />
          <Route
            exact={true}
            path="/about"
            render={() => (
              <div className="App">
                <Navbar />
                <About />
              </div>
            )}
          />
          <Route
            exact={true}
            path="/contact"
            render={() => (
              <div className="App">
                <Navbar />
                <Contact />
              </div>
            )}
          />
          <Route
            exact={true}
            path="/work"
            render={() => (
              <div className="App">
                <Navbar />
                <Work />
              </div>
            )}
          />
        </div>
      </BrowserRouter>
    </div>
  );
}
export default App;
