import React, { Component } from "react";
import "./DL3.scss";
import { Link } from "react-router-dom";

class DL3 extends Component {
  render() {
    const {
      updateFirstName,
      updateLastName,
      updateBirthMonth,
      updateAddress1,
      updateAddress2,
      updateCity,
      updateState,
      updateZipcode
    } = this.props;
    return (
      <div className="parent_div">
        <div className="left_align">
          <p>Personal Deets</p>
          <input
            required
            placeholder="First Name"
            type="text"
            onChange={e => updateFirstName(e.target.value)}/>
          <input
            required
            placeholder="Last Name"
            type="text"
            onChange={e => updateLastName(e.target.value)}
          />
          
          <p>DOB</p>
          <input
            required
            type="date"
            onChange={e => updateBirthMonth(e.target.value)}
          />
          <p>Mailing Address</p>
          <input
            placeholder="Address Line 1"
            type="text"
            onChange={e => updateAddress1(e.target.value)}
          />
          <input
            placeholder="Address Line 2"
            type="text"
            onChange={e => updateAddress2(e.target.value)}
          />
          <input
            placeholder="City"
            type="text"
            onChange={e => updateCity(e.target.value)}
          />
          <input
            placeholder="State"
            type="text"
            onChange={e => updateState(e.target.value)}
          />
          <input
            placeholder="Zipcode"
            type="number"
            onChange={e => updateZipcode(e.target.value)}
          />
          <Link to="/DL2">
            <button className="wiz-btn"> Next </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default DL3;
