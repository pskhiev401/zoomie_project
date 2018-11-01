import React from "react";
import { Switch, Route } from "react-router-dom";

import Landing from "./Components/Landing/Landing";
import Dashboard from "./Components/Dashboard/Dashboard";
import DLScan from "./Components/DLRenewal/DLScan/DLScan";
import DL1 from "./Components/DLRenewal/DL1/DL1";
import DL2 from "./Components/DLRenewal/DL2/DL2";
import DL3 from "./Components/DLRenewal/DL3/DL3";
import DL4 from "./Components/DLRenewal/DL4/DL4";
import ReviewDL from "./Components/DLRenewal/ReviewDL/ReviewDL";

import ReviewReg from "./Components/VehicleReg/ReviewReg";

export default (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/dlscan" component={DLScan} />
    <Route path="/dl1" component={DL1} />
    <Route path="/dl2" component={DL2} />
    <Route path="/dl3" component={DL3} />
    <Route path="/dl4" component={DL4} />
    <Route path="/reviewdl" component={ReviewDL} />
    
    <Route path="/reviewReg" component={ReviewReg} />
  </Switch>
);
