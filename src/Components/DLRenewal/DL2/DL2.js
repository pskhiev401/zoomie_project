import React, { Component } from "react";
import "../DL2/DL2.scss";
import { Link } from "react-router-dom";

class DL2 extends Component {
  render() {
    const { updateFirstName, updateMiddleName, updateLastName, updateBirthMonth, updateBirthDate, updateBirthYear, updateAddress1, updateAddress2, updateCity, updateState, updateZipcode } = this.props;
    return (
      <div className="parent_div">
        <div className="vert_align">
          <p>What Is Your Legal Name?</p><br/>
          <div >
          <input placeholder="First Name"type="text"onChange={e => updateFirstName(e.target.value)}/>
          <input placeholder="Middle Name"type="text"onChange={e => updateMiddleName(e.target.value)}/>
          <input placeholder="Last Name"type="text"onChange={e => updateLastName(e.target.value)}/>
          </div><br/>
          <p>What Is Your DOB?</p><br/>
          <div >
          <input placeholder="Month"type="number"onChange={e => updateBirthMonth(e.target.value)}/>
          <input placeholder="Date"type="number"onChange={e => updateBirthDate(e.target.value)}/>
          <input placeholder="Year"type="number"onChange={e => updateBirthYear(e.target.value)}/>
          </div>

          <p>What Is Your Address?</p><br/>
          
          <div >
          <input placeholder="Address Line 1"type="text"onChange={e => updateAddress1(e.target.value)}/>
          <input placeholder="Address Line 2"type="text"onChange={e => updateAddress2(e.target.value)}/>
          <input placeholder="City"type="text"onChange={e => updateCity(e.target.value)}/>
          <input placeholder="State"type="text"onChange={e => updateState(e.target.value)}/>
          <input placeholder="Zipcode"type="number"onChange={e => updateZipcode(e.target.value)}/>

          </div><br/>
          <Link to="/DL3"><button className="wiz-btn"> Next </button></Link>
        </div>
      </div>
    );
  }
}

export default DL2;

// WE NEED TO CONNECT TO REDUX!
