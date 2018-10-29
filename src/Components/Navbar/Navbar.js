import React, { Component } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar_container">
        <Link to="/"><div className="nav_left">Zoomie</div></Link>
        <div className="nav_right">
          <div>Login</div>
          <Link to="/dashboard">
            <div>Dashboard</div>
          </Link>
          <div>SignOut</div>
        </div>
      </div>
    );
  }
}

export default Navbar;
