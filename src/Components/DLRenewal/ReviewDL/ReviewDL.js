import React, { Component } from "react";
import "./ReviewDL.scss";
import { connect } from "react-redux";
import { handleChange } from "../../../ducks/dlReducer";
import axios from "axios";
import {Link} from 'react-router-dom';

class ReviewDL extends Component {
  constructor() {
    super();
    this.state = {
      // first_name: "",
      // last_name: "",
      // dob: "",
      // sex: "",
      // ssn: "",
      // dl_type: "",
      // dl_class: "",
      // dl_exp: "",
      // dl_num: "",
      // address_1: "",
      // address_2: "",
      // city: "",
      // state: "",
      // zipcode: "",
      // hair: "",
      // eyes: "",
      // height: "",
      // organ_donor: "",
      // voter_reg: ""
    };
  }

  componentDidMount() {}

  submitDLForm() {
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
    } = this.props;
    axios.post("/api/dlform", {
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
    });
  }

  render() {
    console.log(this.props);
    return (
      <div className="review_main">
        <div className="review_left">
          <div>
            {/* <p> loading {displayUserInfo} </p> */}
            <p>{this.props.first_name}</p>
            <p>{this.props.last_name}</p>
            <p>{this.props.dob}</p>
            <p>{this.props.sex}</p>
            <p>{this.props.ssn}</p>
            <p>{this.props.hair}</p>
            <p>{this.props.eyes}</p>
            <p>{this.props.height}</p>
            <p>{this.props.weight}</p>
            <p>{this.props.address_1}</p>
            <p>{this.props.address_2}</p>
            <p>{this.props.city}</p>
            <p>{this.props.state}</p>
            <p>{this.props.zipcode}</p>
            <p>{this.props.dl_type}</p>
            <p>{this.props.dl_class}</p>
            <p>{this.props.dl_exp}</p>
            <p>{this.props.dl_num}</p>
            <p>{this.props.organ_donor}</p>
            <p>{this.props.voter_reg}</p>
          </div>
          <button onClick={() => this.submitDLForm()}>Submit</button>
        </div>
        <div className="review_right">
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
            {" "}
            SEX
            <select name="sex" onChange={e => this.props.handleChange(e)}>
              <option value="">Select</option>
              <option value="m">Male</option>
              <option value="f">Female</option>
            </select>
          </div>
          <div>
            HAIR
            <input
              name="hair"
              type="text"
              onChange={e => this.props.handleChange(e)}
            />
          </div>
          <div>
            EYES
            <input
              name="eyes"
              type="text"
              onChange={e => this.props.handleChange(e)}
            />
          </div>
          <div>
            HEIGHT
            <input
              name="height"
              type="text"
              onChange={e => this.props.handleChange(e)}
            />
          </div>
          <div>
            WEIGHT
            <input
              name="weight"
              type="number"
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
          <div>
            DL Form Type
            <select name="dl_type" onChange={e => this.props.handleChange(e)}>
              <option value="">Select</option>
              <option value="new">New</option>
              <option value="renewal">Renewal</option>
              <option value="duplicate">Duplicate</option>
            </select>
          </div>
          <div>
            DL Class
            <select name="dl_class" onChange={e => this.props.handleChange(e)}>
              <option value="">Select</option>
              <option value="c">Class C</option>
              <option value="m1">Motocycle</option>
            </select>
          </div>
          <div>
            DL Number
            <input
              name="dl_num"
              type="text"
              onChange={e => this.props.handleChange(e)}
            />
          </div>
          <div>
            DL EXP
            <input
              name="dl_exp"
              type="date"
              onChange={e => this.props.handleChange(e)}
            />
          </div>
          <div>
            Address1
            <input
              name="address_1"
              type="text"
              onChange={e => this.props.handleChange(e)}
            />
          </div>
          <div>
            Address2
            <input
              name="address_2"
              type="text"
              onChange={e => this.props.handleChange(e)}
            />
          </div>
          <div>
            City
            <input
              name="city"
              type="text"
              onChange={e => this.props.handleChange(e)}
            />
          </div>
          <div>
            State
            <input
              name="state"
              type="text"
              maxLength="2"
              onChange={e => this.props.handleChange(e)}
            />
          </div>
          <div>
            Zipcode
            <input
              name="zipcode"
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
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div>
            Voter Registration
            <select name="voter_reg" onChange={e => this.props.handleChange(e)}>
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <Link to="/">
            <button >Submit</button>
          </Link>
          make a put another submit handler?
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { handleChange }
)(ReviewDL);
