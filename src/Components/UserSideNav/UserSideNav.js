import React, { Component } from "react";
import "./UserSideNav.scss";
import { connect } from "react-redux";
import { Link } from "react-router-dom";


class UserSideNav extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="main_side_container">
        <Link to='/dashboard'><div>Dashboard</div></Link>
        <div>Messages</div>
        <div>Dashboard</div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(UserSideNav);
