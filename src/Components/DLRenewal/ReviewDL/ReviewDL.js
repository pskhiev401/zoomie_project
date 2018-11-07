import React, { Component } from "react";
import "./ReviewDL.scss";
import { connect } from "react-redux";
import { handleChange, finalDLSubmit } from "../../../ducks/dlReducer";
import { Link } from "react-router-dom";
import moment from "moment";
// import ContentEditable from "react-contenteditable";

class ReviewDL extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="review_main">
        <div className="review_right">
          {/* <div>
            First Name
            <input
              name="first_name"
              defaultValue={this.props.first_name}
              type="text"
              onChange={e => this.props.handleChange(e)}
            />
          </ div> */}

          <div>
            First Name
            <input
            contentEditable='true'
              name="first_name"
              defaultValue={this.props.first_name}
              onChange={e => this.props.handleChange(e)}
            />
          </div>
          <div>
            Last Name
            <input
              name="last_name"
              defaultValue={this.props.last_name}
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
            SEX
            <select
              name="sex"
              onChange={e => this.props.handleChange(e)}
              defaultValue={this.props.sex}
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div>
            HAIR
            <input
              name="hair"
              defaultValue={this.props.hair}
              type="text"
              onChange={e => this.props.handleChange(e)}
            />
          </div>
          <div>
            EYES
            <input
              name="eyes"
              defaultValue={this.props.eyes}
              type="text"
              onChange={e => this.props.handleChange(e)}
            />
          </div>
          <div>
            HEIGHT
            <input
              name="height"
              defaultValue={this.props.height}
              type="text"
              onChange={e => this.props.handleChange(e)}
            />
          </div>
          <div>
            WEIGHT
            <input
              name="weight"
              defaultValue={this.props.weight}
              type="number"
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
          </div>
          <div>
            DL Form Type
            <select
              name="dl_type"
              onChange={e => this.props.handleChange(e)}
              defaultValue={this.props.dl_type}
            >
              <option value="">Select</option>
              <option value="new">New</option>
              <option value="renewal">Renewal</option>
              <option value="duplicate">Duplicate</option>
            </select>
          </div>
          <div>
            DL Class
            <select
              name="dl_class"
              onChange={e => this.props.handleChange(e)}
              defaultValue={this.props.dl_class}
            >
              <option value="">Select</option>
              <option value="C">Class C</option>
              <option value="M1">Motocycle</option>
            </select>
          </div>
          <div>
            DL Number
            <input
              name="dl_num"
              defaultValue={this.props.dl_num}
              type="text"
              onChange={e => this.props.handleChange(e)}
            />
          </div>
          <div>
            DL EXP
            <input
              name="dl_exp"
              defaultValue={moment(this.props.dl_exp).format("mm/dd/yyyy")}
              type="date"
              onChange={e => this.props.handleChange(e)}
              selected={moment(this.props.dl_exp).format("mm/dd/yyyy")}
            />
          </div>
          <div>
            Address1
            <input
              name="address_1"
              defaultValue={this.props.address_1}
              type="text"
              onChange={e => this.props.handleChange(e)}
            />
          </div>
          <div>
            Address2
            <input
              name="address_2"
              defaultValue={this.props.address_2}
              type="text"
              onChange={e => this.props.handleChange(e)}
            />
          </div>
          <div>
            City
            <input
              name="city"
              defaultValue={this.props.city}
              type="text"
              onChange={e => this.props.handleChange(e)}
            />
          </div>
          <div>
            State
            <input
              name="state"
              defaultValue={this.props.state}
              type="text"
              maxLength="2"
              onChange={e => this.props.handleChange(e)}
            />
          </div>
          <div>
            Zipcode
            <input
              name="zipcode"
              defaultValue={this.props.zipcode}
              type="number"
              maxLength="5"
              onChange={e => this.props.handleChange(e)}
            />
          </div>
          <div>
            Organ Donor
            <select
              name="organ_donor"
              onChange={e => this.props.handleChange(e)}
              defaultValue={this.props.organ_donor}
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div>
            Voter Registration
            <select
              name="voter_reg"
              onChange={e => this.props.handleChange(e)}
              defaultValue={this.props.voter_reg}
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <button onClick={() => this.props.finalDLSubmit(this.props)}>
            Submit
          </button>
          <Link to="/dashboard" />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { handleChange, finalDLSubmit }
)(ReviewDL);
