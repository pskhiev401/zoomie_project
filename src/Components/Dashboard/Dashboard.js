import React, { Component } from "react";
import "./Dashboard.scss";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  render() {
    return (
      <div className="dash_main">
        <Navbar />
        <div className="product_container">
          <Link to="/DL1">
            <div className="product_left">
              <p>DRIVERS LICENSE / ID CARD</p>
              <p>
                Spicy jalapeno bacon ipsum dolor amet pancetta beef lorem jowl
                veniam cillum, ham prosciutto. Officia in t-bone exercitation
                shoulder. Drumstick turkey rump pork belly pork. Do ribeye
                eiusmod pork belly anim pastrami. Shank beef occaecat do ut
                turkey exercitation sunt frankfurter pariatur meatloaf corned
                beef. Biltong anim eiusmod ea ribeye pastrami adipisicing
                ullamco eu.
              </p>
            </div>
          </Link>
          <Link to="/RG1">
            <div className="product_right">
            <p>VEHICLE REGISTRATION</p>
              <p>
                Spicy jalapeno bacon ipsum dolor amet pancetta beef lorem jowl
                veniam cillum, ham prosciutto. Officia in t-bone exercitation
                shoulder. Drumstick turkey rump pork belly pork. Do ribeye
                eiusmod pork belly anim pastrami. Shank beef occaecat do ut
                turkey exercitation sunt frankfurter pariatur meatloaf corned
                beef. Biltong anim eiusmod ea ribeye pastrami adipisicing
                ullamco eu. 
              </p>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Dashboard;
