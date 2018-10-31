import React, { Component } from "react";
import "./App.scss";
import routes from "./routes";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";

class App extends Component {
  render() {
    console.log(window.location.pathname)
    return (
      <BrowserRouter>
        <div className="App">
          <div className='navbar_class'>
          {window.location.pathname !== "/" && 
            <Navbar /> }
          </div>
          {routes}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
