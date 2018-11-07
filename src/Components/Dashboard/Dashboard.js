import React, { Component } from "react";
import "./Dashboard.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { getUserInfo } from "../../ducks/dlReducer";
import UserSideNav from "../UserSideNav/UserSideNav";

class Dashboard extends Component {
  componentDidMount() {
    axios.get("/api/getUserData").then(res => {
      console.log(res.data);
      this.props.getUserInfo(res.data[0]);
    });
  }
  render() {
    return (
      <div className="dash_main">
        <div className="left_container">
        <UserSideNav/>
        </div>
        <div className='empty_center'></div>
        <div className="right_container">

          <div className="top_container">
            <div className="dl_top">
              <h2>Drivers License</h2>
            </div>
            <div className="dl_bottom">
              <div className="button_box">
                <Link to="/dlscan">
                  <button>Scan</button>
                </Link>
                <Link to="/dl1">
                  <button>Form</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="bottom_container">
            <div className="bt_top">
              <h2>Registration</h2>
              </div>
            <div className="bt_bottom">
              <div className="button_box">
                <Link to="/rgscan">
                  <button>Scan</button>
                </Link>
                <Link to="/reviewReg">
                  <button>Form</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { getUserInfo }
)(Dashboard);
