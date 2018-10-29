import React from "react";
import { Switch, Route } from "react-router-dom";

import Landing from "./Components/Landing/Landing";
import Dashboard from "./Components/Dashboard/Dashboard";
import DLRenewal from "./Components/DLRenewal/DL1/DLRenewal";
import DL2 from "./Components/DLRenewal/DL2/DL2";
import VehicleReg from "./Components/VehicleReg/VehicleReg";

export default (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/DL1" component={DLRenewal} />
    <Route path="/DL2" component={DL2} />
    <Route path="/RG1" component={VehicleReg} />
  </Switch>
);
