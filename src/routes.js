import React from "react";
import { Switch, Route } from "react-router-dom";

import Landing from "./Components/Landing/Landing";
import Dashboard from "./Components/Dashboard/Dashboard";
import DL1 from "./Components/DLRenewal/DL1/DL1";
import DL2 from "./Components/DLRenewal/DL2/DL2";
import VehicleReg from "./Components/VehicleReg/VehicleReg";

export default (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/DL1" component={DL1} />
    <Route path="/DL2" component={DL2} />
    <Route path="/RG1" component={VehicleReg} />
  </Switch>
);
