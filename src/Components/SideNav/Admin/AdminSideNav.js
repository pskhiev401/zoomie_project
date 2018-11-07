import React, { Component } from "react";
import "./AdminSideNav.scss";
import { connect } from "react-redux";
import { Link } from "react-router-dom";


class AdminSideNav extends Component {
  render() {
    // console.log(this.props);
    return (
      <div className="main_side_container">
        <Link to='/admin'><div>Admin Dashboard</div></Link>
        <div>Messages</div>
        <div>Pending Orders</div>
        <div>Completed Orders</div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(AdminSideNav);