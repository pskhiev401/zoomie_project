import React, { Component } from "react";
import "./Dashboard.scss";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  render() {
    return (
      <div className="dash_main">
        <Navbar />
        <div className="product_container">
          <Link to="/DL1">
            <div className="product_left">DRIVERS LICENSE / ID CARD</div>
          </Link>
          <Link to="/RG1">
            <div className="product_right"> VEHICLE REGISTRATION</div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Dashboard;
