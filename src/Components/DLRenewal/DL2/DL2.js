import React, { Component } from "react";
import "./DL2.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { handleChange } from "../../../ducks/dlReducer";
// import axios from "axios";

class DL2 extends Component {

  // submitDLForm() {
  //   const {
  //     first_name,
  //     last_name,
  //     dob,
  //     ssn
  //   } = this.props;
  //   axios.post("/api/dlform", {
  //     first_name,
  //     last_name,
  //     dob,
  //     ssn
  //   });
  // }

  render() {
    return (
    <div className="dl2_main">
      <div>
          First Name
          <input
            name="first_name"
            value={this.props.first_name}
            type="text"
            onChange={e => this.props.handleChange(e)}
          />
        </div>
        <div>
          Last Name
          <input
            name="last_name"
            type="text"
            onChange={e => this.props.handleChange(e)}
          />
        </div>
        <div>
          DOB
          <input
            name="dob"
            type="date"
            onChange={e => this.props.handleChange(e)}
          />
        </div>
        <div>
            SSN
            <input
              name="ssn"
              maxLength="9"
              title="Expected pattern is XXX-XX-XXXX"
              onChange={e => this.props.handleChange(e)}
            />
          </div>
    <Link to="/dl3">
      <button className="wiz-btn">Next</button>
    </Link>
    </div>
      );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { handleChange }
)(DL2);

