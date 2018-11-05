import React, { Component } from "react";
import "./Dashboard.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { getUserInfo } from "../../ducks/dlReducer";

class Dashboard extends Component {
  componentDidMount(){
    axios.get("/api/getUserData")
    .then(res => {
      console.log(res.data);
      this.props.getUserInfo(res.data[0])
    })
  }
  render() {
    // console.log(window);
    return (
      <div className="dash_main">
        <img
          className="left_container"
          src="https://images.unsplash.com/photo-1491331568367-82b3c8018969?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dce7511a4f5635eaf9f27c89d2a07970&auto=format&fit=crop&w=634&q=80"
          alt="Whooops This is Embarassing"
        />
        <div className="right_container">
          <div className="top_container">
            <div className="dl_top" />
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
            <div className="dl_top" />
            <div className="dl_bottom">
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
