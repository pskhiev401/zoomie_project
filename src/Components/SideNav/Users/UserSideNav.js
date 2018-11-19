import React, { Component } from "react";
import "./UserSideNav.scss";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class UserSideNav extends Component {
  render() {
    // console.log(this.props);
    return (
      <div className="main_side_container">
        <Link to="/dashboard">
          <div className="nav_item">
            <img
              src="https://image.flaticon.com/icons/svg/983/983912.svg"
              alt="dashboard"
            />
            <h2>DASHBOARD</h2>
          </div>
        </Link>
        <Link to="/dl1">
          <div className="nav_item">
            <img
              src="https://image.flaticon.com/icons/svg/299/299396.svg"
              alt="form"
            />
            <h2>FORM</h2>
          </div>
        </Link>

        <Link to="/dlscan">
          <div className="nav_item">
            <img
              src="https://image.flaticon.com/icons/svg/70/70427.svg"
              alt="camera scanner"
            />
            <h2>SCAN</h2>
          </div>
        </Link>
        <Link to="/">
          <div className="nav_item">
            <img
              src="https://image.flaticon.com/icons/svg/1250/1250678.svg"
              alt="signout"/>
            <h2>SIGNOUT</h2>
          </div>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(UserSideNav);
