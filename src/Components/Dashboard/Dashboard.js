import React, { Component } from "react";
import "./Dashboard.scss";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

class Dashboard extends Component {
  render() {
    return (
      <div className="dash_main">
        <img
          className="left_container"
          src="https://images.unsplash.com/photo-1491331568367-82b3c8018969?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dce7511a4f5635eaf9f27c89d2a07970&auto=format&fit=crop&w=634&q=80"
        />

        <div className="right_container">
          <div className="top_container">
            <div className="dl_top" />
            <div className="dl_bottom">
              <div className="button_box">
                <Link to="/dlscan">
                  {" "}
                  <button>Scan</button>
                </Link>
                <Link to="/dl1">
                  {" "}
                  <button>Form</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="bottom_container">
            <div className="dl_top" />
            <div className="dl_bottom">
              <div className="button_box">
                <Link to="/rgscan">
                  {" "}
                  <button>Scan</button>
                </Link>
                <Link to="/rg1">
                  {" "}
                  <button>Form</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
