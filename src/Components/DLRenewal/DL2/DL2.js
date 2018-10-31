import React, { Component } from "react";
import "./DL2.scss";
import { Link } from "react-router-dom";

class DL2 extends Component {
  render() {
    return (
    <div>Hi
      <Link to="/DL3">
      <button className="wiz-btn"> Next </button>
    </Link>
    </div>
      );
  }
}

export default DL2;

// WE NEED TO CONNECT TO REDUX!
