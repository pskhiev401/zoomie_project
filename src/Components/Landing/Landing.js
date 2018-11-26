import React, { Component } from "react";
import "./Landing.scss";

class Landing extends Component {
  redirect(){
    window.location.href= `${process.env.REACT_APP_SERVER}/login`
  }
  render() {
    return (
        <div className="landing_img" >
        <div className='img_overlay'></div>
        <div className="landing_container" >
          <h1>Zoomie</h1> <br />
          <h3>Go. Explore. Instead.</h3> <br />
            <button onClick={() => this.redirect() }>START</button>
        </div>
      </div>
    );
  }
}

export default Landing;
