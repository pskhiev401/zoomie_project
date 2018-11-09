import React, { Component } from "react";
import "./AdminUser.scss";
import AdminSideNav from "../SideNav/Admin/AdminSideNav";
import { connect } from "react-redux";
import { getUserInfo } from "../../ducks/dlReducer";
import axios from "axios";
import { Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

class AdminUser extends Component {
  constructor() {
    super();
    this.state = {
      // allOrders : [],
      completedOrders: [],
      pendingOrders: []
    };
  }
  componentDidMount() {
    //get userdata then update reducer
    axios.get("/api/getUserData").then(res => {
      this.props.getUserInfo(res.data[0]);
    });
    //pending jobs table
    axios.get("/api/getAllPending").then(res => {
      this.setState({ pendingOrders: res.data });
    });
    //completed jobs table
    axios.get("/api/getAllCompleted").then(res => {
      console.log(res.data);
      this.setState({ completedOrders: res.data });
    });
  }

  render() {
    // console.log(this.state.completedOrders);
    let displayAllPending = this.state.pendingOrders.map((e, i) => {
      return (
        <div key={i} className="user_card">
          <h3>
            {e.first_name} {e.last_name}
          </h3>
          <button>Details</button>
        </div>
      );
    });

    let displayAllCompleted = this.state.completedOrders.map((e, i) => {
      return (
        <div key={i} className="user_card">
          <h3>
            {e.first_name} {e.last_name}
          </h3>
          <button>Details</button>
        </div>
      );
    });
    return (
      <div className="admin_main_container">
        <div className="admin_left">
          <AdminSideNav />
        </div>
        <div className="admin_right">
          <h1>Pending Snapshot</h1>
          <div className="pending_container">{displayAllPending}</div>
        </div>
        <div className="admin_right">
          <h1>Completed Snapshot</h1>
          <div className="pending_container">{displayAllCompleted}</div>
        </div>
        <div className="admin_right">
          <h1>Charts</h1>
          <div className="pending_container">FRESH</div>
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
