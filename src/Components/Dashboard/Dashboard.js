import React, { Component } from "react";
import "./Dashboard.scss";
// import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { getUserInfo } from "../../ducks/dlReducer";
import AdminUser from "./AdminUser/AdminUser";
import CustomerUser from "./CustomerUser/CustomerUser";

class Dashboard extends Component {
  componentDidMount() {
    axios.get("/api/getUserData").then(res => {
      console.log(res.data);
      this.props.getUserInfo(res.data[0]);
    });
  }

  render() {
    // console.log(this.props);
    return (
      <div>
        {this.props.auth_id === "google-oauth2|114190772025020872558" ? (
          <AdminUser />
        ) : (
          <CustomerUser />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { getUserInfo }
)(Dashboard);
