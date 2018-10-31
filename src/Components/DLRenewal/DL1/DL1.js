import React, { Component } from "react";
import "./DL1.scss";
import { Link } from "react-router-dom";

class DL1 extends Component {
  render() {
    const {
      updateDLType,
      updateDLState,
      updateDLClass,
      updateHaveDL,
      updateDLNumber
    } = this.props;
    return (
      <div className="parent_div">
        <div className="left_align">
          <p>Do You Already Have A Drivers License ?</p>
          <select onChange={e => updateHaveDL(e.target.value)}>
            <option type="text" value="Yes">
              Yes
            </option>
            <option type="text" value="No">
              No
            </option>
          </select>
          <p>If Yes, Choose Which State and Enter DL Number?</p>

          <select onChange={e => updateDLState(e.target.value)}>
            <option type="text" value="AL">
              AL
            </option>
            <option type="text" value="AK">
              AK
            </option>
            <option type="text" value="AZ">
              AZ
            </option>
            <option type="text" value="AR">
              AR
            </option>
            <option type="text" value="CA">
              CA
            </option>
            <option type="text" value="CO">
              CO
            </option>
            <option type="text" value="CT">
              CT
            </option>
            <option type="text" value="DC">
              DC
            </option>
            <option type="text" value="DE">
              DE
            </option>
            <option type="text" value="FL">
              FL
            </option>
            <option type="text" value="GA">
              GA
            </option>
            <option type="text" value="HI">
              HI
            </option>
            <option type="text" value="ID">
              ID
            </option>
            <option type="text" value="IL">
              IL
            </option>
            <option type="text" value="IN">
              IN
            </option>
            <option type="text" value="IA">
              IA
            </option>
            <option type="text" value="KS">
              KS
            </option>
            <option type="text" value="KY">
              KY
            </option>
            <option type="text" value="LA">
              LA
            </option>
            <option type="text" value="ME">
              ME
            </option>
            <option type="text" value="MD">
              MD
            </option>
            <option type="text" value="MA">
              MA
            </option>
            <option type="text" value="MI">
              MI
            </option>
            <option type="text" value="MN">
              MN
            </option>
            <option type="text" value="MS">
              MS
            </option>
            <option type="text" value="MO">
              MO
            </option>
            <option type="text" value="MT">
              MT
            </option>
            <option type="text" value="NE">
              NE
            </option>
            <option type="text" value="NV">
              NV
            </option>
            <option type="text" value="NH">
              NH
            </option>
            <option type="text" value="NJ">
              NJ
            </option>
            <option type="text" value="NM">
              NM
            </option>
            <option type="text" value="NY">
              NY
            </option>
            <option type="text" value="NC">
              NC
            </option>
            <option type="text" value="ND">
              ND
            </option>
            <option type="text" value="OH">
              OH
            </option>
            <option type="text" value="OK">
              OK
            </option>
            <option type="text" value="OR">
              OR
            </option>
            <option type="text" value="PA">
              PA
            </option>
            <option type="text" value="RI">
              RI
            </option>
            <option type="text" value="SC">
              SC
            </option>
            <option type="text" value="SD">
              SD
            </option>
            <option type="text" value="TN">
              TN
            </option>
            <option type="text" value="TX">
              TX
            </option>
            <option type="text" value="UT">
              UT
            </option>
            <option type="text" value="VT">
              VT
            </option>
            <option type="text" value="VA">
              VA
            </option>
            <option type="text" value="WA">
              WA
            </option>
            <option type="text" value="WV">
              WV
            </option>
            <option type="text" value="WI">
              WI
            </option>
            <option type="text" value="WY">
              WY
            </option>
          </select>
          <input
            placeholder="Example: D345678"
            type="text"
            onChange={e => updateDLNumber(e.target.value)}
          />

          <p>Which Drivers License Do You Need ?</p>

          <select onChange={e => updateDLType(e.target.value)}>
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

          <p>What is your Drivers Class ?</p>

          <select onChange={e => updateDLClass(e.target.value)}>
            <option value="Class C">Class C</option>
            <option value="Motorcycle">Motorcycle (M1)</option>
          </select>

          <Link to="/DL4">
            <button className="wiz-btn"> Next </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default DL1;

// WE NEED TO CONNECT TO REDUX!
