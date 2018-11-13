import React, { Component } from "react";
import "./DL2.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { handleChange } from "../../../ducks/dlReducer";
import moment from "moment";
import UserSideNav from "../../SideNav/Users/UserSideNav";

class DL2 extends Component {
  render() {
    return (
      <div className="dl_wiz_main">
        <div className="left_nav_container">
          <UserSideNav />
        </div>

        <div className="right_container">
          <div className="wrapper_container">
            <h1>Personal Info</h1>
            <h2>We need some #basic deets bout ya</h2>
            <div>
              <input
                name="first_name"
                defaultValue={"First Name" || this.props.first_name}
                type="text"
                onChange={e => this.props.handleChange(e)}
              />
            </div>
            <div>
              <input
                name="last_name"
                defaultValue={"Last Name" || this.props.last_name}
                type="text"
                onChange={e => this.props.handleChange(e)}
              />
            </div>
            <div>
              DOB
              <input
                name="dob"
                defaultValue={moment(this.props.dob).format("yyyy/mm/dd")}
                type="date"
                onChange={e => this.props.handleChange(e)}
              />
            </div>
            <div>
              SSN
              <input
                name="ssn"
                defaultValue={this.props.ssn}
                maxLength="9"
                title="Expected pattern is XXX-XX-XXXX"
                onChange={e => this.props.handleChange(e)}
              />
              <div />
              <Link to="/dl3">
                <button className="wiz-btn">Next</button>
              </Link>
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
  { handleChange }
)(DL2);
