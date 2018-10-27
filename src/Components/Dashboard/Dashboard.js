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
          <Link to="">
            <div className="product_left">DRIVERS LICENSE</div>
          </Link>
          <Link to="">
            <div className="product_right">REGISTRATION</div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Dashboard;
