import React, { Component } from "react";
import "./App.scss";
import routes from "./routes";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">{routes}</div>
      </BrowserRouter>
    );
  }
}

export default App;
