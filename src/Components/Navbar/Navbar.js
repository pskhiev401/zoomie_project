import React, { Component } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Navbar extends Component {
  logoutRedirect = () => {
    window.location.href = `${process.env.REACT_APP_CLIENT}`;
  };

  render() {
    return (
      <div className="Navbar_container">
        <div className="nav_left">
          <p className='hamburger_icon'>&#x2630;</p>
          <Link to="/dashboard">
            <h1>Zoomie</h1>
          </Link>
          {/* <img src='https://image.flaticon.com/icons/svg/113/113811.svg' alt='logo'/> */}
        </div>

        <div className="nav_middle"></div>

        <div className="nav_right">
          {/* <h2>
            {this.props.first_name} {this.props.last_name}{" "}
          </h2> */}
          <h2 onClick={() => this.logoutRedirect()}>SIGNOUT</h2>
          {/* logout button doesnt work yet */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;
export default connect(mapStateToProps)(Navbar);
