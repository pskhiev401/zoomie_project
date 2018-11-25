import React, { Component } from "react";
import "./DL4.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { handleChange, submitDLForm } from "../../../ducks/dlReducer";
import axios from "axios";
import UserSideNav from "../../SideNav/Users/UserSideNav";

class DL4 extends Component {
  // Capt Hindsight: we added an extra layer of complexity by moving our post method inside redux, below is how we could simply the post by leaving here. e is what we called in the reducer file, therefore we need to user it here.
  submitDLForm = e => {
    axios.post("/api/dlform", { e });
  };
  render() {
    console.log(this.props);
    return (
      <div className="dl_wiz_main">
        <div className="left_nav_container">
          <UserSideNav />
        </div>

        <div className="right_container">
          <div className="wrapper_container">
            <h1>Where Do You Get Mail? </h1>
            <h2>We're sending a you a Costco Pizza</h2>
            <div>
              <h2>Address 1</h2>
              <input
                name="address_1"
                defaultValue={this.props.address_1}
                type="text"
                onChange={e => this.props.handleChange(e)}
              />
            </div>
            <div>
              <h2>Address 2</h2>
              <input
                name="address_2"
                defaultValue={this.props.address_2}
                type="text"
                onChange={e => this.props.handleChange(e)}
              />
            </div>
            <div>
              <h2>City</h2>
              <input
                name="city"
                defaultValue={this.props.city}
                type="text"
                onChange={e => this.props.handleChange(e)}
              />
            </div>
            <div>
              <h2>State</h2>
              <input
                name="state"
                defaultValue={this.props.state}
                type="text"
                maxLength="2"
                onChange={e => this.props.handleChange(e)}
              />
            </div>
            <div>
              <h2>Zipcode</h2>
              <input
                name="zipcode"
                defaultValue={this.props.zipcode}
                type="number"
                maxLength="5"
                onChange={e => this.props.handleChange(e)}
              />
            </div>
            {/* <div>
              <h2>Organ Donor</h2>
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
              <h2>Voter Registration</h2>
              <select
                name="voter_reg"
                onChange={e => this.props.handleChange(e)}
                defaultValue={this.props.voter_reg}
              >
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div> */}
            <div>
              <Link to="/reviewdl">
                <button
                  // onClick={() => this.props.submitDLForm(this.props)}
                  onClick={() => this.submitDLForm(this.props)}
                  className="wiz-btn"
                >
                  Next
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { handleChange, submitDLForm }
)(DL4);
