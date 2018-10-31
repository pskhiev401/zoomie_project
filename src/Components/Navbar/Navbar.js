import React, { Component } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar_container">
        <div className="nav_left">
          <Link to="/"><p>Zoomie</p></Link>
        </div>

        <div className="nav_right">
          <Link to="/login"><p>Login</p></Link>
          <Link to="/dashboard"><p>Dashboard</p></Link>
          <Link to="/Signout"><p>SignOut</p></Link>
        </div>
    
      </div>
    );
  }
}

export default Navbar;
