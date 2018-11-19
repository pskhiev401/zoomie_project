import React, { Component } from "react";
import "./DL3.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { handleChange } from "../../../ducks/dlReducer";
import UserSideNav from "../../SideNav/Users/UserSideNav";

class DL3 extends Component {
  render() {
    return (
      <div className="dl_wiz_main">
        <div className="left_nav_container">
          <UserSideNav />
        </div>

        <div className="right_container">
          <div className="wrapper_container">
            <h1>Extra Deets</h1>
            <h2>Sooo we need more info...</h2>
            <div>
              <h2>SEX</h2>
              <select
                name="sex"
                onChange={e => this.props.handleChange(e)}
                defaultValue={this.props.sex}
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div>
              <h2>HAIR</h2>
              <input
                name="hair"
                defaultValue={this.props.hair}
                type="text"
                onChange={e => this.props.handleChange(e)}
              />
            </div>

            <div>
              <h2>EYES</h2>
              <input
                name="eyes"
                defaultValue={this.props.eyes}
                type="text"
                onChange={e => this.props.handleChange(e)}
              />
            </div>
            <div>
              <h2>HEIGHT</h2>
              <input
                name="height"
                defaultValue={this.props.height}
                type="text"
                onChange={e => this.props.handleChange(e)}
              />
            </div>
            <div>
              <h2>WEIGHT</h2>
              <input
                name="weight"
                defaultValue={this.props.weight}
                type="number"
                onChange={e => this.props.handleChange(e)}
              />
            </div>
            <div>
              <Link to="/dl4">
                <button className="wiz-btn">Next</button>
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
  { handleChange }
)(DL3);
