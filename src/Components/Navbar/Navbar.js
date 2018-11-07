import React, { Component } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar_container">
        <div className="nav_left">
          <Link to="/dashboard">
            <p>Zoomie</p>
          </Link>
        </div>

        <div className="nav_right">
          Welcome {this.props.first_name} {this.props.last_name}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;
export default connect(mapStateToProps)(Navbar);
