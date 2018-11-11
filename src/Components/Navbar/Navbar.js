import React, { Component } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Navbar extends Component {
  logoutRedirect = () => {
    window.location.href = `${process.env.REACT_APP_CLIENT}/logout`;
  };

  render() {
    return (
      <div className="Navbar_container">
        <div className="nav_left">
          <Link to="/dashboard">
            <p>Zoomie</p>
          </Link>
        </div>

        <div className="nav_middle"></div>

        <div className="nav_right">
          <h2>
            {this.props.first_name} {this.props.last_name}{" "}
          </h2>
          <h2 onClick={() => this.logoutRedirect()}>Logout</h2>
          {/* logout button doesnt work yet */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;
export default connect(mapStateToProps)(Navbar);
