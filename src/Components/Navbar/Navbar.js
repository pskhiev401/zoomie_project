import React, { Component } from "react";
import "./Navbar.scss";

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar_container">
        <div className="nav_left">Zoomie</div>
        <div className="nav_right">
          <div>Login</div>
          <div>Account</div>
          <div>SignOut</div>
        </div>
      </div>
    );
  }
}

export default Navbar;
