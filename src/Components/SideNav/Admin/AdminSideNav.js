import React, { Component } from "react";
import "./AdminSideNav.scss";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class AdminSideNav extends Component {
  render() {
    // console.log(this.props);
    return (
      <div id='admin_nav' className="main_side_container">
        <Link to="/dashboard">
          <div className="nav_item">
            <img
              src="https://image.flaticon.com/icons/svg/983/983912.svg"
              alt="dashboard"
            />
            <h2>DASHBOARD</h2>
          </div>
        </Link>
        <Link to="/">
          <div className="nav_item">
            <img
              src="https://image.flaticon.com/icons/svg/1250/1250678.svg"
              alt="signout"
            />
            <h2>SIGNOUT</h2>
          </div>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(AdminSideNav);
