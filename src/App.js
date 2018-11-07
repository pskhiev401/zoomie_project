import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import {Provider} from 'react-redux';
import Navbar from "./Components/Navbar/Navbar";
import routes from "./routes";
import "./App.scss";
import store from './ducks/store';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <div >
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
