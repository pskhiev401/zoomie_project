import React from "react";
import { Switch, Route } from "react-router-dom";

import Landing from "./Components/Landing/Landing";
import Dashboard from "./Components/Dashboard/Dashboard";
import DLRenewal from "./Components/DLRenewal/DLRenewal";
import VehicleReg from "./Components/VehicleReg/VehicleReg";

export default (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/dlrenew" component={DLRenewal} />
    <Route path="/regrenew" component={VehicleReg} />
  </Switch>
);
