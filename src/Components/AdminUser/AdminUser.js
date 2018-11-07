import React, { Component } from "react";
import "./AdminUser.scss";
import AdminSideNav from "../SideNav/Admin/AdminSideNav";
import { connect } from "react-redux";
import { getUserInfo } from "../../ducks/dlReducer";
import axios from "axios";
import { Link } from "react-router-dom";

class AdminUser extends Component {
  constructor(){
    super();
    this.state={
      // allOrders : [],
      pendingOrders: [],
      // completedOrders: []
    }
  }
  componentDidMount() {
    axios.get("/api/getUserData")
    .then(res => {
      console.log(res.data);
      this.props.getUserInfo(res.data[0]);
    });

    // axios.get('/api/getPending').then(res => {
    //   console.log(res.data)
    //   this.setState({pendingOrders:res.data})
    // });
  }
  render() {
    return (
      <div className="admin_main_container">
        <div className="admin_left">
          <AdminSideNav />
          {/* {this.props.user_id === "google-oauth2|114190772025020872558" ? <AdminSideNav/>: window.location.href = `${process.env.REACT_APP_CLIENT}/dashboard`} */}
        </div>
        <div className="admin_right">
          <h1>Pending Snapshot</h1>
        </div>
        <div className="admin_right">
          <h1>Completed Snapshot</h1>
        </div>
        <div className="admin_right">
          <h1>Charts</h1>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;
export default connect(
  mapStateToProps,
  { getUserInfo }
)(AdminUser);
