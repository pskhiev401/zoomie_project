import React, { Component } from "react";
import "./CustomerUser.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { getUserInfo } from "../../../ducks/dlReducer";
import UserSideNav from "../../SideNav/Users/UserSideNav";

class CustomerUser extends Component {
  componentDidMount() {
    axios.get("/api/getUserData").then(res => {
      console.log(res.data);
      this.props.getUserInfo(res.data[0]);
    });
  }

  render() {
    // console.log(this.props);
    return (
      <div className="dash_main">
        <div className="left_nav_container">
          <UserSideNav />
        </div>
        <div className="empty_center" />
        <div className="right_container">
          <div className="left_side">
          <h2>Replacement ID / DL</h2>
          <div className='center_boxes'>
            <img src='https://image.flaticon.com/icons/svg/138/138360.svg' alt='job ticket'/>
            <img id= 'arrow' src='https://image.flaticon.com/icons/svg/122/122636.svg' alt='right arrow'/>
            <img src='https://image.flaticon.com/icons/svg/948/948593.svg' alt='mailbox'/>
            <img id= 'arrow' src='https://image.flaticon.com/icons/svg/122/122636.svg' alt='right arrow'/>
            <img src='https://image.flaticon.com/icons/svg/1027/1027618.svg' alt='thumbs up'/>
          </div>
          <div className='center_boxes'>
            <h3>Begin by completing the form or take a photo of your old ID/DL</h3>
          </div>
          <div className="bottom_button">
              <Link to="/dl1">
                <div id="dash_button">
                  <img
                    src="https://image.flaticon.com/icons/svg/299/299396.svg"
                    alt="form"/>
                  <h2>FORM</h2>
                </div>
              </Link>
              <Link to="/dlscan">
                <div id="dash_button">
                  <img
                    src="https://image.flaticon.com/icons/svg/70/70427.svg"
                    alt="camera scanner"/>
                  <h2>SCAN</h2>
                </div>
              </Link>
            </div>
          
          </div>
          <div className="right_side">
            <h1>Go. Explore. Instead.</h1>
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
)(CustomerUser);
