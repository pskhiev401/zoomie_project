import React, { Component } from "react";
import "./AdminSideNav.scss";
import { connect } from "react-redux";
import { Link } from "react-router-dom";


class AdminSideNav extends Component {
  render() {
    // console.log(this.props);
    return (
      <div className="main_side_container">
      <div className="nav_item">
        <img
          src="https://image.flaticon.com/icons/svg/983/983912.svg"
          alt="dashboard"
        />
        <h2>DASHBOARD</h2>
      </div>
      <div className="nav_item">
        <img
          src="https://image.flaticon.com/icons/svg/299/299396.svg"
          alt="form"
        />
        <h2>FORM</h2>
      </div>
      <div className="nav_item">
        <img
          src="https://image.flaticon.com/icons/svg/70/70427.svg"
          alt="camera scanner"
        />
        <h2>SCAN</h2>
      </div>
      <div className="nav_item">
        <img
          src="https://image.flaticon.com/icons/svg/1250/1250678.svg"
          alt="signout"
        />
        <Link to='/'><h2>SIGNOUT</h2></Link>
      </div>
    </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(AdminSideNav);