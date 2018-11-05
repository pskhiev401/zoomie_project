import React, { Component } from "react";
import "./ReviewDL.scss";
import { connect } from "react-redux";
import { handleChange } from "../../../ducks/dlReducer";
import { Link } from "react-router-dom";
import axios from "axios";
// import moment from "moment";
// import ContentEditable from "react-contenteditable";

class ReviewDL extends Component {
  constructor() {
    super();
    this.state = {
      formData: [],
      first_name: "",
      last_name: "",
      dob: "",
      sex: "",
      ssn: "",
      dl_type: "",
      dl_class: "",
      dl_exp: "",
      dl_num: "",
      address_1: "",
      address_2: "",
      city: "",
      state: "",
      zipcode: "",
      hair: "",
      eyes: "",
      height: "",
      weight: "",
      organ_donor: "",
      voter_reg: "",
      check: false
    };
  }

  async componentDidMount() {
    await axios.get("/api/getdlform").then(res => {
      this.setState({ formData: res.data, check: false });
    });
    this.stateFiller();
  }

  stateFiller() {
    const {
      first_name,
      last_name,
      dob,
      sex,
      ssn,
      dl_type,
      dl_class,
      dl_exp,
      dl_num,
      address_1,
      address_2,
      city,
      state,
      zipcode,
      hair,
      eyes,
      height,
      weight,
      organ_donor,
      voter_reg
    } = this.state.formData[0];
    this.setState({
      first_name: first_name,
      last_name: last_name,
      dob: dob,
      sex: sex,
      ssn: ssn,
      dl_type: dl_type,
      dl_class: dl_class,
      dl_exp: dl_exp,
      dl_num: dl_num,
      address_1: address_1,
      address_2: address_2,
      city: city,
      state: state,
      zipcode: zipcode,
      hair: hair,
      eyes: eyes,
      height: height,
      weight: weight,
      organ_donor: organ_donor,
      voter_reg: voter_reg,
      check: !this.state.check
    });
  }

  localChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  finalDLsubmit() {
    const {
      id,
      first_name,
      last_name,
      dob,
      sex,
      ssn,
      dl_type,
      dl_class,
      dl_exp,
      dl_num,
      address_1,
      address_2,
      city,
      state,
      zipcode,
      hair,
      eyes,
      height,
      weight,
      organ_donor,
      voter_reg
    } = this.state.formData;
    console.log(this.state.formData);
    axios
      .put(`/api/finalDL/${id}`, { 
        first_name: first_name,
        last_name: last_name,
        dob: dob,
        sex: sex,
        ssn: ssn,
        dl_type: dl_type,
        dl_class: dl_class,
        dl_exp: dl_exp,
        dl_num: dl_num,
        address_1: address_1,
        address_2: address_2,
        city: city,
        state: state,
        zipcode: zipcode,
        hair: hair,
        eyes: eyes,
        height: height,
        weight: weight,
        organ_donor: organ_donor,
        voter_reg: voter_reg, })
      .then()
      .catch(err => console.log(err));
  }

  render() {
    // console.log(this.state);
    return (
      <div className="review_main">
        <div className="review_left" />
        {this.state.check ? (
          <div className="review_right">
            <div>
              First Name
              <input
                name="first_name"
                value={this.state.first_name}
                type="text"
                onChange={this.localChangeHandler}
              />
            </div>
            <div>
              Last Name
              <input
                name="last_name"
                value={this.state.last_name}
                type="text"
                onChange={this.localChangeHandler}
              />
            </div>
            {/* <div>
              DOB
              <input
                name="dob"
                value= {moment(this.state.dob).format('yyyy/mm/dd')}
                type="date"
                onChange={this.localChangeHandler}
              />
            </div> */}
            <div>
              SEX
              <select
                name="sex"
                onChange={this.localChangeHandler}
                defaultValue={this.state.sex}
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
                value={this.state.hair}
                type="text"
                onChange={this.localChangeHandler}
              />
            </div>
            <div>
              EYES
              <input
                name="eyes"
                value={this.state.eyes}
                type="text"
                onChange={this.localChangeHandler}
              />
            </div>
            <div>
              HEIGHT
              <input
                name="height"
                value={this.state.height}
                type="text"
                onChange={this.localChangeHandler}
              />
            </div>
            <div>
              WEIGHT
              <input
                name="weight"
                value={this.state.weight}
                type="number"
                onChange={this.localChangeHandler}
              />
            </div>
            <div>
              SSN
              <input
                name="ssn"
                value={this.state.ssn}
                maxLength="9"
                title="Expected pattern is XXX-XX-XXXX"
                onChange={this.localChangeHandler}
              />
            </div>
            <div>
              DL Form Type
              <select
                name="dl_type"
                onChange={this.localChangeHandler}
                defaultValue={this.state.dl_type}
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
                onChange={this.localChangeHandler}
                defaultValue={this.state.dl_class}
              >
                <option value="">Select</option>
                <option value="c">Class C</option>
                <option value="m1">Motocycle</option>
              </select>
            </div>
            <div>
              DL Number
              <input
                name="dl_num"
                value={this.state.dl_num}
                type="text"
                onChange={this.localChangeHandler}
              />
            </div>
            {/* <div>
              DL EXP
              <input
                name="dl_exp"
                // label={moment(this.state.dl_exp).format('mm/dd/yyyy')}
                // defaultValue={moment(this.state.dl_exp).format('mm/dd/yyyy')}
                type="date"
                onChange={this.localChangeHandler}
                selected={moment(this.state.dl_exp).format("mm/dd/yyyy")}
              />
            </div> */}
            <div>
              Address1
              <input
                name="address_1"
                value={this.state.address_1}
                type="text"
                onChange={this.localChangeHandler}
              />
            </div>
            <div>
              Address2
              <input
                name="address_2"
                value={this.state.address_2}
                type="text"
                onChange={this.localChangeHandler}
              />
            </div>
            <div>
              City
              <input
                name="city"
                value={this.state.city}
                type="text"
                onChange={this.localChangeHandler}
              />
            </div>
            <div>
              State
              <input
                name="state"
                value={this.state.state}
                type="text"
                maxLength="2"
                onChange={this.localChangeHandler}
              />
            </div>
            <div>
              Zipcode
              <input
                name="zipcode"
                value={this.state.zipcode}
                type="number"
                maxLength="5"
                onChange={this.localChangeHandler}
              />
            </div>
            <div>
              Organ Donor
              <select
                name="organ_donor"
                onChange={this.localChangeHandler}
                defaultValue={this.state.organ_donor}
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
                onChange={this.localChangeHandler}
                defaultValue={this.state.voter_reg}
              >
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <button onClick={() => this.finalDLsubmit()}>Submit</button>
            <Link to="/" />
          </div>
        ) : (
          "Loading"
        )}
      </div>
    );
  }
}
const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { handleChange }
)(ReviewDL);
