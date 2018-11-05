import React, { Component } from "react";
import "./DL1.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { handleChange } from "../../../ducks/dlReducer";


class DL1 extends Component {
  constructor() {
    super();
    this.state = {
      userinput: ""
    };
  }

  // componentDidMount(){
  //   this.props.getUserAuthId()
  // }
  
  render() {
    return (
      <div className="dl1_main">
        <div>
          DL Form Type
          <select name="dl_type" onChange={e => this.props.handleChange(e)}>
            <option value="">Select</option>
            <option value="new">New</option>
            <option value="renewal">Renewal</option>
            <option value="duplicate">Duplicate</option>
          </select>
        </div>
        <div>
          DL Number
          <input
            name="dl_num"
            type="text"
            onChange={e => this.props.handleChange(e)}
          />
        </div>
        <div>
          DL Class
          <select name="dl_class" onChange={e => this.props.handleChange(e)}>
            <option value="">Select</option>
            <option value="C">Class C</option>
            <option value="M1">Motocycle</option>
          </select>
        </div>
        <div>
          DL EXP
          <input
            name="dl_exp"
            type="date"
            onChange={e => this.props.handleChange(e)}/>
        </div>
        <Link to="/dl2">
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
)(DL1);
