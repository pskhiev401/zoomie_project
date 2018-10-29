import React, { Component } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar_container">
      <Link to="/"><p>Zoomie</p></Link>
        <div className="nav_right">
          <p>Login</p>
          <Link to="/dashboard"><p>Dashboard</p></Link>
          <p>SignOut</p>
        </div>
      </div>
    );
  }
}

export default Navbar;
