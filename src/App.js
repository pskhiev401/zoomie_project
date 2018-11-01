import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import {Provider} from 'react-redux';
import Navbar from "./Components/Navbar/Navbar";
import routes from "./routes";
import "./App.scss";
import store from './ducks/store';


class App extends Component {
  render() {
    // console.log(window.location.pathname);
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <div className="navbar_class">
              {window.location.pathname !== "/" && <Navbar />}
            </div>
            {routes}
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
