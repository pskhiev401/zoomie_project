import React, { Component } from "react";
import "./ReviewReg.scss";

class ReviewReg extends Component {
  render() {
    return (
      <div className="vehicle_reg_main">
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
            Voter Registration
            <select name="voter_reg" onChange={e => this.props.handleChange(e)}>
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            
          </div>

      </div>
    );
  }
}

export default ReviewReg;
