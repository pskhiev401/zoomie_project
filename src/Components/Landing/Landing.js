import React, { Component } from "react";
import "./Landing.scss";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <>
        <div className="landing_gif">GIF</div>
        <div className="landing_container">
          <h1>Zoomie</h1> <br />
          <h3>stop wasting time</h3> <br />
          <Link to="/dashboard">
            <button>START</button>
          </Link>
        </div>
      </>
    );
  }
}

export default Landing;
