import React, { Component } from "react";
import "./DL3.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { handleChange } from "../../../ducks/dlReducer";


class DL3 extends Component {

  render() {
    return (
      <div className="dl3_main">
        <div>
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
        <Link to="/dl4">
          <button className="wiz-btn">Next</button>
        </Link>
      </div>
    );
  }
}
const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { handleChange }
)(DL3);
