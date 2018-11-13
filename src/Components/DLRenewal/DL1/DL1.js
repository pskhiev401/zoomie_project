import React, { Component } from "react";
import "./DL1.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { handleChange } from "../../../ducks/dlReducer";
import moment from "moment";
import UserSideNav from "../../SideNav/Users/UserSideNav";

class DL1 extends Component {
  render() {
    return (
      <div className="dl_wiz_main">
        <div className="left_nav_container">
          <UserSideNav />
        </div>

        <div className="right_container">
          <div className="wrapper_container">
            <h1>Drivers License</h1>
            <h2>Fill In Details About Your License</h2>
            <div>
              <h2>DL Form Type</h2>
              <select
                name="dl_type"
                onChange={e => this.props.handleChange(e)}
                defaultValue={this.props.dl_type}
              >
                <option value="">Select</option>
                <option value="new">New</option>
                <option value="renewal">Renewal</option>
                <option value="duplicate">Duplicate</option>
              </select>
            </div>

            <div>
              <h2>DL Class</h2>
              <select
                name="dl_class"
                onChange={e => this.props.handleChange(e)}
                defaultValue={this.props.dl_class}
              >
                <option value="">Select</option>
                <option value="C">Class C</option>
                <option value="M1">Motocycle</option>
              </select>
            </div>

            <div>
              <h2>DL Number</h2>
              <input
                name="dl_num"
                defaultValue={this.props.dl_num}
                type="text"
                onChange={e => this.props.handleChange(e)}
              />
            </div>

            <div>
              <h2>DL EXP</h2>
              <input
                name="dl_exp"
                defaultValue={moment(this.props.dl_exp).format("mm/dd/yyyy")}
                type="date"
                onChange={e => this.props.handleChange(e)}
                selected={moment(this.props.dl_exp).format("mm/dd/yyyy")}
              />
            </div>
            <div>
              <Link to="/dl2">
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
)(DL1);
