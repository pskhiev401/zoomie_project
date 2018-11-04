import React, { Component } from "react";
import "./DL4.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { handleChange, submitDLForm } from "../../../ducks/dlReducer";
// import axios from "axios";

class DL4 extends Component {
  // submitDLForm() {
  //   const {
  //     address_1,
  //     address_2,
  //     city,
  //     state,
  //     zipcode,
  //     organ_donor,
  //     voter_reg
  //   } = this.props;
  //   axios.post("/api/dlform", {
  //     address_1,
  //     address_2,
  //     city,
  //     state,
  //     zipcode,
  //     organ_donor,
  //     voter_reg
  //   });
  // }

  // Capt Hindsight: we added an extra layer of complexity by moving our post method inside redux, below is how we could simply the post by leaving here. e is what we called in the reducer file, therefore we need to user it here.

  // sumbitDLForm = () => {
  //   axios.post('URL', {e: this.props})
  // }

  render() {
    console.log(this.props)
    return (
      <div className='dl4_main'>
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
          <select name="organ_donor" onChange={e => this.props.handleChange(e)}>
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
          <Link to="/reviewdl">
            <button onClick={() => this.props.submitDLForm(this.props)} className="wiz-btn"> Next </button>
          </Link>
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



