import React, { Component } from "react";
import "./DLRenewal.scss";
import { Link } from "react-router-dom";

class DLRenewal extends Component {
  render() {
    return (
      <div className="parent_div">
        <div className="vert-align">
          <p>Do You Already Have A Drivers License, Or From Another State ?</p>
          <br />
          {/* <select onChange={e => updateAnotherState(e.target.value)}> */}
          <select>
            <option type="text" value="Yes">
              Yes
            </option>
            <option type="text" value="No">
              No
            </option>
          </select>
          <br />
          <p>Which Drivers License Do You Need ?</p> <br />
          {/* <select onChange={e => updateLoanType(e.target.value)}> */}
          <select>
            <option type="text" value="New">
              New
            </option>
            <option type="text" value="Renewal">
              Renewal
            </option>
            <option type="text" value="Duplicate">
              Duplicate
            </option>
          </select>
          <br />
          <p>What is your Drivers Class ?</p> <br />
          {/* <select onChange={e => updatePropertyType(e.target.value)}> */}
          <select>
            <option value="Class C">Class C</option>
            <option value="Motorcycle">Motorcycle (M1)</option>
          </select>
          <br />
          <Link to="/DL2">
            <button className="wiz-btn"> Next </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default DLRenewal;
