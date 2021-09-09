import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/public_api" exact component={Api} />
    </Switch>
  </Router>
);
