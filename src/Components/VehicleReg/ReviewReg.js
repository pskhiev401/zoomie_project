import React, { Component } from "react";
import "./ReviewReg.scss";
import {Link} from 'react-router-dom';
import { connect } from "react-redux";
import { handleChange } from "../../ducks/regReducer";
import axios from "axios";

class ReviewReg extends Component {
  render() {
    return (
      <div className="reg_main">
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
            Vehicle Type
            <select name="vehicle_type" onChange={e => this.props.handleChange(e)}>
              <option value="">Select</option>
              <option value="auto">auto</option>
              <option value="commerical">commerical</option>
              <option value="motorcycle">motorcycle</option>
            </select>
          </div>
          <div>
            Vehicle Year
            <input
              name="year"
              type="number"
              onChange={e => this.props.handleChange(e)}
            />
          </div>
          <div>
            Vehicle Make
            <input
              name="make"
              type="text"
              onChange={e => this.props.handleChange(e)}
            />
          </div>
          <div>
            Vehicle Model
            <input
              name="model"
              type="text"
              onChange={e => this.props.handleChange(e)}
            />
          </div>
          <div>
            Vin
            <input
              name="vin"
              type="number"
              onChange={e => this.props.handleChange(e)}
            />
          </div>
          <div>
            License Plate
            <input
              name="lic_plate"
              type="number"
              onChange={e => this.props.handleChange(e)}
            />
          </div>
          <Link to="/">
          <button onClick={() => this.props.submitDLForm()}className="wiz-btn">Sumbit</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { handleChange }
)(ReviewReg);

